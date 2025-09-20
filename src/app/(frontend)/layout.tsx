import React from 'react'
import './styles.css'

import { getPayload } from 'payload'
import config from '@/payload.config'
import Header from '@/app/(frontend)/components/Header'
import Footer from './components/Footer/Footer'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const payload = await getPayload({ config })
  const headerConfig = await payload.findGlobal({
    slug: 'header',
  })
  const footerConfig = await payload.findGlobal({
    slug: 'footer',
  })

  return (
    <html lang="en">
      <body>
        <Header {...headerConfig} />
        <main>{children}</main>
        <Footer {...footerConfig} />
      </body>
    </html>
  )
}
