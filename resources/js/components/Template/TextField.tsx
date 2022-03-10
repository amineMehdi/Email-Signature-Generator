import React from 'react'

type TextFieldProps = {
  icon: string,
  children : React.ReactNode
}
function TextField({children, icon}: TextFieldProps) {
  return (
    <div>
    <span>
      {icon}
    </span>
    {children}
    </div>
    
  )
}

export default TextField