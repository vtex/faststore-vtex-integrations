import React from 'react'
import { useQuery } from 'react-apollo'
import ContentLoader from 'react-content-loader'
import { Image } from 'vtex.store-image'
import type { CssHandlesTypes } from 'vtex.css-handles'
import { Link } from 'vtex.render-runtime'
import type { Category as CategoryGraphqlType } from 'vtex.store-graphql'

import type { CategoryType } from '../ShopByCategory'
import styles from './Category.module.css'
import categoryQuery from '../graphql/categoryQuery.gql'

interface CategoryQueryResult {
  category: Pick<CategoryGraphqlType, 'name' | 'href'>
}

interface CategoriesQueryVariables {
  id: number
}

type CategoryProps = {
  category: CategoryType
  classes: CssHandlesTypes.CustomClasses<CssHandlesTypes.CssHandlesList>
}

function Category({ category, classes }: CategoryProps) {
  const { data, loading, error } = useQuery<
    CategoryQueryResult,
    CategoriesQueryVariables
  >(categoryQuery, {
    variables: { id: Number(category.categoryId) },
    ssr: false,
  })

  if (error) {
    return null
  }

  const CategoryContent = () => (
    <>
      <div className={styles.imageWrapper}>
        <Image
          key={category.categoryImage}
          src={category.categoryImage}
          maxWidth={80}
          maxHeight={80}
          classes={classes}
        />
      </div>
      {loading ? (
        <ContentLoader
          width={120}
          height={16}
          viewBox="0 0 120 16"
          backgroundColor="#F3F9FF"
          foregroundColor="#3F3F40"
          foregroundOpacity={0.02}
          className="mt5 mt6-ns tc w-100"
        >
          <rect x="0" y="0" rx="2" ry="2" width="120" height="16" />
        </ContentLoader>
      ) : (
        <span
          className={`${styles.categoryName} mt5 mt6-ns tc overflow-hidden w-100`}
        >
          {data?.category.name}
        </span>
      )}
    </>
  )

  const wrapperClassname = `${styles.categoryContainer} flex flex-column items-center pv6 pv7-ns ph5 w-100 h-100`

  if (loading) {
    return (
      <div className={wrapperClassname}>
        <CategoryContent />
      </div>
    )
  }

  return (
    <Link
      to={data?.category.href ?? undefined}
      className={`${styles.categoryContainerLink} ${wrapperClassname}`}
    >
      <CategoryContent />
    </Link>
  )
}

export default React.memo(Category)
