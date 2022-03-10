import React from 'react'

type TableGroupProps = {
  children : React.ReactNode
}
function TableGroup({ children } : TableGroupProps) {
  return (
    <table>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}

export default TableGroup