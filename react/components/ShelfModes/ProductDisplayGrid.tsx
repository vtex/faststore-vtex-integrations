import React from 'react'
import { useListContext } from 'vtex.list-context'
import { useResponsiveValue } from 'vtex.responsive-values'
import type { ResponsiveValuesTypes } from 'vtex.responsive-values'

interface Props {
  maxPerLine: ResponsiveValuesTypes.ResponsiveValue<number>
}

function ProductDisplayGrid(props: Props) {
  const { list } = useListContext() ?? []
  const maxPerLine = useResponsiveValue(props.maxPerLine)

  const splittedLines = breakByLines(list, maxPerLine)

  return (
    <>
      {splittedLines.map((line, lineIndex) => (
        <div className="flex justify-around mb5" key={lineIndex}>
          {line.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`w-100 ${itemIndex === maxPerLine - 1 ? '' : 'mr5'}`}
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

function breakByLines(list: any[], maxPerLine: number) {
  const splittedLines = []

  let line = []

  for (const item of list) {
    if (line.length === maxPerLine) {
      splittedLines.push(line)
      line = []
    } else {
      line.push(item)
    }
  }

  if (line.length > 0) {
    // splittedLines.push(line)
  }

  return splittedLines
}

export default ProductDisplayGrid
