import React from 'react'
import type { HTMLAttributes } from 'react'

import styles from './Container.module.css'

export const contentPaddingClasses = `ph5 ph6-m ph8-l ph9-xl ${styles.containerPadding}`
export const contentMarginClasses = `mh5 mh6-m mh8-l mh9-xl ${styles.containerMargin}`

function Container({ className, children }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`${contentPaddingClasses} ${className ?? ''}`}>
      {children}
    </div>
  )
}

export default Container
