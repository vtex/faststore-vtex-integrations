import React, { useMemo } from 'react'
import { SliderLayout } from 'vtex.slider-layout'
import { useCustomClasses } from 'vtex.css-handles'

import BannerComponent from './components/Banner'
import type { Props as Banner } from './components/Banner'
import styles from './MainBannerCarousel.module.css'

interface Props {
  banners: Banner[]
}

const itensPerPage = {
  desktop: 1,
  tablet: 1,
  phone: 1,
}

function renderBanners(banners: Banner[]) {
  return banners.map((bannerProps, index) => (
    <BannerComponent key={index} {...bannerProps} />
  ))
}

const bannersToBeDeleted: Banner[] = [
  {
    color: 'red',
    image: {
      src:
        'https://storecomponents.vtexassets.com/arquivos/banner-principal.png',
    },
    subtitle: 'Meu Subtitulo 1',
    title: 'Titulo 1',
    url: 'https://storeframework.myvtex.com',
  },
  {
    color: 'red',
    image: {
      src: 'https://storecomponents.vtexassets.com/arquivos/banner.jpg',
    },
    subtitle: 'Meu Subtitulo 2',
    title: 'Titulo 2',
    url: 'https://storeframework.myvtex.com',
  },
]

function MainBannerCarousel({ banners = bannersToBeDeleted }: Props) {
  const carouselClasses = useCustomClasses(() => ({
    sliderArrows: styles.sliderArrows,
    sliderLeftArrow: styles.sliderLeftArrow,
    sliderRightArrow: styles.sliderRightArrow,
    paginationDotsContainer: styles.paginationDotsContainer,
  }))

  const renderedBanners = useMemo(() => renderBanners(banners), [banners])

  return (
    <SliderLayout
      infinite
      classes={carouselClasses}
      itemsPerPage={itensPerPage}
      showNavigationArrows="desktopOnly"
      arrowSize={16}
    >
      {renderedBanners}
    </SliderLayout>
  )
}

MainBannerCarousel.schema = {
  title: 'Main Banner Carousel',
}

export default MainBannerCarousel
