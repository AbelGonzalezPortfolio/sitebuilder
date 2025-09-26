import { Tab } from 'payload'

export const SEO: Tab = {
  label: 'SEO',
  fields: [
    {
      type: 'text',
      name: 'slug',
      required: true,
    },
    {
      type: 'textarea',
      name: 'description',
    },
  ],
}
