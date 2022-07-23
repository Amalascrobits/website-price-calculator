import React from 'react'
// import './card.css'
import '../../styles/card.css'
import Context from '../../Context/Context';
import { useContext } from 'react';

const Cardsec = () => {
  const myContext = useContext(Context);

  return (
    <>
     <div className='card-section'>
      <div className='card-body'>
        <div className="card-heading">
        Development Company Type
        </div>

        <div className="cardelement-container">
   
      <div className='card-element-body-1' id='cardone' >
        <div className='card-element-name'>50</div>
        <div className="heading-line-design"></div>
        <div className='card-element-about'> A development company small business is a new type of business that is designed to provide capital to businesses with less than $2 million. </div>
        <div className="card-element-line-design"></div>
        <div className="card-element-price-contaniner">
        <div className='card-element-price'> ${10*(100 * Number(myContext.mark)+10*Number(myContext.pager)+ 5*Number(myContext.slide) + 2*Number(myContext.input)+100 * Number(myContext.ecom) + 10 * Number(myContext.slides)+Number(myContext.sum1)+Number(myContext.sum2)+Number(myContext.sum3)+Number(myContext.sum4)+Number(myContext.sum5)+Number(myContext.sum6)+Number(myContext.sum7)+Number(myContext.sum8)+Number(myContext.sum9)+Number(myContext.dev))}/page </div></div>
      </div>


      <div className='card-element-body-1' >
        <div className='card-element-name'>500</div>
        <div className="heading-line-design"></div>
        <div className='card-element-about'>The SBA defines a small business as one with 50 or fewer employees who have average gross receipts of $5 million or less jjj$5 million or less $5  </div>
        <div className="card-element-line-design"></div>
        <div className="card-element-price-contaniner">
        <div className='card-element-price'> ${50*(100 * Number(myContext.mark)+10*Number(myContext.pager)+ 5*Number(myContext.slide) + 2*Number(myContext.input)+100 * Number(myContext.ecom) + 10 * Number(myContext.slides)+Number(myContext.sum1)+Number(myContext.sum2)+Number(myContext.sum3)+Number(myContext.sum4)+Number(myContext.sum5)+Number(myContext.sum6)+Number(myContext.sum7)+Number(myContext.sum8)+Number(myContext.sum9)+Number(myContext.dev))}/page </div></div>
      </div>
    
      <div className='card-element-body-1'  >
        <div className='card-element-name'>MNC</div>
        <div className="heading-line-design"></div>
        <div className='card-element-about'>  A development company is a business that provides services in the real estate sector. Its a legal entity with its own management and employees. </div>
        <div className="card-element-line-design"></div>
        <div className="card-element-price-contaniner">
        <div className='card-element-price'> ${100*(100 * Number(myContext.mark)+10*Number(myContext.pager)+ 5*Number(myContext.slide) + 2*Number(myContext.input)+100 * Number(myContext.ecom) + 10 * Number(myContext.slides)+Number(myContext.sum1)+Number(myContext.sum2)+Number(myContext.sum3)+Number(myContext.sum4)+Number(myContext.sum5)+Number(myContext.sum6)+Number(myContext.sum7)+Number(myContext.sum8)+Number(myContext.sum9)+Number(myContext.dev))}/page </div></div>
      </div>
    
    
     </div>
     
     {/* <div className="line6"></div>
     <div className="dev-cost">
  <div className="dev-cost-heading">
    Development type cost 
  </div>
  <div className="dev_price">
${Number(myContext.dev)}
  </div>
</div> */}


     </div>
     </div>
     


      </>
  
  )
}

export default Cardsec