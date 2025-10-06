import { ReactNode } from 'react'
import type { Header } from '@/payload-types'
import Image from 'next/image'
import { isValidMedia } from '@/lib/fieldValidator'

export default function Brand({ brandName, showBrandName, showLogo, logo }: Header): ReactNode {
  return (
    <div className="flex items-center gap-5">
      {showLogo && isValidMedia(logo) && (
        <Image src={logo.url} alt={logo.alt} width={40} height={40} />
      )}
      {showBrandName && <p className="text-xl font-bold">{brandName}</p>}
    </div>
  )
}
