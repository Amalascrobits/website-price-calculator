import React from 'react';
import { Slider } from '@mui/material';
import {TextField} from '@mui/material';
// import './webcontent.css'
import '../../styles/webcontent.css'
import Context from '../../Context/Context';
import { useContext } from 'react';

// import './webcontent.css'

const WebContent=()=> {
    const myContext = useContext(Context);
  
  return (
    <div className="Webcontent-section">
        <div className="webcontent-body">
            
    <div className='webcontent-heading'> Website Content </div>
<div className="content-writing">
    <div className="content-title">
        Content Writing : 
    </div>
    <div className="content-input">
    <TextField className='textfield'   id="standard-basic"  variant="standard"  color='primary' label='Enter number of pages ' 
    onChange={myContext.ChangeInput}
    sx={{ input: { color: '#fff' } ,label:{color:'#A8A8A8',fontSize:'15px'}}}
    
    />
    </div>
<div className="content-ending">
at  2$/page avg.
</div>

</div>

 
    <div className="logo-part">
  <div className="logo">
    Logo Design
  </div>
  
  <div style={{width:300, margin:40}} >
    <Slider 
onChange={myContext.SliderChangee}
      color="primary"
      defaultValue={0}
      step={50}
      max={150}
      marks={myContext.markd}
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
    Content cost :
  </div>
  <div className="price">
  ${(5 * Number(myContext.slide) )+ (2* Number(myContext.input))}
  </div>
</div>

      </div>
    </div>
  );
}

export default WebContent;