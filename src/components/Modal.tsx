import { ReactNode } from 'react'
import { X } from 'lucide-react'

interface Modal {
  children: ReactNode
  show: boolean
}

export default function Modal({ show, children }: Modal): ReactNode {
  return (
    <div
      className={`fixed top-[80px] z-50 h-screen w-screen bg-neutral-800 transition duration-200 ease-in ${show ? 'no-doc-scroll -translate-x-10/12' : ''} `}
    >
      {/* <div className="flex h-14 items-center justify-between px-5">{heading}</div> */}
      <div className="absolute left-full h-full w-full bg-white">{children}</div>
    </div>
  )
}
