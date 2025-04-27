import React, { useState } from 'react'

const Tooltip = ({text,children}) => {

   const [show,setShow] = useState(false);

   function handleMouseEnter(){
    setShow(true);
   }

   function handleMouseLeave(){
    setShow(false);
   }

  return (
    <div className='container'>
      <h1 className='tooltip' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{children}</h1>
      {show && <div className='tooltiptext'>{text}</div>} 
    </div>
  )
}

export default Tooltip;