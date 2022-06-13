import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd';
import { css } from '@emotion/react'
import styled from '@emotion/styled';

type EmptyGridItemProps = {
  i : number
}
function EmptyGridItem({i} : EmptyGridItemProps) {
  const [hasDropped, setHasDropped] = useState(false);

  const [{canDrop, isOver}, drop] = useDrop(
    () => ({
    accept: 'Box',
    drop(_item : unknown, monitor) {
      const didDrop = monitor.didDrop();
      if (didDrop) return { name : 'Box' };
      setHasDropped(true);
      console.log("dropped");
      return { name : 'Box' };
    },
    collect : (monitor) => ({
      isOver : monitor.isOver(),
      canDrop : monitor.canDrop(),
    }),
  }), [hasDropped]
  );

  const isActive = canDrop && isOver
  let backgroundColor = '#f4f3f3'
  if (isActive || hasDropped) {
    backgroundColor = '#92c9eb'
  }

  const style = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    color: #000;
    transition: background-color 0.4s ease;
    background-color : ${backgroundColor};
  `;

  const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, -50%);
    width: 1.5em;
    height: 1.5em;
    border: none;

  `;
  return (
    <div 
    // ref = {drop}
    key={i}
    css = {style}
    >
      {i}
      {hasDropped ? "D" : ""}
      <CloseButton>X</CloseButton>
    </div>
  )
}

export default EmptyGridItem