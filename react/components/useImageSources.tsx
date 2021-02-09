import { useState } from 'react'

interface ImageSourcesSettings<T extends string | number> {
  src: string
  breakPoints: T[]
}

type ArrayToUnion<T extends Array<string | number>> = T[number]

type BreakPoints<T extends Array<string | number>> = {
  [K in ArrayToUnion<T>]: string
}

const formatImgSrcUrl = ({ src, val }: { src: string; val: number | string }) =>
  `${src}?width=${val}&aspect=true ${val}w`

function initImageSources<T extends string | number>({
  src,
  breakPoints,
}: ImageSourcesSettings<T>) {
  const breakPointsResult = {} as BreakPoints<T[]>

  breakPoints.forEach((val) => {
    breakPointsResult[val] = formatImgSrcUrl({
      val,
      src,
    })
  })

  return breakPointsResult
}

function useImageSources<T extends string | number>({
  src,
  breakPoints,
}: ImageSourcesSettings<T>) {
  const [imageSources] = useState<BreakPoints<T[]>>(
    initImageSources({ src, breakPoints })
  )

  return imageSources
}

export default useImageSources
