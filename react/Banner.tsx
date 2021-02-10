import React, { useMemo } from 'react'
import { Link, useRuntime } from 'vtex.render-runtime'
import { Image } from 'vtex.store-image'
import { useCustomClasses } from 'vtex.css-handles'

import Container from './components/Container'
import { generateImageSources } from './utils/ImageSourcesGenerator'
import styles from './Banner.module.css'

const breakPoints = [1024, 1280, 1664]

export interface Props {
  image: string
  mobileImage: string
  alt: string
  url: string
}

function Banner(props: Props) {
  const { alt, image, mobileImage, url } = props
  const {
    deviceInfo: { type },
  } = useRuntime()

  const carouselClasses = useCustomClasses(() => ({
    imageElement: `w-100 ${styles.image}`,
  }))

  const isPhone = type === 'phone'
  const imageSrc = isPhone ? mobileImage : image

  const imageSrcs = useMemo(
    () =>
      generateImageSources({ src: imageSrc, breakPointsArray: breakPoints }),
    [imageSrc]
  )

  return (
    <Container className={`w-100 ${styles.container}`}>
      <Link to={url}>
        <picture>
          <source
            media="(min-width: 40em)"
            srcSet={`${imageSrcs[1664]}, ${imageSrcs[1280]}, ${imageSrcs[1024]}`}
          />

          <Image
            classes={carouselClasses}
            alt={alt}
            src={imageSrc}
            height={isPhone ? 160 : 256}
          />
        </picture>
      </Link>
    </Container>
  )
}

Banner.schema = {
  title: 'Banner',
}

export default Banner
