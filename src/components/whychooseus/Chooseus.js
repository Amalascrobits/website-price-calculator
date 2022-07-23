import React from 'react'
// import './chooseus.css'
import '../../styles/chooseus.css'
import { BsFileCodeFill} from "react-icons/bs";
import img from "./img/contactus.png"
import {MdDesignServices} from "react-icons/md";
import {BsShop} from "react-icons/bs";
import { SiChatbot } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import {GiFactoryArm} from "react-icons/gi";
import {MdBookOnline} from "react-icons/md";


const Chooseus = () => {
  return (
  <>
  <div className="chooseus-section">
    <div className="chooseus-body">
        <div className="why-choose-us-heading">
        Why choose Us
        </div>
        <div className="why-choose-us-content">
        We have been in this industry for more than 3 years, we are professional and experienced supplier of the high quality software development. Also, we provide great service to our customers, so you can customize your own website with your own logo or design . We offer competitive price and good quality for all kinds of software development according to different styles and specifications .
        </div>
    <div className="chooseus-container">
    <div className="chooseus-right">
  <div className="li">
        <div className="web-dev">Web Development</div>
        <div className="web-dev-content1">Bespke professional websites development with limitless possibilities</div></div>
        <div className="icon"><BsFileCodeFill size={18}/></div>

        <div className="li">
        <div className="web-dev">Creative Design</div>
        <div className="web-dev-content1">Delivering custom creative design services talored to unique brand needs</div>
        <div className="icon"><MdDesignServices size={18}/></div></div>

        <div className="li">
        <div className="web-dev">Ecommerce</div>
        <div className="web-dev-content1">Grow your business by putting your shop online and making it easily accessible 24x7</div>
        <div className="icon"><BsShop size={18}/></div></div>

        <div className="li">
        <div className="web-dev">Chatbots and AR/VR Development </div>
        <div className="web-dev-content1">Highly sophisticated and intelligent chatbot development and immediate AR/VR solutions</div>
        <div className="icon" id='sichatbot'><SiChatbot size={18}/></div></div>


    </div>
 <div className="contact-book-img">
    <img src={img} alt="" />
 </div>
 <div className="chooseus-left">
 <div className="li">
        <div className="web-dev">Mobile App Development</div>
        <div className="web-dev-content">Building smart mobile apps to help overcome challenging business problems.</div>
        <div className="icon-r"><FaMobileAlt size={18}/></div></div>

        <div className="li">
        <div className="web-dev">Dedicated Teams</div>
        <div className="web-dev-content">While you focus on your core business we focus on building the rigth Team for you. </div>
        <div className="icon-r"><RiTeamFill size={18}/></div></div>

        <div className="li">
        <div className="web-dev">Digital Marketing </div>
        <div className="web-dev-content">Grow your business with our powerful and result oriented digital marjeting strategies</div>
        <div className="icon-r"><MdBookOnline size={18}/></div></div>

        <div className="li">
        <div className="web-dev">IoT and Embedded Development</div>
        <div className="web-dev-content">One stop solution for all your industrial Automation Development and electronics product needs</div>
        <div className="icon-r" id='GiFactoryArm'><GiFactoryArm size={18}/></div></div>


 </div>
    </div>
  </div></div>
  
  </>
  )
}

export default Chooseus