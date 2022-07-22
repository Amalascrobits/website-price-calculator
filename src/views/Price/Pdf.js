// import React from 'react'
// import jsPDF from 'jspdf';
// import Context from '../../Context/Context';
// import { useContext } from 'react';


// const Pdf = () => {
//     const myContext = useContext(Context);

//     const pdfgenerate=()=>{
//     const doc = new jsPDF();
//     doc.text(9,9,"Website Cost Calculator")
//     doc.text(6,6,`Web Design : ${myContext.mark}`);
// doc.save('scro.pdf');

//     }
//   return (
//  <>
//  <button onClick={pdfgenerate}>Download Pdf</button>
//  </>
//   )
// }

// export default Pdf