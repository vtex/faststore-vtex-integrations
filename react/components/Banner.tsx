import React from 'react'
import { Image } from 'vtex.store-image'
import type { ImageProps } from 'vtex.store-image/react/Image'

import styles from './Banner.module.css'

type Color = 'blue' | 'yellow' | 'red'

export interface Props {
  color: Color
  image: ImageProps
  subtitle: string
  title: string
  url: string
}

function Banner({ color, image, url, subtitle, title }: Props) {
  const desktopButtonClasses = 'pt4-m pr6-m pb4-m pl6-m'
  // const mobileButtonClasses = 'pt3-s pr4-s pb3-s pl4-s'

  // console.log(subtitle, title, color, mobileButtonClasses)

  return (
    <div className="relative w-100">
      <div className="absolute pa7">
        <p>{title}</p>
        <p>{subtitle}</p>
        <div>
          <a
            className={`link fw7 t-action br1 db ${styles.bannerButton} ${desktopButtonClasses}`}
            href={url}
          >
            Shop Now {color}
          </a>
        </div>
      </div>

      <Image {...image} width="100%" height="20.5em" />
    </div>
  )
}

export default Banner
