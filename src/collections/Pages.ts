import Hero from '@/blocks/Hero'
import { SEO } from '@/tabs/SEO'
import { CollectionConfig } from 'payload'
import { slugifyTitleHook } from '@/hooks'

const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: ({ req }) => {
      if (req.user) return true

      return {
        _status: {
          equals: 'published',
        },
      }
    },
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              hooks: {
                beforeChange: [({ data }) => slugifyTitleHook({ data })],
              },
            },
            {
              name: 'Content',
              type: 'blocks',
              blocks: [Hero],
            },
          ],
        },
        SEO,
      ],
    },
  ],
  admin: {
    useAsTitle: 'title',
  },
}

export default Pages
