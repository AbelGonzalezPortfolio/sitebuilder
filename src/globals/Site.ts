import { GlobalConfig } from 'payload'

export const Site: GlobalConfig = {
  slug: 'siteConfig',
  fields: [{ type: 'relationship', relationTo: ['pages'], name: 'homePage' }],
}
