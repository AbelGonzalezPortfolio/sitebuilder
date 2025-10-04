import { Block, FieldHook } from 'payload'
import Hero from '../Hero/config'
import PostList from '../PostList/config'
import { Carousel } from '../Carousel/config'

export const Columns: Block = {
  slug: 'columns',
  fields: [
    {
      type: 'array',
      name: 'columns',
      label: 'Columns',
      fields: [
        { type: 'blocks', name: 'content', blocks: [Hero, PostList, Carousel], required: true },
      ],
    },
  ],
  interfaceName: 'ColumnsBlock',
}
