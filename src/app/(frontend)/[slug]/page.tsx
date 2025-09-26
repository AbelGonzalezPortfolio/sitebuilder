import { getPayload } from 'payload'
import { RefreshRouteOnSave } from './RefreshRouteOnSave'

import config from '@/payload.config'
import { notFound } from 'next/navigation'
import Hero from '../components/blocks/Hero'

import { headers as nextHeaders } from 'next/headers'
import { equal } from 'assert'

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const payload = await getPayload({ config })

  const headers = await nextHeaders()
  const { slug } = await params
  const { preview } = await searchParams
  const { user } = await payload.auth({ headers })

  const getPageBySlug = async (slug: string) => {
    const pageData = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
      limit: 1,
      pagination: false,
      overrideAccess: false,
      draft: user && preview ? true : false,
      user: user ? user : undefined,
    })

    return pageData?.docs[0]
  }

  try {
    const pageData = await getPageBySlug(slug)

    return (
      <div>
        {preview === 'true' ? <RefreshRouteOnSave /> : null}
        {pageData.Content?.map((block) => {
          if (block.blockType === 'hero') return <Hero key={block.id} {...block} />
        })}
      </div>
    )
  } catch (err) {
    return notFound()
  }
}
