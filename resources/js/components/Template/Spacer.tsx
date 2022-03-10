import React from 'react'
import TableColumn from './TableColumn'
import TableGroup from './TableGroup'
import TableRow from './TableRow'

interface Line {
  color: string,
  width: number,
  height: number,
  position: string,
}

type SpacerProps = {
  type: string,
  line : Line,
  children : React.ReactNode,
  space : number,
}
function Spacer({type, line, children, space}: SpacerProps) {
  

}

export default Spacer;