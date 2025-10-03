import { getPayload } from 'payload'
import { RefreshRouteOnSave } from '../RefreshRouteOnSave'

import config from '@/payload.config'
import { notFound } from 'next/navigation'
import Hero from '../../../blocks/Hero'

import { headers as nextHeaders } from 'next/headers'
import { getCollectionBySlug } from '../utils'
import RenderBlocks from '../../../blocks/RenderBlocks'

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

  try {
    const pageData = await getCollectionBySlug({
      slug,
      collection: 'pages',
      isPreview: preview === 'true',
    })

    return (
      <div>
        {preview === 'true' ? <RefreshRouteOnSave /> : null}
        <RenderBlocks blocks={pageData.Content} />
      </div>
    )
  } catch (err) {
    return notFound()
  }
}
