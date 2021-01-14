import React from 'react'
import { ProductSummaryImage, ProductSummaryCustom } from 'vtex.product-summary'
import {
  ProductHighlights,
  ProductHighlightWrapper,
  ProductHighlightText,
} from 'vtex.product-highlights'
import { ListPrice, SellingPrice } from 'vtex.product-price'
import type { ProductTypes } from 'vtex.product-context'
import { useCustomClasses } from 'vtex.css-handles'

import styles from './Default.module.css'

interface Props {
  product: ProductTypes.Product
}

function ProductSummaryLean({ product }: Props) {
  const summaryClasses = useCustomClasses(() => ({
    clearLink: [styles.clearLink, 'tl'],
  }))

  const sellingPriceClasses = useCustomClasses(() => ({
    sellingPrice: 't-heading-5',
  }))

  const listPriceClasses = useCustomClasses(() => ({
    listPrice: 't-small c-muted-1',
  }))

  return (
    <ProductSummaryCustom product={product} classes={summaryClasses}>
      <div className="relative mb3">
        <div>
          <ProductSummaryImage aspectRatio="4:4" />
        </div>

        <div className="absolute bottom-0 left-0 mb2 ml2">
          <ProductHighlights type="collection">
            <ProductHighlightWrapper>
              <ProductHighlightText message="{highlightName}" />
            </ProductHighlightWrapper>
          </ProductHighlights>
        </div>
      </div>

      <div className="flex flex-column justify-between h-100">
        <div>{/* review stars */}</div>

        <div>
          <div>
            <SellingPrice classes={sellingPriceClasses} />
          </div>
          <div>
            <ListPrice classes={listPriceClasses} />
          </div>
        </div>
      </div>
    </ProductSummaryCustom>
  )
}

export default ProductSummaryLean
