import React from 'react'
import { Link } from 'vtex.render-runtime'
import { IconCaret } from 'vtex.store-icons'

interface Props {
  title: string
  seeMoreLink: string
  line?: boolean
}

function ShelfTitle({
  title = 'Popular picks',
  seeMoreLink,
  line = true,
}: Props) {
  return (
    <>
      <div
        className={`flex justify-between items-baseline pv6 ${
          line ? 'bb b--muted-4 mb6' : ''
        }`}
      >
        <h3 className="t-heading-3 c-on-base mv0">{title}</h3>

        <Link
          to={seeMoreLink}
          className="f5 b c-link hover-c-link visited-c-link active-c-link no-underline"
        >
          See more <IconCaret orientation="right" thin size={11} />
        </Link>
      </div>
    </>
  )
}

export default ShelfTitle
