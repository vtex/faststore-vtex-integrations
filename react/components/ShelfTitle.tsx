import React from 'react'
import { Link } from 'vtex.render-runtime'
import { IconCaret } from 'vtex.store-icons'

interface Props {
  title: string
  seeMoreLink: string
}

function ShelfTitle({ title = 'Popular picks', seeMoreLink }: Props) {
  return (
    <>
      <div className="flex justify-between items-baseline pv6 mb6 bb b--muted-4">
        <h3 className="t-heading-3 c-on-base mv0">{title}</h3>

        <Link
          to={seeMoreLink}
          className="f6 b c-link hover-c-link visited-c-link active-c-link no-underline"
        >
          See more <IconCaret orientation="right" thin size={11} />
        </Link>
      </div>
    </>
  )
}

export default ShelfTitle
