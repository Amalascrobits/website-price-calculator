import React from 'react'
import Context from '../../Context/Context';
import { useContext } from 'react';
import axios from "axios";
const Convprice = (props) => {

const myContext = useContext(Context);

const [cur,setCur]=React.useState();
const [curselect,setCurselect]=React.useState('USD');

 const CurrencyAPi=[
   {"INR":79.8},
   {"Yarn":6.76},
   {"EUR":0.98},
   {"AUD":1.44},
   {"AED":3.67}
   
 ]

const CurrencyValue=(e)=>{
if((e.target.value)==="INR"){
    setCur(79.8*parseFloat(Number(props.value)));
}
else if((e.target.value)==="Yarn"){
    setCur(6.76*parseFloat(Number(props.value)));
}
else if((e.target.value)==="EUR"){
    setCur(0.98*parseFloat(Number(props.value)));
}
else if((e.target.value)==="AUD"){
    setCur(6.76*parseFloat(Number(props.value)));
}
else if((e.target.value)==="AED"){
    setCur(6.76*parseFloat(Number(props.value)));
}

setCurselect(e.target.value)
}






    const currencyConvertor_inr=()=>{
        console.log(props.value);
        setCur(79.8*parseFloat(Number(props.value)));
    }
    const currencyConvertor_eur=()=>{
        console.log(props.value);
        setCur(7.8*parseFloat(Number(props.value)));
    }

    
        return (
            <>
            <div>the price is:{myContext.a}</div>
           <button onClick={currencyConvertor_inr}>INR</button>
           <br />
           <button onClick={currencyConvertor_eur}>EUr</button>
           <div>After conversion : {cur}</div> 

       <select onChange={CurrencyValue} >
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
        <option value="Yarn">Yarn</option>
        <option value="AUD">AUD</option>
        <option value="AED">AED</option>
        <option value="USD">USD</option>
       </select>

    

    
    <div>After selection : {curselect}</div> 

        </>
        )
            }



export default Convprice