import React, { useMemo } from 'react'
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

function getBannerColorClass(color: Color) {
  switch (color) {
    case 'blue':
      return styles.bannerBlue

    case 'red':
      return styles.bannerRed

    case 'yellow':
      return styles.bannerYellow

    default:
      return ''
  }
}

function Banner({ color, image, url, subtitle, title }: Props) {
  const desktopButtonClasses = 'pt4-m pr6-m pb4-m pl6-m'
  const mobileButtonClasses = 'pt3-s pr4-s pb3-s pl4-s'
  const bannerClassColor = useMemo(() => getBannerColorClass(color), [color])

  return (
    <div
      className={`w-100 flex justify-between ${bannerClassColor} ${styles.bannerContainer}`}
    >
      <div
        className={`flex flex-column h-100 z-1 ${styles.bannerInfoContainer}`}
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

      <div className={`absolute-s static-m ${styles.bannerImageContainer}`}>
        <Image {...image} maxWidth="none" />
      </div>
    </div>
  )
}

export default Banner
