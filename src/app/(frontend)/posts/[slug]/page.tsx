import { getPayload, PaginatedDocs } from 'payload'
import config from '@/payload.config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Post } from '@/payload-types'

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const payload = await getPayload({ config })
  const { slug } = await params

  const postData: PaginatedDocs = await payload.find({
    collection: 'posts',
    pagination: false,
    limit: 1,
    where: { slug: { equals: slug } },
  })

  const post = postData.docs[0]
  console.log(post)

  return (
    // <div>Hello</div>
    <div className="max-w-4xl mx-auto prose my-12 bg-base-100">
      <img className="w-full h-[400px] object-cover" src={post.featuredImage.url} />
      <h1>{post.title}</h1>
      <div>
        <RichText data={post.Content} />
      </div>
    </div>
  )
}
