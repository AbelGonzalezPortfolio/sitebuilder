import { Block, FieldHook } from 'payload'
import Hero from './Hero/config'
import PostList from './PostList'
import { Carousel } from './Carousel'

// const updateColumnsWidthsArrayHook: FieldHook<any, any, any> = ({ data }) => {
//   const columnsTotal = data?.Content.width.columnsTotal
//   console.log(data)
// }

export const Columns: Block = {
  slug: 'columns',
  fields: [
    // {
    //   type: 'number',
    //   name: 'columnsTotal',
    //   label: 'Number of columns',
    //   hooks: { afterChange: [updateColumnsWidthsArrayHook] },
    // },
    {
      type: 'array',
      name: 'columns',
      label: 'Columns',
      fields: [{ type: 'blocks', name: 'content', blocks: [Hero, PostList, Carousel] }],
    },
  ],
}
