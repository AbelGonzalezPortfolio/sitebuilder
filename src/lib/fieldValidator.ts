type Media = {
  url: string
  alt: string
}

export function isValidMedia(media: unknown): media is Media {
  return (
    typeof media === 'object' &&
    media !== null &&
    'url' in media &&
    typeof (media as Media).url === 'string'
  )
}
