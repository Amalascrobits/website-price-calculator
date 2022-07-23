import React from 'react';
import { useContext } from 'react';
import Context from './Context/Context';
import AddOn from './views/Addon/AddOn';
import Webdesign from './views/webdesign/Webdesign';
import WebContent from './views/Webcontent/WebContent';
import Ecommerce from './views/Ecommerce/Ecommerce';
import Price from './views/Price/Price'
import Cardsec from './views/Development/Cardsec';
import Pdf from './views/Price/Pdf';
import { jsPDF } from "jspdf";

function App() {
  const [mark, setMark] = React.useState(10);
  const [pager, setPager] = React.useState(5);
  const [slide, setSlide] = React.useState(0);
  const[input,setInput]=React.useState(0);
  const [ecom, setEcom] = React.useState(0);
  const [slides, setSlides] = React.useState(0);
  const [dev,setDev]=React.useState(0);

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


  const eSliderChange = (event) => {
    setSlides(event.target.value);
  }
  const ProductChange = (event) => {
    setEcom(event.target.value);
    console.log(event.target.value);
  }

  const product = [
    {
      value: 0,
    },
    {
      value: 25,
    },
    { value: 50 },
    { value: 75 }
  ]

  const emark = [
    {
      value: 0,

    },
    {
      value: 50,

    },
    {
      value: 100,

    },
    {
      value: 150,

    }
  ]

  const SliderChange = (event) => {

    setMark(event.target.value);
  }
  const pageNumber = (event) => {
    setPager(event.target.value);
  }
/////



    const SliderChangee = (event) => {
        setSlide(event.target.value);
      }
      const ChangeInput=(event)=>{
        setInput(event.target.value);
      }

 ///////
  const markd=[
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
  const marks = [
    {
      value: 10,
    },
    // {
    //   value: 20
    // },
    {
      value: 30
    },
    {
      value: 50
    },
    {
      value: 70
    },
    {
      value: 90,

    }
  ]
  const page = [
    {
      value: 5
    }
    , { value: 30 }
    , { value: 55 }
    , { value: 80  }
    , { value: 105 }
  ]

 

 const ChangeCardPrice1=()=>{
  setDev(10);
 }
 const ChangeCardPrice2=()=>{
  setDev(100);
 }
 const ChangeCardPrice3=()=>{
  setDev(1000);
 }



const userSettings = {
  //webdesign part
 mark: mark,
 pager: pager,

 //webcontent slider
 slide:slide,
 input:input,

//eccomerce part
 ecom:ecom,
 slides:slides,

//addon part
 sum1:sum1,
 sum2:sum2,
 sum3:sum3,
 sum4:sum4,
 sum5:sum5,
 sum6:sum6,
 sum7:sum7,
 sum8:sum8,
 sum9:sum9,

 //dev
 dev:dev,


 toggleChange1,
 toggleChange2,
 toggleChange3,
 toggleChange4,
 toggleChange5,
 toggleChange6,
 toggleChange7,
 toggleChange8,
 toggleChange9,

 //dev
 ChangeCardPrice3,
 ChangeCardPrice1,
 ChangeCardPrice2,



//ecom
 eSliderChange,
 ProductChange,

 //webdesign part
    SliderChange,
    pageNumber,

 //webcontent   
    SliderChangee,
    ChangeInput,
//addon
updateSum1,
updateSum2,
updateSum3,
updateSum4,
updateSum5,
updateSum6,
updateSum7,
updateSum8,
updateSum9,

tfiRate,
twoRate,
fifRate,
hunRate,
fivRate,

    setMark,
    setPager,
    marks,
    page,
    setSlide,
    setInput,
    setEcom,
    setSlides,
    setDev,
    markd,
    product,
    emark,

 
  };
  const myContext = useContext(Context);
  return (
   <>
   <Context.Provider value={userSettings}>
    <Webdesign/>
    <WebContent />
    <Ecommerce />
    <AddOn />
    <Cardsec />
    {/* <Price /> */}
    {/* <Pdf /> */}
    
   </Context.Provider>
   </>
  );
}

export default App;
