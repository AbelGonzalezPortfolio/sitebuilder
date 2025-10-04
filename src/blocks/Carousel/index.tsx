import { ReactNode } from 'react'

import type { CarouselBlock } from '@/payload-types'

export const Carousel: ({ medias, id }: CarouselBlock) => ReactNode = ({ medias, id }) => {
  const getPrevIndex = (currentIndex: number, arrayLength: number) => {
    if (currentIndex === 0) {
      return arrayLength - 1
    } else {
      return currentIndex - 1
    }
  }

  const getForwardIndex = (currentIndex: number, arrayLength: number) => {
    if (currentIndex === arrayLength - 1) {
      return 0
    } else {
      return currentIndex + 1
    }
  }

  return (
    <div className="carousel w-full h-full">
      {medias?.map((media, index) => (
        <div key={media.id} id={`slide${index}`} className="carousel-item relative w-full">
          <img src={media?.media?.url} className="w-full object-cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              className="btn btn-circle"
              href={`#slide${getPrevIndex(index, medias.length)}`}
            >{`<`}</a>
            <a className="btn btn-circle" href={`#slide${getForwardIndex(index, medias.length)}`}>
              {'>'}
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
