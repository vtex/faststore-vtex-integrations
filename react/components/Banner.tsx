import React from 'react'
import { Image } from 'vtex.store-image'
import { useIntl, defineMessages } from 'react-intl'
import { Link } from 'vtex.render-runtime'
import type { ImageProps } from 'vtex.store-image/react/Image'

import styles from './Banner.module.css'

type Color = 'blue' | 'yellow' | 'red'

const messages = defineMessages({
  shopNow: { id: 'store/store-theme.shopNow' },
})

const colorMap: Record<Color, string> = {
  blue: styles.bannerBlue,
  yellow: styles.bannerYellow,
  red: styles.bannerRed,
}

export interface Props {
  color: Color
  image: ImageProps
  subtitle: string
  title: string
  url: string
}

function Banner({ color, image, url, subtitle, title }: Props) {
  const bannerClassColor = colorMap[color]
  const intl = useIntl()

  const desktopButtonClasses = 'pt4-m pr7-m pb4-m pl7-m'
  const mobileButtonClasses = 'pt3 pr4 pb3 pl4'

  return (
    <div
      className={`relative w-100 flex justify-between ${bannerClassColor} ${styles.bannerContainer}`}
    >
      <div
        className={`absolute mh-100 flex flex-column justify-center-m h-100 z-1 pt8 pt0-m ${styles.bannerInfoContainer}`}
      >
        <span className={`fw5 self-start mb3 mb4-m ${styles.bannerTitle}`}>
          {title}
        </span>
        <span className={`fw5 self-start ${styles.bannerSubtitle}`}>
          {subtitle}
        </span>

        {url && (
          <div className="self-start">
            <Link
              className={`link fw7 t-action br1 db ${styles.bannerButton} ${desktopButtonClasses} ${mobileButtonClasses}`}
              to={url}
            >
              {intl.formatMessage(messages.shopNow)}
            </Link>
          </div>
        )}
      </div>

      <div className={`absolute right-0-m ${styles.bannerImageContainer}`}>
        <Image {...image} maxWidth="none" />
      </div>
    </div>
  )
}

export default Banner
