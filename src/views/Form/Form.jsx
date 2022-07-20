import React from "react";
import './form.css'
import { TextField }from '@mui/material'
// import { Alert }from '@mui/material'
import img from "./images/img.png"

const Form = () => {
  const onSubmits = (event) => {
    event.preventDefault();
  alert("successfully submitted")
  };

  return (
    <>
      <div className="form-section">
        <div className="form-body">
      <h1> For detailed cost/budget, submit following details-</h1>
      <div className="form-img">
        <img src={img} alt="k" />
      </div>
      <form onSubmit={onSubmits}>
      <div className="form-content">
     <div className="txt1">
      <TextField id="filled-basic" label="Firstname" variant="filled" className="form-input"  required
        sx={{width:240, color: 'secondary' ,input: { color: '#fff' } , label:{color:'#fff'}}}/></div>
 

        <div className="txt2">
      <TextField id="filled-basic" label="Lastname" variant="filled" className="form-input"  required
        sx={{ width:240,color: 'secondary' ,input: { color: '#fff' } , label:{color:'#fff'}}}/></div>

<div className="txt3">
      <TextField id="filled-basic" label="Email" variant="filled" className="form-input" 
        required sx={{ width:512,color: 'secondary',input: { color: '#fff' }  , label:{color:'#fff'}}}/></div>

       
<div className="txt4">
      <TextField id="filled-basic" label="Phone Number" variant="filled" className="form-input"  required
        sx={{ width:240,color: 'secondary' ,input: { color: '#fff' } , label:{color:'#fff'}}}/></div>

        <div className="txt5">
      <TextField id="filled-basic" label="Whatsapp Number" variant="filled" className="form-input"  required
        sx={{ width:240,color: 'secondary'  ,input: { color: '#fff' }, label:{color:'#fff'}}}/></div>
   
   <button className="form-btn">
     Submit
    </button>

      </div>
      </form></div>
      </div>
    </>
  );
} ;
export default Form;