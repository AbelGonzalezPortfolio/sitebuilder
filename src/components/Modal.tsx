import { ReactNode } from 'react'
import { X } from 'lucide-react'

interface Modal {
  closeModal: () => void
  children: ReactNode
  heading: ReactNode | undefined | null
  show: boolean
}

export default function Modal({ closeModal, show, heading, children }: Modal): ReactNode {
  return (
    <div
      className={`no-doc-scroll fixed top-0 left-0 z-50 h-screen w-screen bg-white ${show ? 'opacity-90' : 'opacity-0'} transition-opacity delay-150 duration-300 ease-in-out`}
    >
      <div className="flex h-14 items-center justify-between px-5">
        {heading}
        <button className="ms-auto">
          <X onClick={closeModal} />
        </button>
      </div>

      {children}
    </div>
  )
}
