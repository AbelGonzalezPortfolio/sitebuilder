import { Field } from "payload"

export const Menu: Field = {
  name: 'menu',
  type: 'array',
  label: 'Menu',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'type',
          type: 'radio',
          options: ['Internal', 'Custom'],
          required: true
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
              if (siblingData.type === 'Custom') {
                return true
              }
              return false
            }
          },
          required: true
        },
        {
          name: 'internalPage',
          type: 'relationship',
          relationTo: ['pages'],
          filterOptions: ({ relationTo, siblingData }) => {
            return {
              _status: { equals: 'published' }
            }
          },
          required: true,
          admin: {

            condition: (data, { type }) => {
              if (type === 'Internal') {
                return true
              } else {
                return false
              }
            },


          }
        },
        {
          name: 'label',
          type: 'text',
          required: true
        },
      ]
    }
  ]
}