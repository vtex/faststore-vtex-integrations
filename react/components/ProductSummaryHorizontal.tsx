import React from 'react'
import { ProductSummaryImage, ProductSummaryCustom } from 'vtex.product-summary'
import { ProductName } from 'vtex.store-components'
import { SellingPrice } from 'vtex.product-price'
import type { ProductTypes } from 'vtex.product-context'
import { useCustomClasses } from 'vtex.css-handles'
import { ProductAvailability } from 'vtex.product-availability'

import styles from './ProductSummaryHorizontal.module.css'

interface Props {
  product: ProductTypes.Product
}

function ProductSummaryHorizontal({ product }: Props) {
  const imageClasses = useCustomClasses(() => ({
    imagePlaceholder: styles.productImage,
    imageContainer: ['flex flex-column items-center', styles.productImage],
  }))

  const summaryClasses = useCustomClasses(() => ({
    clearLink: [styles.clearLink, 'tl'],
    container: styles.summaryContainer,
    element: styles.summaryElement,
  }))

  const nameClasses = useCustomClasses(() => ({
    productBrand: ['t-body-ns t-small-s', styles.productName],
  }))

  const productAvailabilityClasses = useCustomClasses(() => ({
    lowStockText: [styles.availabilityText, 'fw7'],
    lowStockHighlight: [styles.availabilityText, 'fw7'],
    highStockText: [styles.availabilityText, 'fw7'],
    HighStockHighlight: [styles.availabilityText, 'fw7'],
  }))

  const sellingPriceClasses = useCustomClasses(() => ({
    sellingPrice: [styles.sellingPrice, 'f4', 'fw5', 'fw7-ns'],
  }))

  return (
    <ProductSummaryCustom product={product} classes={summaryClasses}>
      <div
        className={`flex flex-row h-100 w-100 bg-white pa5 pa6-ns ${styles.container}`}
      >
        <div className="pr6">
          <ProductSummaryImage classes={imageClasses} />
        </div>

        <div className="flex flex-column justify-between h-100 w-100">
          <div className="mb3">
            <ProductName tag="div" classes={nameClasses} />
          </div>

          <div>{/* review stars */}</div>

          <div>
            <SellingPrice classes={sellingPriceClasses} />
          </div>
          <div>
            <ProductAvailability
              threshold={10}
              lowStockMessage="Only {quantity} left in stock"
              highStockMessage="Order now!"
              classes={productAvailabilityClasses}
            />
          </div>
        </div>
      </div>
    </ProductSummaryCustom>
  )
}

export default ProductSummaryHorizontal
