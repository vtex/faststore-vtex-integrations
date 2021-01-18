import React from 'react'
import { ProductSummaryList } from 'vtex.product-summary'
import { useRuntime } from 'vtex.render-runtime'

import ProductDisplayGrid from '../ProductDisplays/Grid'
import ProductDisplaySlider from '../ProductDisplays/Slider'
import ShelfTitle from '../ShelfTitle'
import Container from '../Container'
import ProductSummaryLean from '../ProductSummaries/Lean'

interface Props {
  title: string
  collection: string
}

function ShelfMobileList({ title, collection }: Props) {
  const { deviceInfo } = useRuntime()

  return (
    <Container>
      <ShelfTitle title={title} seeMoreLink="/" />

      <ProductSummaryList
        ProductSummary={ProductSummaryLean}
        collection={collection}
        orderBy=""
      >
        {deviceInfo.type !== 'phone' ? (
          <ProductDisplaySlider />
        ) : (
          <ProductDisplayGrid maxPerLine={2} />
        )}
      </ProductSummaryList>
    </Container>
  )
}

export default ShelfMobileList
