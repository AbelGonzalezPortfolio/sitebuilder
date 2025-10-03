import { HeroBlock } from '@/payload-types'
import { ReactNode } from 'react'
import RenderBlocks from '../RenderBlocks'

interface PostListBlock {
  id?: string | null
  blockName?: string | null
  blockType: 'postList'
}

interface ColumnsBlock {
  id: string
  width: number
  content: HeroBlock | PostListBlock
}

export const Columns: ({ columns }: { columns: ColumnsBlock[] }) => ReactNode = ({ columns }) => {
  const count = columns.length

  return (
    <div className={`grid grid-cols-${count}`}>
      {columns.map((column, index) => {
        return <RenderBlocks key={column.id} blocks={column.content} />
      })}
    </div>
  )
}
