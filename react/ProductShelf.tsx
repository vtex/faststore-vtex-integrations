import React from 'react'

import ShelfMobileList from './components/ShelfModes/ShelfMobileList'
import ShelfAlwaysSlider from './components/ShelfModes/ShelfAlwaysSlider'

interface Props {
  title: string
  collection: string
  mode: 'desktop-slider-mobile-list' | 'always-slider'
}

function ProductShelf({
  title,
  collection,
  mode = 'desktop-slider-mobile-list',
}: Props) {
  if (mode === 'desktop-slider-mobile-list') {
    return <ShelfMobileList title={title} collection={collection} />
  }

  return <ShelfAlwaysSlider title={title} collection={collection} />
}

ProductShelf.schema = {
  title: 'Shelf',
  description: 'Product shelf',
  properties: {
    title: { type: 'string', title: 'Shelf title' },
    collection: { type: 'string', title: 'Collection ID' },
  },
}

export default ProductShelf
