import React from 'react'
import { Slider } from '@mui/material'
// import './ecom.css'
import '../../styles/ecom.css'
import Context from '../../Context/Context';
import { useContext } from 'react';

const Ecommerce = () => {
    const myContext = useContext(Context);

  return (
    <>
      <div className="ecom-section">
        <div className="ecom-body">
          <div className="ecom-heading">
            Ecommerce
          </div>

          <div className="ecom-fun-part">
            <div className="ecom-fun-part-heading">
              Ecommerce Functionality
            </div>

            <div className="ecom-fun-label">
              <div id="lb1">None</div>
              <div id="lb2">Basic</div>
              <div id="lb3">Advanced</div>
              <div id="lb4">Enterprise</div>
            
            

          
<div className='fun-slider'>
              <Slider
                onChange={myContext.eSliderChange}
                color="primary"
                defaultValue={0}
                step={50}
                max={150}
                marks={myContext.emark}
                sx={{
                  width: 780,
                  height: 10,
                  color: 'primary',
                  '& .MuiSlider-thumb': {
                    borderRadius: '1px',
                  }

                }} /></div></div>


          </div>

          {/* product section  */}
          <div className="ecom-prod-part">
            <div className="ecom-slider-label">
              <span className="ecom-label-class" >No need</span>
              <span className="ecom-label-class" id='ecom-label-2'>1-10</span>
              <span className="ecom-label-class" id='ecom-label-3'>11-100</span>
              <span className="ecom-label-class" id='ecom-label-4'>100+</span>
            </div>

            <div className="ecom-product-heading">Number Of Products</div>
            <div className="ecom-slider">
              <Slider
                marks={myContext.product}
                // valueLabelDisplay='auto'
                max={75} size="large"
                step={25}
                min={0}
                onChange={myContext.ProductChange}

                sx={{
                  width: 500,
                  height: 12,
                  color: 'primary',
                  '& .MuiSlider-thumb': {
                    borderRadius: '1px',
                  },

                }}

              />
            </div>
          </div>
          {/* product section  */}
          <div className="line3"></div>
          <div className="ecom-cost">
            <div className="ecom-costt-heading">
              E-commerce cost :
            </div>
            <div className="ecom-pricee">
              ${(100 * Number(myContext.ecom)) + (10 * Number(myContext.slides))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ecommerce