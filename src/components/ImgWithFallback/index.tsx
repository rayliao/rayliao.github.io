import React from 'react'

interface Props extends React.HTMLAttributes<HTMLImageElement> {
  src: string
  fallback: string
  type?: string
  alt?: string
}

const ImgWithFallback = ({
  src,
  fallback,
  type = 'image/webp',
  alt,
  ...delegated
}: Props) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img alt={alt} src={fallback} {...delegated} />
    </picture>
  )
}

export default ImgWithFallback
