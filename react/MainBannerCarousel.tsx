import React from 'react'
import { SliderLayout } from 'vtex.slider-layout'
import { useCustomClasses } from 'vtex.css-handles'

import BannerComponent from './components/Banner'
import type { Props as Banner } from './components/Banner'
import styles from './MainBannerCarousel.module.css'

const itensPerPage = {
  desktop: 1,
  tablet: 1,
  phone: 1,
}

interface Props {
  banners: Banner[]
}

function MainBannerCarousel({ banners = [] }: Props) {
  const carouselClasses = useCustomClasses(() => ({
    sliderArrows: `ma7 ${styles.sliderArrows}`,
    paginationDotsContainer: `center pa1 ${styles.paginationDotsContainer}`,
  }))

  return (
    <SliderLayout
      infinite
      classes={carouselClasses}
      itemsPerPage={itensPerPage}
      showNavigationArrows="desktopOnly"
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
