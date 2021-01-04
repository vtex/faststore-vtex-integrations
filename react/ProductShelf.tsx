import React from 'react'
import { useCustomClasses } from 'vtex.css-handles'
import { ProductSummaryList } from 'vtex.product-summary'
import { SliderLayout } from 'vtex.slider-layout'

import ProductSummary from './components/ProductSummary'
import ShelfTitle from './components/ShelfTitle'
import styles from './ProductShelf.module.css'

const sliderLayoutItemsPerPage = {
  desktop: 6,
  tablet: 4,
  phone: 2,
}

const sliderCenterMode = {
  desktop: 'disabled',
  tablet: 'disabled',
  phone: 'to-the-left',
}

interface Props {
  title: string
  collection: string
}

function ProductShelf({ title, collection }: Props) {
  const shelfClasses = useCustomClasses(() => ({
    slide: { name: styles.slide, applyModifiers: true },
    sliderArrows: styles.sliderArrows,
    sliderLeftArrow: styles.sliderLeftArrow,
    sliderRightArrow: styles.sliderRightArrow,
  }))

  return (
    <div className="mw9 center ph3 ph5-ns">
      <ShelfTitle title={title} seeMoreLink="/" />

      <ProductSummaryList
        ProductSummary={ProductSummary}
        collection={collection}
        orderBy=""
      >
        <SliderLayout
          classes={shelfClasses}
          itemsPerPage={sliderLayoutItemsPerPage}
          showNavigationArrows="desktopOnly"
          showPaginationDots="desktopOnly"
          infinite={false}
          centerMode={sliderCenterMode}
          arrowSize={11}
        />
      </ProductSummaryList>
    </div>
  )
}

ProductShelf.schema = {
  title: 'Shelf',
  description: 'Product shelf',
  properties: {
    title: { type: 'string', title: 'Shelf title' },
    collection: { type: 'string', title: 'Collection ID' },
  },
}

export default ProductShelf
