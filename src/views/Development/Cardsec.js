import React from 'react'
import './card.css'
import Context from '../../Context/Context';
import { useContext } from 'react';

const Cardsec = () => {
  const myContext = useContext(Context);
//   const [dev,setDev]=React.useState(0);

//  const ChangeCardPrice1=()=>{
//   setDev(10);
//  }
//  const ChangeCardPrice2=()=>{
//   setDev(100);
//  }
//  const ChangeCardPrice3=()=>{
//   setDev(1000);
//  }
    
  return (
    <>
     <div className='card-section'>
      <div className='card-body'>
        <div className="card-heading">
        Development Company Type
        </div>

        <div className="cardelement-container">
    
     <div className='card-element-body-1' onClick={myContext.ChangeCardPrice1}>
        <div className='card-element-name'>50</div>
        <div className="heading-line-design"></div>
        <div className='card-element-about'> A development company small business is a new type of business that is designed to provide capital to businesses with less than $2 million in annual revenue. </div>
        <div className="card-element-line-design"></div>
        <div className="card-element-price-contaniner">
        <div className='card-element-price'> $10/page </div></div>
      </div>


      <div className='card-element-body-1'  onClick={myContext.ChangeCardPrice2}>
        <div className='card-element-name'>500</div>
        <div className="heading-line-design"></div>
        <div className='card-element-about'>The SBA defines a small business as one with 50 or fewer employees who have average gross receipts of $5 million or less during the previous three years. </div>
        <div className="card-element-line-design"></div>
        <div className="card-element-price-contaniner">
        <div className='card-element-price'> $100/page </div></div>
      </div>
    
      <div className='card-element-body-1'  onClick={myContext.ChangeCardPrice3}>
        <div className='card-element-name'>MNC</div>
        <div className="heading-line-design"></div>
        <div className='card-element-about'>  A development company is a business that provides services in the real estate sector. Its a legal entity with its own management and employees. </div>
        <div className="card-element-line-design"></div>
        <div className="card-element-price-contaniner">
        <div className='card-element-price'> $1000/page </div></div>
      </div>
    
    
     </div>
     
     <div className="line6"></div>
     <div className="dev-cost">
  <div className="dev-cost-heading">
    Development type cost 
  </div>
  <div className="dev_price">
${Number(myContext.dev)}
  </div>
</div>


     </div>
     </div>
     


      </>
  
  )
}

export default Cardsec