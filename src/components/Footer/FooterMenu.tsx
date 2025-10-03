import NavbarItem from '../NavbarItem'

export default function FooterMenu({ title, menu }) {
  return (
    <nav>
      <h6 className="footer-title">{title}</h6>
      {menu.map((menuItem) => (
        <NavbarItem {...menuItem} key={menuItem.id} className="link link-hover" />
      ))}
    </nav>
  )
}
