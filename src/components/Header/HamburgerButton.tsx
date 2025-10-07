export default function HamburgerMenu() {
  const defaultStyle = 'h-[2px] w-4 bg-neutral-900'

  return (
    <div className="flex flex-col gap-1">
      <div className={`${defaultStyle}`}></div>
      <div className={`${defaultStyle}`}></div>
      <div className={`${defaultStyle}`}></div>
    </div>
  )
}
