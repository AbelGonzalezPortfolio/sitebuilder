import { Media } from '@/collections/Media'
import { Header } from '@/payload-types'
import Link from 'next/link'

export default function NavbarItem(navbarItem: Header['navbar'][0]) {
  const getHref: () => string = () => {
    if (navbarItem.type === 'Custom' && typeof navbarItem.url === 'string') {
      return navbarItem.url
    } else if (
      navbarItem.type === 'Internal' &&
      navbarItem.internalPage &&
      typeof navbarItem.internalPage !== 'number'
    ) {
      const pageID = navbarItem.internalPage.value.id
      return `/${pageID}`
    } else {
      return '/this-is-a-random-page-return-404'
    }
  }

  const href = () => (navbarItem.type === 'Custom' ? navbarItem.url : 'http://localhost:3000')

  return (
    <Link
      href={getHref()}
      target={navbarItem.openInNewTab ? '_blank' : ''}
      className={navbarItem.className}
    >
      {navbarItem.label}
    </Link>
  )
}
