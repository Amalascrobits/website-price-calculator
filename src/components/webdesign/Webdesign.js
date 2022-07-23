import React from 'react'
import { Slider } from '@mui/material'
// import './style.css';
import '../../styles/style.css'
import Context from '../../Context/Context';
import { useContext } from 'react';

const Webdesign = () => {
  
const myContext = useContext(Context);

  return (
    <>
      <div className='web-design-section'>
        <div className="web-design-body">
          <div className='web-design-heading'>Website Design</div>
          <div className="web-design-slider-heading">
            Sele‍‍‍ct a style
          </div>

          <div className="web-design-slider" >
            <div className="range-left">SIMPLE DESIGN</div>
            <div className="range-right">COMPLEX DESIGN</div>

<div className="webdesign-slider">
            <Slider step={20}
              color="primary"
              onChange={myContext.SliderChange}
              min={10}
              max={90}
              marks={myContext.marks}
              sx={{

                height: 10,
                color: 'primary',
                '& .MuiSlider-thumb': {
                  borderRadius: '1px',
                },

              }} /></div>
          </div>
          <div className="line"></div>

          <div className="number-of-pages-section">
            <div className="number-of-pages-heading">Number Of Pages</div>
            <div className="num-page-slider">
              <Slider
                marks={myContext.page}
                // valueLabelDisplay='auto'
                max={105} size="large"
                step={25}
                min={5}
                onChange={myContext.pageNumber}

                sx={{
                  height: 12,
                  color: 'primary',
                  '& .MuiSlider-thumb': {
                    borderRadius: '1px',
                  },

                }}

              />
<div className="web-design-label-num">
  <div id="lb1">1-10</div>
  <div id="lb2">10-20</div>
  <div id="lb3">20-30</div>
  <div id="lb4">30-50</div>
  <div id="lb5">50-100</div>
</div>

            </div>
          </div>

          <div className="line2"></div>
          
          <div className="design-cost">
            <div className="design-cost-heading">
              Design cost :
            </div>
            <div className="price-d">
              ${100 * Number(myContext.mark)+10*Number(myContext.pager)}
            </div>
          </div>
          {console.log(Number(myContext.mark))}




        </div>
      </div>

    </>
  )
}

export default Webdesign