import React from 'react'
import { SliderLayout } from 'vtex.slider-layout'
import { useCustomClasses } from 'vtex.css-handles'

import Container from './components/Container'
import HighlightCard from './components/HighlightCard'
import type { Props as Highlight } from './components/HighlightCard'
import styles from './Highlights.module.css'

interface Props {
  title: string
  highlights: Highlight[]
}

function Highlights({ title, highlights }: Props) {
  const sliderClasses = useCustomClasses(() => ({
    paginationDotsContainer: styles.paginationDotsContainer,
  }))

  return (
    <Container className={styles.container}>
      <div className={`fw5 f3 pb5 ${styles.title}`}>{title}</div>
      <hr className={styles.divider} />
      <SliderLayout
        infinite
        itemsPerPage={{
          mobile: 2,
          tablet: 4,
          desktop: 4,
        }}
        showNavigationArrows="never"
        showPaginationDots="mobileOnly"
        classes={sliderClasses}
      >
        {highlights?.map((highlightProps, index) => (
          <HighlightCard key={index} {...highlightProps} />
        ))}
      </SliderLayout>
    </Container>
  )
}

Highlights.schema = {
  title: 'Highlights',
}

export default Highlights
