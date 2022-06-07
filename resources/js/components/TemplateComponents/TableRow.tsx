import React, { FC } from 'react'

type TableRowProps = {
  children : React.ReactNode,
  style? : React.CSSProperties
}

function TableRow({children, style}: TableRowProps) {
  return (
    <tr style={style}>{children}</tr>
  )
}

export default TableRow