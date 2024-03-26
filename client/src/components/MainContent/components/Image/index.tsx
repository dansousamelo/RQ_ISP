import React, { useState } from 'react'
import * as S from './styles'

export function Image(props: React.HTMLProps<HTMLImageElement>) {
  const { src, alt, ...rest } = props
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return (
    <>
      {!imageLoaded && <S.ImageSkeleton />}
      <S.Image
        {...rest}
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ display: imageLoaded ? 'block' : 'none' }}
      />
    </>
  )
}
