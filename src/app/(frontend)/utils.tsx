import { getPayload, PaginatedDocs } from 'payload'
import config from '@/payload.config'
import { headers as nextHeaders } from 'next/headers'

export const getCollectionBySlug = async ({
  slug,
  collection,
  isPreview = false,
}: {
  slug: string
  collection: 'pages' | 'posts'
  isPreview: boolean
}) => {
  const headers = await nextHeaders()
  const payload = await getPayload({ config })

  const { user } = await payload.auth({ headers })
  const pageData: PaginatedDocs = await payload.find({
    collection: collection,
    where: { slug: { equals: slug } },
    limit: 1,
    pagination: false,
    overrideAccess: false,
    draft: user && isPreview ? true : false,
    user: user ? user : undefined,
  })

  return pageData?.docs[0]
}
