import React from 'react'
// import './footer.css'
import '../../styles/footer.css'
import whatsapp from "./assests/wpp.svg"
import calendly from "./assests/calendly.svg"
import fb from './assests/fb.svg'
import tw from './assests/tw.svg'
import ln from './assests/ln.svg'
import ig from './assests/ig.svg'
import logo from './assests/logo.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="address">
<div className="scro-logo">
  <img src={logo} alt="" />
</div>
<div className="scro-content">
Bandal Dhankude Plaza
Kothrud <br/>Pune-411038
India.</div></div>

<div className="get">
Get in touch
Our door is always open for a good cup of coffee.
<br />

Call: (+91) 9607020806/ 8698277844
<br />
Mail: contact@scrobits.com
</div>

<div className="social-handle-container">
<p className="social-handle-heading">
  Social Handles <br />
</p>

<div className='social-handles'>


<button><a href="https://www.linkedin.com/company/scrobits-technologies/?originalSubdomain=in" target='blank'><img src={ln} alt="" /></a></button>
<button><a href="https://www.instagram.com/scrobits_technologies/" target='blank'><img src={ig} alt="" /></a></button>
<button><a href="https://twitter.com/scrobitstech" target='blank'><img src={tw} alt="" /></a></button>
<button><a href="https://www.facebook.com/scrobitstechnologies/" target='blank'><img src={fb} alt="" /></a></button>
</div></div>

      <div className="contactt">
      <div className="wp-imgg">
        <div className="link1">
        <a href="https://wa.me/919607020806?text=I'm%20interested%20in%20your%20car%20for%20sale">WhatsApp</a></div>
       <button id='#btn-wtt'><a href="https://wa.me/919607020806?text=I'm%20interested%20in%20your%20car%20for%20sale" target='blank'> <img src={whatsapp} alt="" /></a></button></div>
<div className="meet-imgg">
  <div className="link2">
  <a href="https://calendly.com/scrobits/connect_with_arpit?month=2022-07">Schedule an Appointment</a></div>
        <button id='#btn-cl1'><a href="https://calendly.com/scrobits/connect_with_arpit?month=2022-07" target='blank'> <img src={calendly} alt="" /></a></button></div>
  
</div>
        <div className="footer-content">© 2021 ScroBits Technologies All rights reserved</div>
</div>
  )
}

export default Footer