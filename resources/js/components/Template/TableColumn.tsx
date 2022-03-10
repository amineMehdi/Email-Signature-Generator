import React from 'react'

type TableColumnProps = {
  children : React.ReactNode
}
function TableColumn({children} : TableColumnProps) {
  return (
    <td>{children}</td>
  )
}

export default TableColumn