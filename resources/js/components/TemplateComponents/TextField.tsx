import React, { ReactChild, ReactElement } from 'react'
import TableColumn from './TableColumn'
import TableRow from './TableRow'

type TextFieldProps = {
  icon?: React.ReactNode
  children?: any
  style?: React.CSSProperties
  color?: string
}
function TextField({ children, icon, style, color }: TextFieldProps) {
  if (typeof children === "string" && (children === "" || children === undefined || children === null)) return null
  if (children == null || children.props.children === '') return null

  return (
    <TableRow style={style}>
      <TableColumn style={{
        width: '30px'
      }}>
        {icon}
      </TableColumn>
      <TableColumn style={{ color: color }}>
        {children}
      </TableColumn>
    </TableRow>

  )
}

export default TextField