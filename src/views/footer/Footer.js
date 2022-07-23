import React from 'react'
import './footer.css'
import whatsapp from "./assests/wpp.svg"
import calendly from "./assests/calendly.svg"

const Footer = () => {
  return (
    <div className="footer">
      <div className="address">
  Scrobits Technologies
Bandal Dhankude Plaza
Kothrud Pune-411038
India.</div>

<div className="get">
Get in touch
Our door is always open for a good cup of coffee.

Call: (+91) 9607020806/ 8698277844

Mail: contact@scrobits.com
</div>


      <div className="contactt">
      <div className="wp-imgg">
       <button id='#btn-wtt'><a href="https://wa.me/919607020806?text=I'm%20interested%20in%20your%20car%20for%20sale" target='blank'> <img src={whatsapp} alt="" /></a></button></div>
<div className="meet-imgg">
        <button id='#btn-cl1'><a href="https://calendly.com/scrobits/connect_with_arpit?month=2022-07" target='blank'> <img src={calendly} alt="" /></a></button></div>
  
</div>
        <div className="footer-content">© 2021 ScroBits Technologies All rights reserved</div>
</div>
  )
}

export default Footer