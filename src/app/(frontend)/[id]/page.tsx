import { getPayload } from 'payload'

import config from '@/payload.config'
import { notFound } from 'next/navigation'
import Hero from '../components/blocks/Hero'

export default async function Page(props: PageProps<'/[id]'>) {
  const payload = await getPayload({ config })

  const { id } = await props.params

  try {
    const pageData = await payload.findByID({
      collection: 'pages',
      id: id,
      overrideAccess: false,
    })

    console.log(pageData)
    return (
      <div>
        {pageData.Content?.map((block) => {
          if (block.blockType === 'hero') return <Hero {...block} />
        })}
      </div>
    )
  } catch (err) {
    return notFound()
  }
}
