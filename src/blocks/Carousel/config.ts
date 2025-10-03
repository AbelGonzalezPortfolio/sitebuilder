import { Block } from 'payload'

export const Carousel: Block = {
  slug: 'carousel',
  fields: [
    {
      type: 'array',
      name: 'medias',
      fields: [{ type: 'upload', name: 'media', relationTo: 'media' }],
    },
  ],
  interfaceName: 'CarouselBlock',
}
