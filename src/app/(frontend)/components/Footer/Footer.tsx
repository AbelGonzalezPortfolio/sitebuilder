import { Footer as FooterConfig } from '@/payload-types'
import Link from 'next/link'
import FooterMenu from './FooterMenu'

export default function Footer({ menus }: FooterConfig) {
  return (
    <footer className="footer sm:footer-horizontal p-10">
      {menus?.map((menu) => (
        <FooterMenu key={menu.id} {...menu} />
      ))}
    </footer>
  )
}
