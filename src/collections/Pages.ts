import Hero from '@/blocks/Hero/config'
import { SEO } from '@/tabs/SEO'
import { CollectionConfig } from 'payload'
import { slugifyTitleHook } from '@/hooks'
import PostListBlock from '@/blocks/PostList'
import { Columns } from '@/blocks/Columns'
import { Carousel } from '@/blocks/Carousel'

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
      autosave: {
        interval: 375,
      },
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
              blocks: [Hero, PostListBlock, Columns, Carousel],
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
