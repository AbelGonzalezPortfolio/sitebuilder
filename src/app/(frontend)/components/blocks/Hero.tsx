import { RichText } from '@payloadcms/richtext-lexical/react'

export default function Hero(block) {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${block.backgroundImage.url})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="max-w-md">
          <RichText data={block.content} />
        </div>
      </div>
    </div>
  )
}
