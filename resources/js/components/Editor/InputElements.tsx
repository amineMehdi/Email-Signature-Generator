import React from 'react'
import { useDrag } from 'react-dnd'

function InputElements() {
  const [{isDragging}, drag] = useDrag({
    type: 'Box',
    item: { name: "Input Elements" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
    },
    collect : (monitor) => ({
      isDragging : monitor.isDragging(),
      handlerId : monitor.getHandlerId(),
    })
  });
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} data-testid={`box`} style={{ opacity}}>
      M
      {isDragging ? "A" : "B"}
    </div>
  )
}

export default InputElements