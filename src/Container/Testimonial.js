import React, { useEffect, useState } from 'react'
import "./Testimonial.css"
import { Swiper, SwiperSlide } from "swiper/react";
import comma1 from "../assets/images/comma1.png"
import comma2 from "../assets/images/comma2.png"
import quote1 from "../assets/images/quote1.png"
import quote2 from "../assets/images/quote2.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { testimonials } from '../data';

function DesktopView() {
  return (
    <div className='testimonial'>
      <div className='testimonialHead'>
        <h3>WWW.LAKSHAYGOYAL.ME</h3>
        <h1>Testimonials 😍</h1>
        <h2>Designs so good, they'll make your mother-in-law <br /> compliment your taste.</h2>
      </div>

      <div className='testimonialSlide'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        slidesPerView={3}
        pagination={{
          clickable: true
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      {testimonials.map((item, index) =>
        <SwiperSlide key={index}>
        <div className='testimonialBox'>
          <div className='purple'>
            <h2>Client</h2>
            <h1>Testimonial</h1>
            <div className='commentBox'>
              <div className='circle'>
                <img src={item.DP} alt="" />
              </div>
              <h4><img src={comma1} alt="" /> {item.comment} <img src={comma2} alt="" /></h4>
            </div>
          </div>
          <div className='white'>
          <div></div>
          <div className='whiteContent'>
          <img src={quote1} alt="" />
            <div className='clientDetail'>
              <h3>{item.clientName}</h3>
              <h5>{item.clientDesignation}</h5>
              <img src={item.rating} alt="" />
            </div>
            <img src={quote2} alt="" />
            </div>
          </div>
          </div>
        </SwiperSlide>  
      )}      
      </Swiper>
      </div>
    </div>
  )
}

function TabletView() {
  return (
    <div className='testimonial'>
      <div className='testimonialHead'>
        <h3>WWW.LAKSHAYGOYAL.ME</h3>
        <h1>Testimonials 😍</h1>
        <h2>Designs so good, they'll make your mother-in-law <br /> compliment your taste.</h2>
      </div>

      <div className='testimonialSlide'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        slidesPerView={2}
        pagination={{
          clickable: true
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      {testimonials.map((item, index) =>
        <SwiperSlide key={index}>
        <div className='testimonialBox'>
          <div className='purple'>
            <h2>Client</h2>
            <h1>Testimonial</h1>
            <div className='commentBox'>
              <div className='circle'>
                <img src={item.DP} alt="" />
              </div>
              <h4><img src={comma1} alt="" /> {item.comment} <img src={comma2} alt="" /></h4>
            </div>
          </div>
          <div className='white'>
          <div></div>
          <div className='whiteContent'>
          <img src={quote1} alt="" />
            <div className='clientDetail'>
              <h3>{item.clientName}</h3>
              <h5>{item.clientDesignation}</h5>
              <img src={item.rating} alt="" />
            </div>
            <img src={quote2} alt="" />
            </div>
          </div>
          </div>
        </SwiperSlide>  
      )}      
      </Swiper>
      </div>
    </div>
  );
}

function MobileView() {
  return (
    <div className='testimonial'>
      <div className='testimonialHead'>
        <h3>WWW.LAKSHAYGOYAL.ME</h3>
        <h1>Testimonials 😍</h1>
        <h2>Designs so good, they'll make your mother-in-law <br /> compliment your taste.</h2>
      </div>

      <div className='testimonialSlide'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        slidesPerView={1}
        pagination={{
          clickable: true
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      {testimonials.map((item, index) =>
        <SwiperSlide key={index}>
        <div className='testimonialBox'>
          <div className='purple'>
            <h2>Client</h2>
            <h1>Testimonial</h1>
            <div className='commentBox'>
              <div className='circle'>
                <img src={item.DP} alt="" />
              </div>
              <h4><img src={comma1} alt="" /> {item.comment} <img src={comma2} alt="" /></h4>
            </div>
          </div>
          <div className='white'>
          <div></div>
          <div className='whiteContent'>
          <img src={quote1} alt="" />
            <div className='clientDetail'>
              <h3>{item.clientName}</h3>
              <h5>{item.clientDesignation}</h5>
              <img src={item.rating} alt="" />
            </div>
            <img src={quote2} alt="" />
            </div>
          </div>
          </div>
        </SwiperSlide>  
      )}      
      </Swiper>
      </div>
    </div>
  )
}

function Testimonial() {
  const [view, setView] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1041) {
        setView('desktop');
      } else if (window.innerWidth >= 600) {
        setView('tablet');
      } else {
        setView('mobile');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {view === 'desktop' && <DesktopView />}
      {view === 'tablet' && <TabletView />}
      {view === 'mobile' && <MobileView />}
    </div>
  );
}

export default Testimonial;
