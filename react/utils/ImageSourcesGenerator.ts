interface ImageSourcesSettings<T extends string | number> {
  src: string
  breakPointsArray: T[]
}

type ArrayToUnion<T extends Array<string | number>> = T[number]

type BreakPoints<T extends Array<string | number>> = {
  [K in ArrayToUnion<T>]: string
}

const formatImgSrcUrl = ({ src, val }: { src: string; val: number | string }) =>
  `${src}?width=${val}&aspect=true ${val}w`

export function generateImageSources<T extends string | number>({
  src,
  breakPointsArray,
}: ImageSourcesSettings<T>) {
  const breakPointsResult = {} as BreakPoints<T[]>

  breakPointsArray.forEach((val) => {
    breakPointsResult[val] = formatImgSrcUrl({
      val,
      src,
    })
  })

  return breakPointsResult
}
