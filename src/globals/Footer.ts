import { Menu } from "@/fields/Menu";
import { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'menus',
      type: 'array',
      fields: [Menu]
    }
  ]
}