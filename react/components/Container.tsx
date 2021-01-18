import React from 'react'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

function Container({ children, className }: Props) {
  return (
    <div className={`mw9 center mv4 ph3 ph5-ns ${className}`}>{children}</div>
  )
}

export default Container
