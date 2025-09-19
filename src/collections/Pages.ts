import { CollectionConfig } from "payload";

const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: ({ req }) => {
      // If there is a user logged in,
      // let them retrieve all documents
      if (req.user) return true

      // If there is no user,
      // restrict the documents that are returned
      // to only those where `_status` is equal to `published`
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
              {
                fields: [
                  { type: 'richText', name: 'content' }
                ],
                slug: 'content'
              }
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