import React from 'react'
import Context from '../../Context/Context';
import { useContext } from 'react';
import './price.css'
const Price = () => {
    const myContext = useContext(Context);
  return (
    <>
    <div className="pp-section">
      <div className="pp-body">
    <div className="pp-heading">
Estimated Amount:

    </div>
    <div className="pp-price">
    ${100 * Number(myContext.mark)+10*Number(myContext.pager)+ 5*Number(myContext.slide) + 200*Number(myContext.input)+100 * Number(myContext.ecom) + 10 * Number(myContext.slides)+Number(myContext.sum1)+Number(myContext.sum2)+Number(myContext.sum3)+Number(myContext.sum4)+Number(myContext.sum5)+Number(myContext.sum6)+Number(myContext.sum7)+Number(myContext.sum8)+Number(myContext.sum9)+Number(myContext.dev)}
      </div>
    
      </div>
    </div>
  
    </>
  )
}

export default Price