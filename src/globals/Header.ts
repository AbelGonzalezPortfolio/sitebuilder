import { Menu } from '@/fields/Menu'
import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      type: 'row',
      fields: [
        {
          type: 'group',
          fields: [
            {
              name: 'brandName',
              type: 'text',
              required: true,
            },
            {
              name: 'showBrandName',
              type: 'checkbox',
            },
          ],
        },
        {
          type: 'group',
          fields: [
            { name: 'logo', type: 'upload', relationTo: 'media' },
            { name: 'showLogo', type: 'checkbox' },
          ],
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    Menu,
  ],
}
