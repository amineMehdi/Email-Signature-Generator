import React from 'react'
import TableColumn from './TableColumn'
import TableRow from './TableRow'

type TextFieldProps = {
  icon?: React.ReactNode
  children : React.ReactNode
  style?: React.CSSProperties
}
function TextField({children, icon, style}: TextFieldProps) {
  if(children.every( (c :any) => c == '' || c == ' ')) return null
  return (
    <TableRow style={style}>
      <TableColumn style={{
        width: '30px'
      }}>
        {icon}
      </TableColumn>
      <TableColumn>
        {children}
      </TableColumn>
    </TableRow>
    
  )
}

export default TextField