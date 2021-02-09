import { useState } from 'react'

interface ImageSourcesSettings<T = number[]> {
  src: string
  breakPoints?: T
}

type ImageDefaultBreakpoints = '320' | '640' | '1024' | '1280' | '1664'

type ArrayToUnion<T extends any[] = number[]> = T[number]

type BreakPointsKeys = ImageDefaultBreakpoints | ArrayToUnion<any[]>

type BreakPoints = {
  [K in BreakPointsKeys]: string
}

const formatImgSrcUrl = ({ src, val }: { src: string; val: number }) =>
  `${src}?width=${val}&aspect=true ${val}w`

function initImageSources({
  src,
  breakPoints,
}: {
  src: ImageSourcesSettings['src']
  breakPoints: BreakPointsKeys[]
}): BreakPoints {
  const defaultSources: any = {
    '320': formatImgSrcUrl({ src, val: 320 }),
    '640': formatImgSrcUrl({ src, val: 640 }),
    '1024': formatImgSrcUrl({ src, val: 1024 }),
    '1280': formatImgSrcUrl({ src, val: 1280 }),
    '1664': formatImgSrcUrl({ src, val: 1664 }),
  }

  breakPoints.forEach((val) => {
    defaultSources[val as BreakPointsKeys] = formatImgSrcUrl({
      val,
      src,
    })
  })

  return defaultSources
}

function useImageSources<T extends number[]>({
  src,
  breakPoints,
}: ImageSourcesSettings<T>) {
  const allBreakPoints: BreakPointsKeys[] = ((breakPoints ??
    []) as BreakPointsKeys[]).concat([
    '320',
    '640',
    '1024',
    '1280',
    '1664',
  ] as ImageDefaultBreakpoints[])

  const [imageSources] = useState<BreakPoints>(
    initImageSources({ src, breakPoints: allBreakPoints })
  )

  return imageSources
}

export default useImageSources
