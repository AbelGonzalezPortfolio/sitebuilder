'use client'

import type { Header } from '@/payload-types'
import { Hamburger, X } from 'lucide-react'
import { ReactNode, useState } from 'react'
import Modal from '../Modal'
import Brand from './Brand'

import MenuItem from './MenuItem'

export default function Menu(headerConfig: Header): ReactNode {
  const [showMenu, setShowMenu] = useState(false)
  const { menu } = headerConfig

  return (
    <>
      <div>
        <button onClick={() => setShowMenu(!showMenu)}>
          <Hamburger />
        </button>
      </div>
      {showMenu && (
        <Modal
          heading={<Brand {...headerConfig} />}
          closeModal={() => {
            setShowMenu(false)
          }}
          show={showMenu}
        >
          <ul className="mt-10 flex flex-col items-center justify-center gap-5">
            {menu?.map((item) => (
              <MenuItem {...item} key={item.id} />
            ))}
          </ul>
        </Modal>
      )}
    </>
  )
}
