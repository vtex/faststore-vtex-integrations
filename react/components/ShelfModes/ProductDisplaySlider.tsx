import React from 'react'
import { useCustomClasses } from 'vtex.css-handles'
import { SliderLayout } from 'vtex.slider-layout'

import styles from './ProductDisplaySlider.module.css'

const sliderLayoutItemsPerPage = {
  desktop: 6,
  tablet: 4,
  phone: 2,
}

const sliderCenterMode: Record<string, 'disabled' | 'to-the-left'> = {
  desktop: 'disabled',
  tablet: 'disabled',
  phone: 'to-the-left',
}

function ProductDisplaySlider() {
  const shelfClasses = useCustomClasses(() => ({
    slide: { name: styles.slide, applyModifiers: true },
    sliderArrows: styles.sliderArrows,
    sliderLeftArrow: styles.sliderLeftArrow,
    sliderRightArrow: styles.sliderRightArrow,
  }))

  return (
    <SliderLayout
      classes={shelfClasses}
      itemsPerPage={sliderLayoutItemsPerPage}
      showNavigationArrows="desktopOnly"
      showPaginationDots="desktopOnly"
      infinite={false}
      centerMode={sliderCenterMode}
      arrowSize={11}
    />
  )
}

export default ProductDisplaySlider
