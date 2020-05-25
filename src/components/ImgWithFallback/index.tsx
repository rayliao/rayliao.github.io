import React from 'react'

interface Props {
  src: string
  fallback: string
  type: string
}

const ImgWithFallback = ({
  src,
  fallback,
  type = 'image/webp',
  ...delegated
}: Props) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} {...delegated} />
    </picture>
  )
}

export default ImgWithFallback
