import React from 'react'
import './addon.css'
import { Slider } from '@mui/material'



function AddOn() {
  const [sum1, updateSum1] = React.useState(0);
  const [sum2, updateSum2] = React.useState(0);
  const [sum3, updateSum3] = React.useState(0);
  const [sum4, updateSum4] = React.useState(0);
  const [sum5, updateSum5] = React.useState(0);
  const [sum6, updateSum6] = React.useState(0);
  const [sum7, updateSum7] = React.useState(0);
  const [sum8, updateSum8] = React.useState(0);
  const [sum9, updateSum9] = React.useState(0);


 

  const toggleChange1 = (event) => {
    console.log(100);
    updateSum1(event.target.value);

  }
  const toggleChange2 = (event) => {
    console.log(100);
    updateSum2(event.target.value);

  }
  const toggleChange3 = (event) => {
    console.log(100);
    updateSum3(event.target.value);

  }
  const toggleChange4 = (event) => {
    console.log(100);
    updateSum4(event.target.value);

  }
  const toggleChange5 = (event) => {
    console.log(100);
    updateSum5(event.target.value);

  }
  const toggleChange6 = (event) => {
    console.log(100);
    updateSum6(event.target.value);

  }
  const toggleChange7 = (event) => {
    console.log(100);
    updateSum7(event.target.value);

  }
  const toggleChange8 = (event) => {
    console.log(100);
    updateSum8(event.target.value);

  }
  const toggleChange9 = (event) => {
    console.log(100);
    updateSum9(event.target.value);

  }



  const tfiRate = [
    { value: 0 },
    { value: 250 }
  ]
  const twoRate=[
    { value: 0 },
    { value: 2000 }
  ]
  const fifRate=[
    { value: 0 },
    { value: 1500 }
  ]
  const hunRate=[
    { value: 0 },
    { value: 100 }
  ]
  const fivRate=[
    { value: 0 },
    { value: 500 }
  ]
  

  return (
    <div className='addon-head'>
      <div className='addon'>

        <h1>Website add-ons</h1>
        <div className="addon-table">
          <table style={{ width: 100 + '%' }} height="250" >
            <tbody>
              <tr>
                <td>
                  <div className="addon-head1">
                    <span className="toggle-witch-text-left">Forms/Lead generation</span>
                  </div>
                </td>
                <td>

                  <label className="addon-switch">
                    <button className='on' ><Slider
                      onChange={toggleChange1}
                      // aria-label="Custom marks"
                      step={250}
                      max={250}
                      // valueLabelDisplay="auto"
                      marks={tfiRate}
                      sx={{ height: 16 }}
                    /></button>
                    {/* <button className='off btn-hidden'  onClick={() =>ChangeButtonfalse(2 ,250) }>❌</button> */}
                  </label>

                </td>


                <td>

                  <span className="toggle-witch-text-left">Member login/Profiles</span>
                </td>
                <td>
                  <label className="addon-switch">
                    <button className='on' ><Slider
                      onChange={toggleChange2}
                      // aria-label="Custom marks"
                      step={2000}
                      max={2000}
                      // valueLabelDisplay="auto"
                      marks={twoRate}
                      sx={{ height: 16 }}
                    /></button>
                    {/* <button  className='off btn-hidden'  onClick={() =>ChangeButtonfalse(4,2000)}  >❌</button> */}

                  </label>

                </td>

              </tr>

              <tr>
                <td>
                  <div className="addon-head1">
                    <span className="toggle-witch-text-left">Image/video galleries</span>
                  </div>
                </td>
                <td>

                  <label className="addon-switch">
                    {/* <input type="checkbox" onClick={ChangeButton}/>
          <span className="slider round"></span> */}

<button  className='on' ><Slider
           onChange={toggleChange3}
  // aria-label="Custom marks"
  step={250}
  max={250}
  // valueLabelDisplay="auto"
  marks={tfiRate}
  sx={{height:16}}
/></button>
                    {/* <button className='off btn-hidden' onClick={() => ChangeButtonfalse(6, 250)}>❌</button> */}

                  </label>

                </td>


                <td>

                  <span className="toggle-witch-text-left">Analytics & tracking</span>
                </td>
                <td>
                  <label className="addon-switch">

                    {/* <input type="checkbox" />
          <span className="slider round"></span> */}

<button  className='on' ><Slider
           onChange={toggleChange4}
  // aria-label="Custom marks"
  step={100}
  max={100}
  // valueLabelDisplay="auto"
  marks={hunRate}
  sx={{height:16}}
/></button>
                    {/* <button className='off btn-hidden' onClick={() => ChangeButtonfalse(8, 100)}>❌</button> */}

                  </label>

                </td>

              </tr>

              <tr>
                <td>
                  <div className="addon-head1">
                    <span className="toggle-witch-text-left">Event Scheduling/Reservation</span>
                  </div>
                </td>
                <td>

                  <label className="addon-switch">
                    {/* <input type="checkbox" />
          <span className="slider round"></span> */}


<button  className='on' ><Slider
           onChange={toggleChange5}
  // aria-label="Custom marks"
  step={250}
  max={250}
  // valueLabelDisplay="auto"
  marks={tfiRate}
  sx={{height:16}}
/></button>
                    {/* <button className='off btn-hidden' onClick={() => ChangeButtonfalse(10, 250)}>❌</button> */}
                  </label>

                </td>


                <td>

                  <span className="toggle-witch-text-left">Live chat</span>
                </td>
                <td>
                  <label className="addon-switch">
                    {/* <input type="checkbox" />
          <span className="slider round"></span> */}

<button  className='on' ><Slider
           onChange={toggleChange6}
  // aria-label="Custom marks"
  step={100}
  max={100}
  // valueLabelDisplay="auto"
  marks={hunRate}
  sx={{height:16}}
/></button>
                    {/* <button className='off btn-hidden' onClick={() => ChangeButtonfalse(12, 100)}>❌</button> */}
                  </label>

                </td>

              </tr>

              <tr>
                <td>
                  <div className="addon-head1">
                    <span className="toggle-witch-text-left">Social Media(share/like/reviews)</span>
                  </div>
                </td>
                <td>

                  <label className="switch">
                    {/* <input type="checkbox" />
          <span className="slider round"></span> */}
       <button  className='on' ><Slider
           onChange={toggleChange7}
  // aria-label="Custom marks"
  step={250}
  max={250}
  // valueLabelDisplay="auto"
  marks={tfiRate}
  sx={{height:16}}
/></button>
                    {/* <button className='off btn-hidden' onClick={() => ChangeButtonfalse(14, 250)}>❌</button> */}
                  </label>

                </td>


                <td>

                  <span className="toggle-witch-text-left">Blog</span>
                </td>
                <td>
                  <label className="addon-switch">
                    {/* <input type="checkbox" />
          <span className="slider round"></span> */}
     <button  className='on' ><Slider
           onChange={toggleChange8}
  // aria-label="Custom marks"
  step={500}
  max={500}
  // valueLabelDisplay="auto"
  marks={fivRate}
  sx={{height:16}}
/></button>
                    {/* <button className='off btn-hidden' onClick={() => ChangeButtonfalse(16, 500)}>❌</button> */}
                  </label>

                </td>

              </tr>

              <tr>
                <td>
                  <div className="addon-head1">
                    <span className="toggle-witch-text-left">Onsite search</span>
                  </div>
                </td>
                <td>

                  <label className="addon-switch">
                    {/* <input type="checkbox" />
          <span className="slider round"></span> */}
 <button  className='on' ><Slider
           onChange={toggleChange9}
  // aria-label="Custom marks"
  step={1500}
  max={1500}
  // valueLabelDisplay="auto"
  marks={fifRate}
  sx={{height:16}}
/></button>
                    {/* <button className='off btn-hidden' onClick={() => ChangeButtonfalse(18, 2000)}>❌</button> */}
                  </label>

                </td>
              </tr>

            </tbody>

          </table></div>
        <div className="line4"></div>
        <div className="footerr">
          <div className="addon-costt-heading" >Add-ons cost: </div>
          <div className='addon-pricee'>${((Number(sum1)+Number(sum2)+Number(sum3)+Number(sum4)+Number(sum5)+Number(sum6)+Number(sum7)+Number(sum8)+Number(sum9)))}</div>



        </div>


      </div>
    </div>
  )
}

export default AddOn