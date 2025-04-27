import React from 'react'

const Tooltip = ({text,children}) => {
  return (
    <div className='container'>
      <div className='tooltiptext'>{text}</div>
      <h1 className='tooltip'>{children}</h1>
    </div>
  )
}

export default Tooltip;