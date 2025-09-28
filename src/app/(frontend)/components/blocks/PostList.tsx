import Link from 'next/link'
import { Block, getPayload } from 'payload'
import config from '@/payload.config'

interface Post {
  title: string
  category: string
  slug: string
  timeToRead: number
  publishedDate: Date
  imageURL: string
}

export default async function PostList(block: Block) {
  console.log(block)
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'posts',
    limit: 5,
    pagination: false,
    sort: ['updatedAt'],
  })

  console.log(docs)

  const getFormattedDate = (unformattedDate: string) => {
    const formattedDate = new Date(unformattedDate)
    return formattedDate.toDateString()
  }

  return (
    <ul className="list bg-base-100 rounded-box shadow-md max-w-3xl py-5 mx-auto">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">View our recent posts:</li>
      {docs.map((post) => (
        <Link href={`/posts/${post.slug}`} className="hover:bg-base-300">
          <li className="list-row">
            <div>
              <img className="size-50 rounded-box" src={post.featuredImage?.url} />
            </div>
            <div className="flex flex-col">
              {/* <div className="text-xs uppercase opacity-80 badge badge-secondary badge-outline font-semibold">
                {post.category}
              </div> */}
              <div className="font-semibold text-lg">{post.title}</div>
              <div className="opacity-80 text-xs mt-auto flex">
                {/* <div>{post.timeToRead} min read</div> */}
                {/* <div className="divider divider-horizontal"></div> */}
                <div>{getFormattedDate(post.updatedAt)}</div>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  )
}
