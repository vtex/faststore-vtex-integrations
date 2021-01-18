import React from 'react'
import { ProductSummaryList } from 'vtex.product-summary'

import ProductSummary from '../ProductSummaries/Default'
import ShelfTitle from '../ShelfTitle'
import ProductDisplaySlider from '../ProductDisplays/Slider'
import Container from '../Container'

interface Props {
  title: string
  collection: string
}

function ShelfAlwaysSlider({ title, collection }: Props) {
  return (
    <Container>
      <ShelfTitle title={title} seeMoreLink="/" />

      <ProductSummaryList
        ProductSummary={ProductSummary}
        collection={collection}
        orderBy=""
      >
        <ProductDisplaySlider />
      </ProductSummaryList>
    </Container>
  )
}

export default ShelfAlwaysSlider
