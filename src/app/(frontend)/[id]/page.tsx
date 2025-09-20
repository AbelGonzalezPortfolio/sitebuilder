import { getPayload } from 'payload'
import { RefreshRouteOnSave } from './RefreshRouteOnSave'

import config from '@/payload.config'
import { notFound } from 'next/navigation'
import Hero from '../components/blocks/Hero'

import { headers as nextHeaders } from 'next/headers'

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: number }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const payload = await getPayload({ config })

  const headers = await nextHeaders()
  const { id } = await params
  const { preview } = await searchParams
  const { user } = await payload.auth({ headers })

  try {
    const pageData = await payload.findByID({
      collection: 'pages',
      id: id,
      overrideAccess: false,
      draft: user && preview ? true : false,
      user: user ? user : undefined,
    })

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
