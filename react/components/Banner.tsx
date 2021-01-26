import React from 'react'
import { Image } from 'vtex.store-image'
import { Link, useRuntime } from 'vtex.render-runtime'
import { useCustomClasses } from 'vtex.css-handles'

import styles from './Banner.module.css'

type Color = 'blue' | 'yellow' | 'red'

const colorMap: Record<Color, string> = {
  blue: styles.bannerBlue,
  yellow: styles.bannerYellow,
  red: styles.bannerRed,
}

export interface Props {
  color: Color
  desktopImage: string
  mobileImage: string
  imageAlt: string
  url: string
}

function Banner({ color, desktopImage, mobileImage, imageAlt, url }: Props) {
  const imageClasses = useCustomClasses(() => ({
    imageElement: styles.imageElement,
  }))

  const {
    deviceInfo: { isMobile, type },
  } = useRuntime()

  const bannerClassColor = colorMap[color]
  const imageSrc = isMobile && type === 'phone' ? mobileImage : desktopImage

  return (
    <div className={`w-100 ${bannerClassColor}`}>
      <Link to={url} className="w-100">
        <div className={`flex justify-center-m ${styles.bannerContainer}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            classes={imageClasses}
            width="100%"
            height="100%"
          />
        </div>
      </Link>
    </div>
  )
}

export default Banner
