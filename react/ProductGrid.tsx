import React from 'react'
import { ProductSummaryList } from 'vtex.product-summary'

import Container from './components/Container'
import ProductSummaryHorizontal from './components/ProductSummaries/Horizontal'
import ProductDisplayGrid from './components/ProductDisplays/Grid'
import ShelfTitle from './components/ShelfTitle'
import styles from './ProductGrid.module.css'

const maxPerLine = {
  desktop: 3,
  tablet: 3,
  phone: 1,
}

interface Props {
  title: string
  collection: string
}

function ProductGrid({ title, collection }: Props) {
  return (
    <Container className={`${styles.background} pb5`}>
      <ShelfTitle title={title} seeMoreLink="/" line={false} />

      <ProductSummaryList
        ProductSummary={ProductSummaryHorizontal}
        collection={collection}
        orderBy=""
      >
        <ProductDisplayGrid maxPerLine={maxPerLine} />
      </ProductSummaryList>
    </Container>
  )
}

export default ProductGrid
