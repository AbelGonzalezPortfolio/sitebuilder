import type { Header } from '@/payload-types'
import { Button } from './ui/button'

import { HamburgerIcon } from 'lucide-react'

export default function Header({ brandName, showBrandName, logo, showLogo, menu }: Header) {
  return (
    <header>
      <Button variant="ghost">
        <HamburgerIcon />
      </Button>
    </header>
  )
}
