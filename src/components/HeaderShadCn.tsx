import type { Header } from '@/payload-types'
import { Button } from './ui/button'

import { HamburgerIcon, Menu, ChevronDown } from 'lucide-react'
import Image from 'next/image'

import { isValidMedia } from '@/lib/fieldValidator'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import NavbarItem from './NavbarItem'

export default function Header({ brandName, showBrandName, logo, showLogo, menu }: Header) {
  return (
    <header className="flex h-16 items-center justify-between px-5">
      <div className="flex items-center gap-4">
        {showLogo && isValidMedia(logo) ? (
          <div>
            <Image src={logo.url} height={40} width={40} alt={logo.alt} />
          </div>
        ) : null}
        {showBrandName ? (
          <div>
            <p className="text-xl font-bold">{brandName}</p>
          </div>
        ) : null}
      </div>
      <div>{/* Mobile Menu */}</div>
    </header>
  )
}
