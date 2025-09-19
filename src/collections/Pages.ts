import Hero from "@/blocks/Hero";
import { CollectionConfig } from "payload";

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
      autosave: true
    },
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [{
            name: 'title',
            type: 'text',
            required: true
          },
          {
            name: 'Content',
            type: 'blocks',
            blocks: [
              Hero
            ]
          }]

        },
        {
          label: 'SEO',
          fields: [{
            type: 'text',
            name: 'slug'
          }, {
            type: 'textarea',
            name: 'description'
          }]
        }
      ]
    },

  ],
  admin: {
    useAsTitle: 'title'
  }

}

export default Pages