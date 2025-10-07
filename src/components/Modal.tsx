import { ReactNode } from 'react'
import { X } from 'lucide-react'

interface Modal {
  onModalClose: () => void
  children: ReactNode
  heading: ReactNode | undefined | null
  show: boolean
}

export default function Modal({ onModalClose, show, heading, children }: Modal): ReactNode {
  return (
    <div
      className={`no-doc-scroll fixed top-18 left-25 z-50 h-screen w-screen bg-white transition ${show ? '-translate-x-10 opacity-100' : 'translate-x-40 opacity-0'} `}
    >
      <div className="flex h-14 items-center justify-between px-5">
        {heading}
        <button className="ms-auto">
          <X onClick={onModalClose} />
        </button>
      </div>

      {children}
    </div>
  )
}
