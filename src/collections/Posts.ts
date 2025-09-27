import { SEO } from '@/tabs/SEO'
import { CollectionConfig } from 'payload'
import { slugifyTitleHook } from '@/hooks'

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
          label: 'Content',
          fields: [
            {
              type: 'text',
              name: 'title',
              required: true,
              hooks: { beforeChange: [({ data }) => slugifyTitleHook({ data })] },
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
  admin: {
    useAsTitle: 'title',
  },
}
