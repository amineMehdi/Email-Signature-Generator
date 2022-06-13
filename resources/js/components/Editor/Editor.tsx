import React, {useState, useEffect } from 'react'
import EmptyGridItem from './EmptyGridItem'
import RGL, { WidthProvider } from 'react-grid-layout'

import "react-grid-layout/css/styles.css"
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useDrop } from 'react-dnd';

const ReactGridLayout = WidthProvider(RGL);

type EditorType = {
  items?: number,
  cols?: number,
  rowHeight?: number,
  onLayoutChange?: (layout: any) => void,
  verticalCompact?: boolean
}

type layoutType = {
  i: string,
  x: number,
  y: number,
  w: number,
  h: number,
  static?: boolean
  maxH?: number,
}
let hColMax = 4;

export default function Editor( props : EditorType) {
  const [layout , setLayout] = useState<layoutType[]| any []>([]);

  useEffect(() => {
    setLayout(lay => 
      [...lay, {
      i: '0',
      x: 0,
      y: 2,
      w: 4,
      h: hColMax,
      // maxH: hColMax,
      }]
    )
  }, []);

  const [{canDrop, isOver}, drop] = useDrop(
    () => ({
      accept: 'Box',
      drop(_item : unknown, monitor) {
        addItem();
      },
      collect : (monitor) => ({
        isOver : monitor.isOver(),
        canDrop : monitor.canDrop(),
      }),
    }), []
  );

  const addItem = () => {
    setLayout(lay  =>
      [...lay, {
        i: layout.length.toString(), 
        x: 4,
        y: 0,
        w: 4,
        h: 2,
        // maxH: hColMax,
      }]
    );
  }

  const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, -50%);
    width: 1.5em;
    height: 1.5em;
    border: none;

  `;

  const generateDOM = () => {
    return layout.map((item : any, i: number) =>{
      return (
        <div 
          key = {i}
          css = {style}
          data-grid={item}>
          <EmptyGridItem i={i}/>
          {/* <CloseButton>X</CloseButton> */}
        </div>
      );
    });
  }
  
  const style = css`
    border: 2px dotted #ccc;
    border-radius: 15px;
    overflow: hidden;
  `;
  
  const editorStyle = css`
    background-color: ${canDrop || isOver ? '#92ebab' : '#f4f3f3'};
    transition: background-color 0.4s ease;
    border-radius: 15px;
  `;

  const onLayoutChange = (lay : any) => {
    setLayout(lay);
    // console.log(lay);
    // console.log("layout : ", layout);

  }

  return (
    <div
      ref={drop}
      className="layout"
      css = {editorStyle}
      >
      <ReactGridLayout
        onLayoutChange={onLayoutChange}
        {...props}
        maxRows={6}
      >
        {generateDOM()}
      </ReactGridLayout>

    </div>
  );
}

Editor.defaultProps = {
  items: 1,
  cols: 12,
  rowHeight: 50
}