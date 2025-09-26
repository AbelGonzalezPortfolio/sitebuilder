import { Block } from 'payload'

const Hero: Block = {
  slug: 'hero',
  fields: [
    { type: 'relationship', name: 'backgroundImage', relationTo: 'media' },
    { type: 'richText', name: 'content' },
    {
      type: 'row',
      fields: [
        {
          type: 'relationship',
          relationTo: ['pages', 'posts'],
          name: 'callToAction',
          required: true,
        },
        { type: 'text', name: 'label' },
      ],
    },
  ],
  interfaceName: 'HeroBlock',
}

export default Hero
