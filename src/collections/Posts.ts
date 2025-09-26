import { SEO } from '@/tabs/SEO'
import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  versions: {
    drafts: {
      autosave: true,
    },
  },
  slug: 'posts',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'Content',
          fields: [
            {
              type: 'text',
              name: 'title',
            },
            {
              type: 'richText',
              name: 'Content',
            },
          ],
        },
        SEO,
      ],
    },
  ],
  // admin: {
  //   useAsTitle: 'title'
  // },
}
