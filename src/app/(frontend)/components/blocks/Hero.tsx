import { RichText } from '@payloadcms/richtext-lexical/react'

export default function Hero(block) {
  console.log(block.content.root.children)
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)',
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
