import React from 'react';
import './testimonial.css';
import Image1 from "./assests/avatar-1.svg";
import Image3 from "./assests/avatar-3.svg";
import whatsapp from "./assests/wpp.svg"
import calendly from "./assests/calendly.svg"
// import Swiper core and required modules
import { Pagination } from 'swiper';

import {Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: Image1,
    title: "Prasad Desai",
    subtitle: "Product designer at Dribble",
    comment:
      "A perfect and elegant company which can provide the business solutions up to the mark. Website is so convincing that any of the client can trust on the company easily 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "Parth Bhosale",
    subtitle: "Product designer at Dribble",
    comment:
      "Good, Polite and Hard Working Staff. Best Working Culture. No pressurizing from senior staff.👍",
  },
];

const Testimonials = () => {
  return (
    <>
    <section className='testimonials-container-section' >
      <h2 className='scetion__title' >Clients and Reviews </h2>
      <div className="swipper-container">
      <Swiper className='textimonials__container grid'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      loop={true}
      grabCursor={true}
  
      pagination={{ clickable: true }}
       >
        {data.map(({id, image, title, subtitle, comment}) => {
          return (
            <SwiperSlide className='testimonial__item' key={id} >
              <div className='thumb' >
                <img src={image} alt="" />
              </div>
              <h3 className='testimonials__title' >{title}</h3>
              <span className='subtitle' >{subtitle}</span>
              <div className='comment' >{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper></div>
      <div className="why-choose-us">
        <div className="why-choose-us-heading">
        Why choose Us
        </div>
        <div className="why-choose-us-content">
        We have been in this industry for more than 3 years, we are professional and experienced supplier of the high quality software development. Also, we provide great service to our customers, so you can customize your own website with your own logo or design . We offer competitive price and good quality for all kinds of software development according to different styles and specifications .
        </div>
      </div>

      
    </section>
    <div className="contact">
        <div className="wp-img">
        <button id='#btn-wt'><a href="https://wa.me/919607020806?text=I'm%20interested%20in%20your%20car%20for%20sale" target='blank'> <img src={whatsapp} alt="" /></a></button></div>
<div className="meet-img">
        <button id='#btn-cl'><a href="https://calendly.com/scrobits/connect_with_arpit?month=2022-07" target='blank'> <img src={calendly} alt="" /></a></button></div>
  
</div></>
  )
}
export default Testimonials;