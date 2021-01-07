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

function Banner({ image, url, subtitle, title }: Props) {
  const desktopButtonClasses = 'pt4-m pr6-m pb4-m pl6-m'
  const mobileButtonClasses = 'pt3-s pr4-s pb3-s pl4-s'

  return (
    <>
      <div
        className={`absolute flex flex-column h-100 w-100 ${styles.bannerInfoContainer}`}
      >
        <span className={`fw5 self-start ${styles.bannerTitle}`}>{title}</span>
        <span className={`fw5 self-start mb3 ${styles.bannerSubtitle}`}>
          {subtitle}
        </span>
        {url && (
          <div className="self-start">
            <a
              className={`link fw7 t-action br1 db ${styles.bannerButton} ${desktopButtonClasses} ${mobileButtonClasses}`}
              href={url}
            >
              Shop Now
            </a>
          </div>
        )}
      </div>
      <Image {...image} width="100%" height="328px" />
    </>
  )
}

export default Banner
