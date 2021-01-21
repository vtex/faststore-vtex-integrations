import React from 'react'
import { SliderLayout } from 'vtex.slider-layout'
import { useCustomClasses } from 'vtex.css-handles'

import BannerComponent from './components/Banner'
import type { Props as Banner } from './components/Banner'
import styles from './MainBannerCarousel.module.css'

interface Props {
  banners: Banner[]
}

const contentMarginClasses = `mh5 mh6-m mh8-l mh9-xl`

function MainBannerCarousel({ banners = [] }: Props) {
  const carouselClasses = useCustomClasses(() => ({
    sliderArrows: `${contentMarginClasses} ${styles.sliderArrows}`,
    paginationDotsContainer: `center pa2 ${styles.paginationDotsContainer}`,
    paginationDot: styles.paginationDot,
  }))

  return (
    <SliderLayout
      infinite
      classes={carouselClasses}
      itemsPerPage={1}
      showNavigationArrows="always"
      arrowSize={16}
    >
      {banners.map((bannerProps, index) => (
        <BannerComponent key={index} {...bannerProps} />
      ))}
    </SliderLayout>
  )
}

MainBannerCarousel.schema = {
  title: 'Main Banner Carousel',
}

export default MainBannerCarousel
