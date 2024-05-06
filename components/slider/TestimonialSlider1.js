'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay:2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="single-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-23"></i></div>
                    <p>I had an amazing experience with Medicental for my medical tourism needs. Their expertise in medical tourism made my trip stress-free and enjoyable. I highly recommend Medicental for anyone looking for top-notch medical tourism services.</p>
                    <div className="author-box">
                    <figure className="author-thumb"><img src="/assets/images/custom/testimonal-2.png" alt="" /></figure>
                      <ul className="rating clearfix">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <h3>Alice Johnson</h3>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-23"></i></div>
                    <p>The level of care and professionalism I received was outstanding. I highly recommend them to anyone considering medical tourism.</p>
                    <div className="author-box">
                      <figure className="author-thumb"><img src="/assets/images/custom/testimonal-1.png" alt="" /></figure>
                      <ul className="rating clearfix">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <h3>Jane Thompson</h3>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-23"></i></div>
                    <p>The team was attentive and professional, ensuring a seamless journey for me. I highly recommend their services to anyone looking for top-notch medical care combined with travel. Thank you, Medicental!</p>
                    <div className="author-box">
                    <figure className="author-thumb"><img src="/assets/images/custom/testimonal-3.png" alt="" /></figure>
                      <ul className="rating clearfix">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <h3>Robert Fox</h3>
                    </div>
                  </div>
                </div>
                </SwiperSlide>               
            </Swiper>
        </>
    )
}
