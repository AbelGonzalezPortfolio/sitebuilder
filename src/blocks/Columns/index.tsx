import { ReactNode } from 'react'
import RenderBlocks from '@/blocks/RenderBlocks'
import type { ColumnsBlock, PostListBlock, HeroBlock, CarouselBlock } from '@/payload-types'

export const Columns: ({ columns }: ColumnsBlock) => ReactNode = ({ columns }) => {
  if (columns && 'content') {
    const count = columns.length

    return (
      <div className={`grid grid-cols-${count}`}>
        {columns.map((column, index) => {
          return <RenderBlocks key={column.id} blocks={column.content} />
        })}
      </div>
    )
  }

  return <div></div>
}
