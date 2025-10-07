import type { Header } from '@/payload-types'
import { ReactNode } from 'react'

import Brand from './Brand'
import Menu from './Menu'

export default function Header(headerConfig: Header): ReactNode {
  return (
    <header className="flex h-18 w-full items-center justify-between px-5">
      <Brand {...headerConfig} />
      <Menu {...headerConfig} />
      {/* <Menu></Menu> */}
    </header>
  )
}
