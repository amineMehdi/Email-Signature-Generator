import React, { ReactElement } from 'react'
import TableColumn from './TableColumn'
import TableRow from './TableRow'

type TextFieldProps = {
  icon?: React.ReactNode
  children : React.ReactNode | string
  style?: React.CSSProperties
  color?: string
}
function TextField({children, icon, style, color}: TextFieldProps) {
  console.log(children)
  if (typeof children === "string" && (children === "" || children === undefined || children === null)) return null
  if (children?.props.children === '' || children?.props.children === undefined || children?.props.children === null) return null

  return (
    <TableRow style={style}>
      <TableColumn style={{
        width: '30px'
      }}>
        {icon}
      </TableColumn>
      <TableColumn style={{color : color}}>
        {children}
      </TableColumn>
    </TableRow>
    
  )
}

export default TextField