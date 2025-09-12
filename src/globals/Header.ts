import { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      label: 'Site Name'
    }
  ]
}

