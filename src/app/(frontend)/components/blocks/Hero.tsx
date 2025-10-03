import { RichText } from '@payloadcms/richtext-lexical/react'
import Link from 'next/link'

import { HeroBlock } from '@/payload-types'

export default function Hero(block: HeroBlock) {
  const getCTAUrl = ({ relationTo, value }: HeroBlock['callToAction']) => {
    const root = relationTo === 'pages' ? '' : relationTo
    return `${root}/${value.id}`
  }

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${block.backgroundImage?.url})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-center py-20">
        <div className="max-w-xl">
          <RichText data={block.content} className="prose !prose-invert prose-xl" />
          <Link
            className="btn btn-primary my-5 text-xl btn-xl"
            href={getCTAUrl(block.callToAction)}
          >
            {block.label}
          </Link>
          {/* <Link href={block}/> */}
        </div>
      </div>
    </div>
  )
}
