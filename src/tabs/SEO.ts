import { Tab } from "payload";

export const SEO: Tab = {
  label: 'SEO',
  fields: [{
    type: 'text',
    name: 'slug'
  }, {
    type: 'textarea',
    name: 'description'
  }]
}