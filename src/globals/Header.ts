import { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      label: 'Site Name'
    },
    {
      name: 'navbar',
      type: 'array',
      label: 'Navigation Bar',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'type',
              type: 'radio',
              options: ['Internal', 'Custom']
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              admin: {
                style: { alignSelf: "flex-end" }
              }
            }
          ]
        },
        {
          type: 'row',
          fields: [
            {
              name: 'url',
              type: 'text',
              defaultValue: 'https://',
              admin: {
                condition: (data, siblingData) => {
                  console.log(siblingData.type)
                  if (siblingData.type === 'Custom') {
                    return true
                  }
                  return false
                }
              }
            },
            {
              name: 'internalPage',
              type: 'relationship',
              relationTo: ['pages'],
              admin: {

                condition: (data, { type }) => {
                  if (type === 'Internal') {
                    return true
                  } else {
                    return false
                  }
                }

              }
            },
            {
              name: 'label',
              type: 'text',
            },
          ]
        }
      ]
    }

  ]
}

