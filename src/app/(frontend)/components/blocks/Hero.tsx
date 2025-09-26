import { RichText } from '@payloadcms/richtext-lexical/react'
import Link from 'next/link'

import { HeroBlock } from '@/payload-types'

export default function Hero(block: HeroBlock) {
  // console.log(block)
  const getCTAUrl = ({ relationTo, value }: HeroBlock['callToAction']) => {
    const root = relationTo === 'pages' ? '' : relationTo
    return `${root}/${value.id}`
  }

  console.log(block.label)

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${block.backgroundImage.url})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <RichText data={block.content} />
          <Link className="btn btn-primary" href={getCTAUrl(block.callToAction)}>
            {block.label}
          </Link>
          {/* <Link href={block}/> */}
        </div>
      </div>
    </div>
  )
}
