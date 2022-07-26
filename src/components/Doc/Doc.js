import React, { useRef } from "react";
import '../../styles/doc.css'
import ReactToPrint from "react-to-print";
import Context from '../../Context/Context';
import DocEnd from './DocEnd'


const PrintComponent=()=>{

let componentRef = useRef();


  return (
    
    <>
      <div>

        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef}
        />

        {/* component to be printed */}
        <div   style={{ display: "none" }}>
      
     <ComponentToPrint ref={(el) => (componentRef = el)} />
  </div></div>
    </>
  );
}


class ComponentToPrint extends React.Component {

    static contextType = Context;
    
    render() {
   
      return (
        <div className="doc-section">
       <div className="doc-heading">
Scrobits Technologies
       </div>
<div className="personal-info">
    Name: {this.context.fname +' '+ this.context.lname}
    <br />
    Email:{this.context.cemail}
    <br />
    Contact:{this.context.phone}
    <br />
</div>
<div className="doc-text">
We have been in this industry for more than 3 years, we are professional and experienced supplier of the high quality software development. Also, we provide great service to our customers, so you can customize your own website with your own logo or design . We offer competitive price and good quality for all kinds of software development according to different styles and specifications .</div>
       <div className="doc-field">
<table className="table-doc">
  <thead>
        <tr>
          <th>S.No</th>
          <th>Features</th>
          <th>Price</th>
        </tr></thead>
        <tbody>
        <tr>
          <td className="doc-td">1.</td>
          <td className="doc-td">Web Design cost</td>
          <td className="doc-td">{`${(100 * Number(this.context.mark))+(10*Number(this.context.pager))}`}</td>
        </tr>
        <tr>
          <td className="doc-td">2.</td>
          <td className="doc-td"> Ecommerce cost</td>
          <td className="doc-td">{`${(100 *Number(this.context.ecom))+ (10 * Number(this.context.slides))}`}</td>
        </tr>
        <tr>
          <td className="doc-td">3.</td>
          <td className="doc-td">Web content cost</td>
          <td className="doc-td">{(5 * Number(this.context.slide) )+ (2* Number(this.context.input))}</td></tr>
<tr>
          <td className="doc-td">4.</td>
          <td className="doc-td"> Website Addon </td>
          <td className="doc-td">{((Number(this.context.sum1)+Number(this.context.sum2)+Number(this.context.sum3)+Number(this.context.sum4)+Number(this.context.sum5)+Number(this.context.sum6)+Number(this.context.sum7)+Number(this.context.sum8)+Number(this.context.sum9)))}</td></tr>

          </tbody>
      </table>

      <div className="devl-body">
<div className="1">
50 Price:{10*((100 * Number(this.context.mark))+(10*Number(this.context.pager))+(5 * Number(this.context.slide) )+ (2* Number(this.context.input))+(100 * Number(this.context.ecom)) +( 10 * Number(this.context.slides))+((Number(this.context.sum1)+Number(this.context.sum2)+Number(this.context.sum3)+Number(this.context.sum4)+Number(this.context.sum5)+Number(this.context.sum6)+Number(this.context.sum7)+Number(this.context.sum8)+Number(this.context.sum9))))}/page
</div>
<div className="2">
100 Price: {50*((100 * Number(this.context.mark))+(10*Number(this.context.pager))+(5 * Number(this.context.slide) )+ (2* Number(this.context.input))+(100 * Number(this.context.ecom)) +( 10 * Number(this.context.slides))+((Number(this.context.sum1)+Number(this.context.sum2)+Number(this.context.sum3)+Number(this.context.sum4)+Number(this.context.sum5)+Number(this.context.sum6)+Number(this.context.sum7)+Number(this.context.sum8)+Number(this.context.sum9))))}/page
</div>
<div className="3">
MNC price: {100*((100 * Number(this.context.mark))+(10*Number(this.context.pager))+(5 * Number(this.context.slide) )+ (2* Number(this.context.input))+(100 * Number(this.context.ecom)) +( 10 * Number(this.context.slides))+((Number(this.context.sum1)+Number(this.context.sum2)+Number(this.context.sum3)+Number(this.context.sum4)+Number(this.context.sum5)+Number(this.context.sum6)+Number(this.context.sum7)+Number(this.context.sum8)+Number(this.context.sum9))))}/page
</div>
</div>

<DocEnd />


       </div>
        </div>
      );
    }
  }
  export default PrintComponent
  