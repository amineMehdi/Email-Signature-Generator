import React from 'react'
import TableColumn from './TableColumn'
import TableGroup from './TableGroup'
import TableRow from './TableRow'

export enum SpacerType {
  Horizontal,
  Vertical
}
export enum LinePosition {
  Top = 'top',
  Bottom = 'bottom',
  Center = 'middle'
}
export interface Line {
  color?: string,
  width?: number,
  height?: number,
  position?: string
}

type SpacerProps = {
  type: SpacerType,
  line?: Line,
  space: number
}

function Spacer({ type, line, space }: SpacerProps) {
  const halfSpace = space / 2;

  switch (type) {
    case SpacerType.Horizontal:
      if (line) {
        return (
          <TableGroup style={{ width: "100%" }}>
            <TableRow>
              <TableColumn style={{ height: `${halfSpace}px` }} />
            </TableRow>
            <TableRow>
              <TableColumn style={{
                display: 'block',
                borderBottom: `${line?.height}px solid ${line?.color}`,
                width: `${line?.width}px`,
                verticalAlign: `${line?.position}`
              }} />
            </TableRow>
            <TableRow>
              <TableColumn style={{ height: `${halfSpace}px` }} />
            </TableRow>
          </TableGroup>
        )
      } else {
        return (
          <TableGroup style={{ width: "100%" }}>
            <TableRow>
              <TableColumn style={{ height: `${space}px` }} />
            </TableRow>
          </TableGroup>
        )
      }

    case SpacerType.Vertical:
      if (line) {
        return (
          <>
            <TableColumn style={{ width: `${space}px` }} />
            <TableColumn style={{
              display: 'table-cell',
              borderLeft: `${line?.width}px solid ${line?.color}`,
              height: `${line?.height}px`,
              width: `${line?.width}px`,
              verticalAlign: `${line?.position}`
            }} />
            <TableColumn style={{ width: `${space}px` }} />
          </>
        )
      } else {
        return (
          <TableColumn style={{ width: `${space}px` }} />
        )
      }
    default:
      return <td></td>
  }
}

export default Spacer;