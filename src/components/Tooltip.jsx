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
      <h2 className='tooltip' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{children}</h2>
      {show && <p className='tooltip'><div className='tooltiptext'>{text}</div></p>} 
    </div>
  )
}

export default Tooltip;