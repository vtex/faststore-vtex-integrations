import React from 'react'
import type { ComponentProps } from 'react'
import { ProductSummaryList } from 'vtex.product-summary'
import { ListRenderer } from 'vtex.list-context'

import Container from './components/Container'
import ShelfTitle from './components/ShelfTitle'
import styles from './ProductGrid.module.css'
import HorizontalProductSummary from './components/ProductSummaryHorizontal'

interface ProductsByTopSaleDESC {
  filterOption: 'OrderByTopSaleDESC'
}

interface ProductsByCollection {
  filterOption: 'collection'
  collection: string
}

interface Props {
  title?: string
  maxNumberItems?: number
  products: ProductsByTopSaleDESC | ProductsByCollection
}

function ProductGrid({
  title,
  maxNumberItems = 6,
  products = { filterOption: 'OrderByTopSaleDESC' },
}: Props) {
  const productSummaryListProps = {
    ProductSummary: HorizontalProductSummary,
    maxItems: maxNumberItems,
  } as ComponentProps<typeof ProductSummaryList>

  if (products.filterOption === 'OrderByTopSaleDESC') {
    productSummaryListProps.orderBy = products.filterOption
  }

  if (products.filterOption === 'collection') {
    productSummaryListProps.collection = products.collection
  }

  return (
    <Container className={`${styles.container} pv8-ns`}>
      <ShelfTitle title={title ?? ''} showBorder={false} className="pb5" />
      <ProductSummaryList {...productSummaryListProps}>
        <div className={styles.grid}>
          <ListRenderer />
        </div>
      </ProductSummaryList>
    </Container>
  )
}

export default ProductGrid
