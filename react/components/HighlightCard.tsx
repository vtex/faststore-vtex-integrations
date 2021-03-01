import React from 'react'

import DollarIcon from '../icons/Dollar'
import HomeIcon from '../icons/Home'
import TruckIcon from '../icons/Truck'
import RefreshIcon from '../icons/Refresh'
import styles from './HighlightCard.module.css'

type Icon = 'store' | 'delivery' | 'price' | 'returns'
const icons: Record<Icon, JSX.Element> = {
  price: DollarIcon,
  delivery: TruckIcon,
  store: HomeIcon,
  returns: RefreshIcon,
}

export interface Props {
  icon: Icon
  title: string
  subtitle: string
}

function HighlightCard({ icon, title, subtitle }: Props) {
  return (
    <div className={`flex flex-column align-center ${styles.card}`}>
      <span className={`self-center mt7 ${styles.icon}`}>{icons[icon]}</span>
      <span className={`self-center lh-copy fw5 mb2 mb3-m ${styles.title}`}>
        {title}
      </span>
      <span className={`self-center lh-title fw4 ${styles.subtitle}`}>
        {subtitle}
      </span>
    </div>
  )
}

export default HighlightCard
