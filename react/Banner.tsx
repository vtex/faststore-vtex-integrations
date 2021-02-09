import React from 'react'

import Container from './components/Container'
import styles from './Banner.module.css'
import useImageSources from './components/useImageSources'

export interface Props {
  image: string
  label: string
  title: string
  url: string
}

function Banner(props: Props) {
  const { url, label, title, image } = props
  const imageSrcs = useImageSources({
    src: image,
    breakPoints: [640, 1024, 1280, 1664],
  })

  return (
    <div className={`relative w-100 ${styles.bannerContainer}`}>
      <picture>
        <source
          media="(min-width: 40em)"
          srcSet={`${imageSrcs[640]}, ${imageSrcs[1024]}, ${imageSrcs[1280]}, ${imageSrcs[1664]}`}
        />
        <img className={`w-100 ${styles.image}`} alt={title} src={image} />
      </picture>

      <div className={`absolute top-0 h-100 w-100 ${styles.background}`} />

      <Container className="absolute top-0 h-100 w-100 flex flex-column justify-center">
        <div className={styles.title}>{title}</div>
        <div
          className={`link t-action db bn pointer ph4 pt3 pb3 ph7-m pt4-m pb4-m ${styles.button}`}
        >
          <a href={url} className="link">
            {label}
          </a>
        </div>
      </Container>
    </div>
  )
}

Banner.schema = {
  title: 'Banner',
}

export default Banner
