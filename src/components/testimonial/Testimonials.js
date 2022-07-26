import React from 'react';
// import './testimonial.css';
import Image1 from "./assests/avatar-1.svg";
import Image3 from "./assests/avatar-3.svg";
import '../../styles/testimonial.css'

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
    id: 1,
    image: Image1,
    title: "Prasad Desai",
    subtitle: "Product designer at Dribble",
    comment:
      "A perfect and elegant company which can provide the business solutions up to the mark. Website is so convincing that any of the client can trust on the company easily 👍",
  },
  {
    id: 2,
    image: Image1,
    title: "Prasad Desai",
    subtitle: "Product designer at Dribble",
    comment:
      "A perfect and elegant company which can provide the business solutions up to the mark. Website is so convincing that any of the client can trust on the company easily 👍",
  },
  {
    id: 3,
    image: Image1,
    title: "Prasad Desai",
    subtitle: "Product designer at Dribble",
    comment:
      "A perfect and elegant company which can provide the business solutions up to the mark. Website is so convincing that any of the client can trust on the company easily 👍",
  },
  {
    id: 4,
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
      autoplay={true}
      delay={3000}
      speed={1000}
      // disableOnInteraction={true}
      reverseDirection={true}
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
  

      
    </section>
    </>
  )
}
export default Testimonials;