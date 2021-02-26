import React from 'react'
import { Link } from 'vtex.render-runtime'
import { IconCaret } from 'vtex.store-icons'

interface Props {
  title?: string
  showBorder?: boolean
  seeMoreText?: string
  seeMoreLink?: string
  className?: HTMLDivElement['className']
}

function ShelfTitle({
  title = 'Popular picks',
  showBorder = true,
  seeMoreText = 'See more',
  seeMoreLink = '/',
  className = '',
}: Props) {
  return (
    <>
      <div
        className={`flex justify-between items-baseline${
          showBorder ? ' pb5 bb b--muted-4' : ''
        } ${className}`}
      >
        <h3 className="t-heading-4 c-on-base mv0">{title}</h3>

        <Link
          to={seeMoreLink}
          className="f6 b c-link hover-c-link visited-c-link active-c-link no-underline"
        >
          {seeMoreText} <IconCaret orientation="right" thin size={11} />
        </Link>
      </div>
    </>
  )
}

export default ShelfTitle
