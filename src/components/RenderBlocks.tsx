import { ReactNode } from 'react'
import Hero from '@/blocks/Hero'
import PostList from './blocks/PostList'
import { Block } from 'payload'

import type { Page } from '@/payload-types'
import { Columns } from './blocks/Columns'
import { Carousel } from './blocks/Carousel'

export default function RenderBlocks({ blocks }: { blocks: Page['Content'] }): ReactNode {
  const blockComponents = {
    hero: Hero,
    postList: PostList,
    columns: Columns,
    carousel: Carousel,
  }

  return (
    <>
      {blocks?.map((block, index) => {
        const { blockType } = block

        if (blockType) {
          const Block = blockComponents[blockType]

          return <Block {...block} key={block.id} />
        }
      })}
    </>
  )
}
