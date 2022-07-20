import React from 'react'
import Cardelement from './component/Cardelement'
import './card.css'


const Card = () => {
  return (
    <>

      {/* <div>Card</div> */}
      
     <div className='card-section'>
      <div className='card-body'>
        <div className="card-heading">
        Development Company Type
        </div>
        <div className="cardelement-container">
     <Cardelement /></div>
     {/* <div className='card-element-body-2'>card content</div> */}
     </div>
     </div>
 
      </>
  
  )
}

export default Card