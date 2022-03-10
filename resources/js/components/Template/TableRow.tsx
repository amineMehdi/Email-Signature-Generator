import React, { FC } from 'react'

type TableRowProps = {
  children : React.ReactNode
}

function TableRow({children}: TableRowProps) {
  return (
    <tr>{children}</tr>
  )
}

export default TableRow