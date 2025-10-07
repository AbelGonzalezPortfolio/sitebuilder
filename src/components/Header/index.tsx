'use client'

import type { Header } from '@/payload-types'
import { ReactNode, useState } from 'react'

import Brand from './Brand'
import Menu from './Menu'
import HamburgerMenu from './HamburgerMenu'

export default function Header(headerConfig: Header): ReactNode {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header
      className={`z-100 flex h-[80px] w-full items-center justify-between border-2 px-5 shadow-xl ${showMenu ? '' : ''}`}
    >
      <Brand {...headerConfig} />
      <HamburgerMenu isActive={showMenu} onClick={() => setShowMenu(!showMenu)} />
      <Menu menu={headerConfig.menu} showMenu={showMenu} />
      {/* <Menu></Menu> */}
    </header>
  )
}
