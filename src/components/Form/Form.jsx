import React from "react";
import '../../styles/form.css'
import { TextField } from '@mui/material'
import { Checkbox } from '@mui/material';
import img from "./images/img.png"
import Context from '../../Context/Context';
import { useContext } from 'react';
import emailjs from 'emailjs-com';
import Doc from '../Doc/Doc'
const Form = () => {
  const myContext = useContext(Context);



  return (
    <>
      <div className="form-section">
        <div className="form-body">
          <h1> For detailed cost/budget, submit following details-</h1>
          <div className="form-img">
            <img src={img} alt="k" />
          </div>
          {/* onSubmit={onSubmits} */}
          <form  >
            <div className="form-content">
              <div className="txt1">
                <TextField id="filled-basic" onChange={myContext.firstname} label="Firstname" variant="filled" className="form-input" required
                  sx={{ width: 240, color: 'secondary', input: { color: '#fff' }, label: { color: '#fff' } }} /></div>


              <div className="txt2">
                <TextField id="filled-basic" onChange={myContext.lastname} label="Lastname" variant="filled" className="form-input" required
                  sx={{ width: 240, color: 'secondary', input: { color: '#fff' }, label: { color: '#fff' } }} /></div>

              <div className="txt3">
                <TextField id="filled-basic" onChange={myContext.clientEmail} label="Email" variant="filled" className="form-input"
                  required sx={{ width: 512, color: 'secondary', input: { color: '#fff' }, label: { color: '#fff' } }} /></div>
          
              <div className="txt4">
                <TextField id="filled-basic" onChange={myContext.clientPhone} label="Phone Number" variant="filled" className="form-input" required
                  sx={{ width: 240, color: 'secondary', input: { color: '#fff' }, label: { color: '#fff' } }} /></div>

              <div className="txt5">
      
      
                <TextField id="filled-basic" onChange={myContext.Mob} label="Whatsapp Number" variant="filled" className="form-input" required
                 value={myContext.mob} sx={{ width: 240, color: 'secondary', input: { color: '#fff' }, label: { color: '#fff' } }} />
          {console.log(myContext.mob)}         
                 </div>
                 <div className="sameasphone">
                  <Checkbox
  checked={myContext.accept}
  onChange={myContext.handleChange}
  inputProps={{ 'aria-label': 'controlled' }}
  sx={{
    color: "white",
    
     
   }}
/>      Same as Phone number 
                
         </div>
              <button className="form-btn">
              <Doc /> 
              </button>
          
            </div>
          </form>
          <div>
          </div>
        </div>
  
      </div>
    </>
  );
};
export default Form;