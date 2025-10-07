export default function HamburgerMenu({ isActive = true }: { isActive: boolean }) {
  const defaultStyle = 'h-[2px] w-7 bg-neutral-900 transition '

  return (
    <div className="flex flex-col gap-2">
      <div className={`${defaultStyle} origin-top-left ${isActive ? 'rotate-45' : ''}`}></div>
      <div
        className={`${defaultStyle} ${isActive ? '-translate-x-2 opacity-0' : 'translate-x-1 opacity-100'}`}
      ></div>
      <div className={`${defaultStyle} origin-bottom-left ${isActive ? '-rotate-45' : ''}`}></div>
    </div>
  )
}
