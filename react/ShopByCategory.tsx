import React from 'react'
import type { CssHandlesTypes } from 'vtex.css-handles'
import { useCssHandles, useCustomClasses } from 'vtex.css-handles'

import Category from './components/Category'
import Container from './components/Container'
import styles from './ShopByCategory.module.css'

const CSS_HANDLES = ['categoryImage', 'categoryImageLink'] as const

export interface CategoryType {
  /** Category image */
  image?: string
  /** Category ID */
  category?: string
}

type ShopByCategoryProps = {
  categories: CategoryType[]
  classes?: CssHandlesTypes.CustomClasses<typeof CSS_HANDLES>
}

function ShopByCategory({ categories, classes }: ShopByCategoryProps) {
  const { handles } = useCssHandles(CSS_HANDLES, { classes })

  const classesOverride = useCustomClasses(() => ({
    imageElement: [handles.categoryImage, styles.categoryImage],
  }))

  return (
    <Container>
      <div className="flex flex-column">
        <h3 className="t-heading-4 self-center self-start-ns c-on-base mv5">
          Shop by category
        </h3>
        <div className={`${styles.flexGrid}`}>
          {categories.map((category) => {
            if (!category.category) {
              return null
            }

            return (
              <Category
                category={category}
                classes={classesOverride}
                key={category.category}
              />
            )
          })}
        </div>
      </div>
    </Container>
  )
}

ShopByCategory.schema = {
  title: 'Shop by Category',
}

export default ShopByCategory
