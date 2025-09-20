import { Footer as FooterConfig } from '@/payload-types'
import Link from 'next/link'
import FooterMenu from './FooterMenu'

export default function Footer({ menus }: FooterConfig) {
  return (
    <footer className="footer sm:footer-horizontal p-10">
      {menus?.map((menu) => (
        <FooterMenu {...menu} />
      ))}
      {/* <nav>
        <h6 className="footer-title">Site Navigation</h6>
        <Link href="/" className="link link-hover">
          Home
        </Link>
        <Link href="/" className="link link-hover">
          Contact
        </Link>
        <Link href="/" className="link link-hover">
          About
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link href="/" className="link link-hover">
          Privacy Policy
        </Link>
        <Link href="/" className="link link-hover">
          Terms of use
        </Link>
        <Link href="/" className="link link-hover">
          Cookie Policy
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link href="/" className="link link-hover">
          Privacy Policy
        </Link>
        <Link href="/" className="link link-hover">
          Terms of use
        </Link>
        <Link href="/" className="link link-hover">
          Cookie Policy
        </Link>
      </nav> */}
    </footer>
  )
}
