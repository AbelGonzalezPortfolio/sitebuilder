import { getPayload } from 'payload'
import config from '@/payload.config'
import { RichText } from '@payloadcms/richtext-lexical/react'

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const payload = await getPayload({ config })
  const { slug } = await params

  const postData = await payload.find({
    collection: 'posts',
    pagination: false,
    where: { slug: { equals: slug } },
  })
  console.log(postData)

  return (
    <div>
      <h1>{postData.Content?.title}</h1>
      <div>
        <RichText data={postData.Content?.Content} />
      </div>
    </div>
  )
}
