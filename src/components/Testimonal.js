"use client"
import React from 'react'



import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y, EffectFade, Thumbs } from "swiper";

import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const listTestimoni = [
  {
    name: "iezh Robert",
    image: "/assets/people-3.png",
    city: "Warsaw",
    country: "Poland",
    rating: "4.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
  },
  {
    name: "iezh Robert",
    image: "/assets/people-3.png",
    city: "Warsaw",
    country: "Poland",
    rating: "4.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
  },
  {
    name: "iezh Robert",
    image: "/assets/people-3.png",
    city: "Warsaw",
    country: "Poland",
    rating: "4.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
  },
  {
    name: "iezh Robert",
    image: "/assets/people-3.png",
    city: "Warsaw",
    country: "Poland",
    rating: "4.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
  },
]



const Testimonial = () => {

  const setting={
   
    fade : true,
    loop : true,
    grabCursor :true,
    autoplay :{
      delay: 2500,
      disableOnInteraction: false
    },

    pagination:{
      clickable: true,
      dynamicBullets: true
    },
    navigation :true,
    modules :[Pagination, Navigation, Scrollbar, A11y, EffectFade],

    breakpoints:{
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      577: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1088: {
        slidesPerView: 3,
        spaceBetween: 10,
      },


    }

  }

  return (
    <>
      <div className="container mx-auto my-5 mt-5"  id='testimonials'>
        <div className="row">
         <div className='mt-5 mb-5'>
          
        <div className="text-center">
          <h2>Trusted by Thousands of <br/> Happy Customer</h2>
          <p>These are the stories of our customers who have joined us with <br/> great pleasure when using this crazy feature.</p>
        </div>
    
         </div>

            <Swiper {...setting} className="mySwiper" >
              {
                listTestimoni.map((test, indx) => {
                  return (
                    <>
                      <SwiperSlide className='col-12 col-sm-12 col-md-6 col-lg-4'>
                        <div className="card border border-danger shadow" >
                          <div className="card-body   ">

                            <p className="card-text">
                             {test.testimoni}
                            </p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                          </div >
                          <div className='d-flex justify-content-center gap-3'>
                            <img src={test.image} className="" alt="images" width={'60px'} height={"60px"} />
                            <div className='align-item-center'>
                              <h5 className='m-0 mt-2'>{test.name}</h5>
                              <p >{test.city}</p>
                            </div>
                          </div>
                        </div>

                      </SwiperSlide>
                    </>
                  )
                })
              }
            </Swiper>
         
        </div>
      </div>

    </>


  )
}

export default Testimonial
