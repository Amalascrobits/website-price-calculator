import React from 'react';
import { Slider } from '@mui/material';
import {TextField} from '@mui/material';


import './webcontent.css'

const WebContent=()=> {
    const [slide, setSlide] = React.useState(0);
const[input,setInput]=React.useState(0);

    const SliderChange = (event) => {
        setSlide(event.target.value);
      }
      const ChangeInput=(event)=>{
        setInput(event.target.value);
      }

 
  const mark=[
    {
      value:0,
   
    },
    {
      value:50,
      
    },
    {
      value:100,
      
    },
    {
      value:150,
      
    }
  ]
  
  return (
    <div className="Webcontent-section">
        <div className="webcontent-body">
            
    <div className='webcontent-heading'> Website Content </div>
<div className="content-writing">
    <div className="content-title">
        Content Writing : 
    </div>
    <div className="content-input">
    <TextField className='textfield'  id="outlined-basic"  variant="outlined"  color='secondary' placeholder='Enter number of pages ' onChange={ChangeInput}
    
    sx={{ input: { color: '#00112c' } }}
    
    />
    </div>
<div className="content-ending">
at  200 Rs./page avg.
</div>

</div>

 
    <div className="logo-part">
  <div className="logo">
    Logo Design
  </div>
  
  <div style={{width:300, margin:40}} >
    <Slider 
onChange={SliderChange}
      color="primary"
      defaultValue={0}
      step={50}
      max={150}
      marks={mark}
      sx={{
width:780,
        height: 10,
        color: 'primary',
        '& .MuiSlider-thumb': {
          borderRadius: '1px',
        }

      }}
    />
    
<div className="web-content-label">
  <div id="lb1">No Need</div>
  <div id="lb2">Basic</div>
  <div id="lb3">Moderate</div>
  <div id="lb4">High End</div>
  {/* <div id="lb5">50-100</div> */}
</div>

  </div>
     </div>

     <div className="line2"></div>

<div className="design-cost">
  <div className="design-cost-heading">
    Content cost 
  </div>
  <div className="price">
  ${(5 * Number(slide) )+ (200* Number(input))}
  </div>
</div>

      </div>
    </div>
  );
}

export default WebContent;