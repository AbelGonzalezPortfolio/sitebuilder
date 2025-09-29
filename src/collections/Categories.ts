import { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  fields: [{ type: 'text', name: 'title' }],
  admin: {
    useAsTitle: 'title',
  },
}
