import React from 'react'
import { Link, useRuntime } from 'vtex.render-runtime'

import Container from './components/Container'
import styles from './Banner.module.css'
import useImageSources from './components/useImageSources'

export interface Props {
  image: string
  mobileImage: string
  alt: string
  url: string
}

const breakPoints = [1024, 1280, 1664]

function Banner(props: Props) {
  const { alt, image, mobileImage, url } = props
  const {
    deviceInfo: { type },
  } = useRuntime()

  const isPhone = type === 'phone'
  const imageSrc = isPhone ? mobileImage : image

  const imageSrcs = useImageSources({
    src: imageSrc,
    breakPoints,
  })

  return (
    <Container className={`w-100 ${styles.container}`}>
      <Link to={url}>
        <picture>
          <source
            media="(min-width: 40em)"
            srcSet={`${imageSrcs[1664]}, ${imageSrcs[1280]}, ${imageSrcs[1024]}`}
          />

          <img
            className={`w-100 ${styles.image}`}
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
