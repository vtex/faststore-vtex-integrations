import React, { useMemo } from 'react'
import { Image } from 'vtex.store-image'
import type { ImageProps } from 'vtex.store-image/react/Image'
import { useIntl, defineMessages } from 'react-intl'

import styles from './Banner.module.css'

type Color = 'blue' | 'yellow' | 'red'

export interface Props {
  color: Color
  image: ImageProps
  subtitle: string
  title: string
  url: string
}

const messages = defineMessages({
  shopNow: { id: 'store/store-theme.shopNow' },
})

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
  const bannerClassColor = useMemo(() => getBannerColorClass(color), [color])
  const intl = useIntl()

  const desktopButtonClasses = 'pt4-m pr6-m pb4-m pl6-m'
  const mobileButtonClasses = 'pt3-s pr4-s pb3-s pl4-s'

  return (
    <div
      className={`w-100 flex justify-between ${bannerClassColor} ${styles.bannerContainer}`}
    >
      <div
        className={`absolute mh-100 flex flex-column h-100 z-1 ${styles.bannerInfoContainer}`}
      >
        <span className={`fw5 self-start ${styles.bannerTitle}`}>{title}</span>
        <span className={`fw5 self-start mb3 ${styles.bannerSubtitle}`}>
          {subtitle}
        </span>

        {url && (
          <div className="self-start mt4-s mt5-m">
            <a
              className={`link fw7 t-action br1 db ${styles.bannerButton} ${desktopButtonClasses} ${mobileButtonClasses}`}
              href={url}
            >
              {intl.formatMessage(messages.shopNow)}
            </a>
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
