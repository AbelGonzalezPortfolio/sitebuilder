import { getPayload } from 'payload'
import config from '@/payload.config'
import { RichText } from '@payloadcms/richtext-lexical/react'

export default async function Post({ params }: { params: Promise<{ id: number }> }) {
  const payload = await getPayload({ config })
  const { id } = await params

  const postData = await payload.findByID({ collection: 'posts', id: id })
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
