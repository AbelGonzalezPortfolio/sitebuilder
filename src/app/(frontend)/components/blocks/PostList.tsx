import Link from 'next/link'

interface Post {
  title: string
  category: string
  slug: string
  timeToRead: number
  publishedDate: Date
  imageURL: string
}

export const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">View our recent posts:</li>
      {posts.map((post: Post) => (
        <Link href={`/posts/${post.slug}`} className="hover:bg-base-300">
          <li className="list-row">
            <div>
              <img className="size-50 rounded-box" src={post.imageURL} />
            </div>
            <div className="flex flex-col">
              <div className="text-xs uppercase opacity-80 badge badge-secondary badge-outline font-semibold">
                {post.category}
              </div>
              <div className="font-semibold text-lg">{post.title}</div>
              <div className="opacity-80 text-xs mt-auto flex">
                <div>{post.timeToRead} min read</div>
                <div className="divider divider-horizontal"></div>
                <div>{post.publishedDate.toDateString()}</div>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  )
}
