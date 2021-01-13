import React from 'react'
import { Image } from 'vtex.store-image'
import { Link } from 'vtex.render-runtime'
import { useCustomClasses } from 'vtex.css-handles'
import { useIntl, defineMessages } from 'react-intl'
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

export const contentMarginClasses = `mh5 mh6-m mh8-l mh9-xl`

export interface Props {
  color: Color
  image: ImageProps
  imageAlt: string
  subtitle: string
  title: string
  url: string
}

function Banner({ color, image, imageAlt, url, subtitle, title }: Props) {
  const intl = useIntl()
  const bannerClassColor = colorMap[color]
  const imageClasses = useCustomClasses(() => ({
    imageElement: styles.imageElement,
  }))

  const desktopButtonClasses = 'pt4-m pr7-m pb4-m pl7-m'
  const mobileButtonClasses = 'pt3 pr4 pb3 pl4'

  return (
    <div
      className={`relative w-100 flex justify-between ${bannerClassColor} ${styles.bannerContainer}`}
    >
      <Link to={url} className="w-100">
        <div
          className={`absolute mh-100 flex flex-column justify-center-m h-100 z-1 pt8 pt0-m ${contentMarginClasses} ${styles.bannerInfoContainer}`}
        >
          <span className={`fw5 self-start mb3 mb4-m ${styles.bannerTitle}`}>
            {title}
          </span>
          <span className={`fw5 self-start ${styles.bannerSubtitle}`}>
            {subtitle}
          </span>

          {url && (
            <div className="self-start mb5-m">
              <button
                className={`link fw7 t-action br2 db bn pointer ${styles.bannerButton} ${desktopButtonClasses} ${mobileButtonClasses}`}
              >
                {intl.formatMessage(messages.shopNow)}
              </button>
            </div>
          )}
        </div>

        <div className="w-100 h-100">
          <div
            className={`h-100 flex flex-column flex-row-l justify-end ${contentMarginClasses} ${styles.bannerInfoContainer}`}
          >
            <Image
              src={image.src}
              alt={imageAlt}
              classes={imageClasses}
              maxHeight="100%"
            />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Banner
