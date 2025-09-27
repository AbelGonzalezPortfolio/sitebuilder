import { getPayload } from 'payload'
import { RefreshRouteOnSave } from './RefreshRouteOnSave'

import config from '@/payload.config'
import { notFound } from 'next/navigation'
import Hero from '../components/blocks/Hero'

import { headers as nextHeaders } from 'next/headers'
import { getPageBySlug } from '../utils'
import { PostList } from '../components/PostList'

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

  const posts = [
    {
      title: 'Best Cafe and Coffee Shop POS Systems for Brewing Up More Sales',
      category: 'Restaurant Software',
      timeToRead: 15,
      slug: 'best-cafe',
      publishedDate: new Date(),
      imageURL:
        'https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8Y29mZmVlfGVufDB8fDB8fHww',
    },
    {
      title: 'Restaurant Branding: A Quick, Practical Guide For Driving More Online Orders',
      category: 'Marketing Strategy',
      timeToRead: 20,
      slug: 'best-cafe-in-town',
      publishedDate: new Date(),
      imageURL:
        'https://images.unsplash.com/photo-1556740767-414a9c4860c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: '10 Best Square Alternatives and POS Competitors Worth Switching To for More Profits',
      category: 'Restaurant Software',
      timeToRead: 12,
      publishedDate: new Date(),
      slug: 'best-cafe-not-in-town',
      imageURL:
        'https://images.unsplash.com/photo-1647427017067-8f33ccbae493?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9zJTIwc3lzdGVtfGVufDB8fDB8fHww',
    },
  ]

  try {
    const pageData = await getPageBySlug({ slug, isPreview: preview === 'true' })

    return (
      <div>
        {preview === 'true' ? <RefreshRouteOnSave /> : null}
        {pageData.Content?.map((block) => {
          if (block.blockType === 'hero') return <Hero key={block.id} {...block} />
        })}
        <div className="max-w-3xl py-5 mx-auto">
          <PostList posts={posts} />
        </div>
      </div>
    )
  } catch (err) {
    return notFound()
  }
}
