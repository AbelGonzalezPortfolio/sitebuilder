import { RichText } from '@payloadcms/richtext-lexical/react'
import Link from 'next/link'

import { HeroBlock, Page, Post } from '@/payload-types'
import { Media } from '@/collections/Media'

const getCTAUrl = ({
  relationTo,
  value,
}: {
  relationTo: 'pages' | 'posts'
  value: Post | Page
}) => {
  const root = relationTo === 'pages' ? '' : relationTo
  return `${root}/${value.slug}`
}

export default function Hero({ content, backgroundImage, callToAction, label }: HeroBlock) {
  const imageUrl = typeof backgroundImage === 'object' ? backgroundImage?.url : undefined
  var ctaUrl = undefined

  if (callToAction && typeof callToAction !== 'object') {
    ctaUrl = getCTAUrl(callToAction)
  }

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-center py-20">
        <div className="max-w-xl">
          {content ? <RichText data={content} className="prose !prose-invert prose-xl" /> : null}
          {ctaUrl ? (
            <Link className="btn btn-primary my-5 text-xl btn-xl" href={ctaUrl}>
              {label}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  )
}
