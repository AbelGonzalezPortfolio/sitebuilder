import { ReactNode } from 'react'

import type { CarouselBlock, Media } from '@/payload-types'
import {
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

export const Carousel: ({ medias, id }: CarouselBlock) => ReactNode = ({ medias, id }) => {
  return (
    <CarouselComponent className="mx-15 ">
      <CarouselContent>
        {medias
          ? medias.map(({ media }, index) => {
              if (media && typeof media === 'object' && 'url' in media && media.url) {
                return (
                  <CarouselItem key={index}>
                    <Image
                      src={media.url}
                      alt={media.alt}
                      width={media.width ?? 1000}
                      height={media.height ?? 1000}
                      className="w-full h-full object-cover"
                    />
                  </CarouselItem>
                )
              } else {
                return <CarouselItem key={index}>No Media Found</CarouselItem>
              }
            })
          : 'No media to display'}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CarouselComponent>
  )
}
