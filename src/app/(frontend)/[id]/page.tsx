import { getPayload } from "payload"

import config from '@/payload.config'


export default async function Page(props: PageProps<'/[id]'>) {
  const payload = await getPayload({ config })

  const { id } = await props.params

  const pageData = await payload.findByID({
    collection: 'pages',
    id: id
  })

  return (
    <h1 className="text-5xl font-bold">{pageData.title}</h1>
  )
}