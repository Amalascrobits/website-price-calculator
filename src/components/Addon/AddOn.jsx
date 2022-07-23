import React from 'react'
import '../../styles/addon.css'
import { Slider } from '@mui/material'
import Context from '../../Context/Context';
import { useContext } from 'react';


function AddOn() {
    const myContext = useContext(Context);

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
                      onChange={myContext.toggleChange1}
                      // aria-label="Custom marks"
                      step={250}
                      max={250}
                      // valueLabelDisplay="auto"
                      marks={myContext.tfiRate}
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
                      onChange={myContext.toggleChange2}
                      // aria-label="Custom marks"
                      step={2000}
                      max={2000}
                      // valueLabelDisplay="auto"
                      marks={myContext.twoRate}
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
           onChange={myContext.toggleChange3}
  // aria-label="Custom marks"
  step={250}
  max={250}
  // valueLabelDisplay="auto"
  marks={myContext.tfiRate}
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
           onChange={myContext.toggleChange4}
  // aria-label="Custom marks"
  step={100}
  max={100}
  // valueLabelDisplay="auto"
  marks={myContext.hunRate}
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
           onChange={myContext.toggleChange5}
  // aria-label="Custom marks"
  step={250}
  max={250}
  // valueLabelDisplay="auto"
  marks={myContext.tfiRate}
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
           onChange={myContext.toggleChange6}
  // aria-label="Custom marks"
  step={100}
  max={100}
  // valueLabelDisplay="auto"
  marks={myContext.hunRate}
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
           onChange={myContext.toggleChange7}
  // aria-label="Custom marks"
  step={250}
  max={250}
  // valueLabelDisplay="auto"
  marks={myContext.tfiRate}
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
           onChange={myContext.toggleChange8}
  // aria-label="Custom marks"
  step={500}
  max={500}
  // valueLabelDisplay="auto"
  marks={myContext.fivRate}
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
           onChange={myContext.toggleChange9}
  // aria-label="Custom marks"
  step={1500}
  max={1500}
  // valueLabelDisplay="auto"
  marks={myContext.fifRate}
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
          <div className="addon-costt-heading" >Add-ons cost : </div>
          <div className='addon-pricee'>${((Number(myContext.sum1)+Number(myContext.sum2)+Number(myContext.sum3)+Number(myContext.sum4)+Number(myContext.sum5)+Number(myContext.sum6)+Number(myContext.sum7)+Number(myContext.sum8)+Number(myContext.sum9)))}</div>



        </div>


      </div>
    </div>
  )
}

export default AddOn