import { CollectionConfig } from "payload";

const Pages: CollectionConfig = {
  slug: 'pages',
  versions: true,
  fields: [
    {
      name: 'title',
      type: 'text'
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
    }
  ],
  admin: {
    useAsTitle: 'title'
  }

}

export default Pages