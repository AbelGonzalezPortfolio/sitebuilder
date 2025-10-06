import { ReactNode } from 'react'

import type { MenuField } from '@/payload-types'

type MenuFieldItem = NonNullable<MenuField>[number]

export default function MenuItem({ label }: MenuFieldItem): ReactNode {
  return <li className="list-none text-xl">{label}</li>
}
