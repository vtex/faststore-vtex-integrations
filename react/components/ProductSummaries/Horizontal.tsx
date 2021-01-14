import React from 'react'
import { ProductSummaryImage, ProductSummaryCustom } from 'vtex.product-summary'
import { ProductName } from 'vtex.store-components'
import {
  ProductHighlights,
  ProductHighlightWrapper,
  ProductHighlightText,
} from 'vtex.product-highlights'
import { SellingPrice } from 'vtex.product-price'
import type { ProductTypes } from 'vtex.product-context'
import { useCustomClasses } from 'vtex.css-handles'

import styles from './Horizontal.module.css'

interface Props {
  product: ProductTypes.Product
}

function ProductSummaryHorizontal({ product }: Props) {
  const summaryClasses = useCustomClasses(() => ({
    container: [styles.container, 'mh0 bg-base pa5'],
    clearLink: [styles.clearLink, 'tl'],
    element: styles.element,
  }))

  const nameClasses = useCustomClasses(() => ({
    productNameContainer: 't-body-s t-body-ns c-on-base b-ns mb3',
  }))

  const sellingPriceClasses = useCustomClasses(() => ({
    sellingPrice: 't-heading-4 b',
  }))

  const imageClasses = useCustomClasses(() => ({
    imageWrapper: styles.imageWrapper,
    imagePlaceholder: styles.imagePlaceholder,
  }))

  return (
    <ProductSummaryCustom product={product} classes={summaryClasses}>
      <div className="flex flex-row">
        <div className="relative w5 mr6">
          <ProductSummaryImage
            aspectRatio="1:1"
            maxHeight="120px"
            placeholder="https://via.placeholder.com/120"
            classes={imageClasses}
          />

          <div className="absolute bottom-0 left-0 mb2 ml2">
            <ProductHighlights type="collection">
              <ProductHighlightWrapper>
                <ProductHighlightText message="{highlightName}" />
              </ProductHighlightWrapper>
            </ProductHighlights>
          </div>
        </div>

        <div className="">
          <div>
            <ProductName tag="div" classes={nameClasses} />
          </div>

          <div>{/* review stars */}</div>

          <div>
            <SellingPrice classes={sellingPriceClasses} />
          </div>
        </div>
      </div>
    </ProductSummaryCustom>
  )
}

export default ProductSummaryHorizontal
