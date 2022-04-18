import React from 'react'

type TableColumnProps = {
  children? : React.ReactNode,
  style? : React.CSSProperties
}
function TableColumn({children, style} : TableColumnProps) {
  return (
    <td style={style}>{children}</td>
  )
}

export default TableColumn