import NavbarItem from '../NavbarItem'

export default function FooterMenu({ menu }) {
  console.log(menu)
  return (
    <nav>
      {menu.map((menuItem) => (
        <NavbarItem {...menuItem} key={menuItem.id} className="link link-hover" />
      ))}
    </nav>
  )
}
