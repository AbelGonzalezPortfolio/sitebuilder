import { getPayload } from "payload"

import config from '@/payload.config'
import { notFound } from "next/navigation"


export default async function Page(props: PageProps<'/[id]'>) {
  const payload = await getPayload({ config })

  const { id } = await props.params

  try {
    const pageData = await payload.findByID({
      collection: 'pages',
      id: id,
      overrideAccess: false
    })
    return (
      <h1 className="text-5xl font-bold">{pageData.title}</h1>
    )
  } catch (err) {
    return notFound()
  }


}