'use client'

import type { Header } from '@/payload-types'
import { ReactNode, useState } from 'react'
import Modal from '../Modal'
import Brand from './Brand'

import MenuItem from './MenuItem'

export default function Menu({
  showMenu,
  ...headerConfig
}: {
  headerConfig: Header
  showMenu: boolean
}): ReactNode {
  const { menu } = headerConfig

  return (
    <Modal show={showMenu}>
      <ul className="mt-10 flex flex-col justify-center gap-8 ps-8">
        {menu?.map((item) => (
          <MenuItem {...item} key={item.id} />
        ))}
      </ul>
    </Modal>
  )
}
