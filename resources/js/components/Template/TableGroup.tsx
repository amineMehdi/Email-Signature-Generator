import React from 'react'

type TableGroupProps = {
  children? : React.ReactNode,
  style? : React.CSSProperties
}
function TableGroup({ children, style } : TableGroupProps) {
  return (
    <table style={style}>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}

export default TableGroup