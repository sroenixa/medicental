'use client'
import Layout from "@/components/layout/Layout"
import TestimonialSlider3 from '@/components/slider/TestmonialSlider3'
import Link from "next/link"
import { useState } from 'react'

export default function Home() {
    const [isOpen, setOpen] = useState(false)
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="About Us">
                {/* about-section */}
                <section className="about-style-two pt_120 pb_120">
                <div className="pattern-layer">
                  <div className="pattern-1 rotate-me" style={{ backgroundImage: "url(/assets/images/shape/shape-8.png)" }}></div>
                  <div className="pattern-2 rotate-me" style={{ backgroundImage: "url(/assets/images/shape/shape-9.png)" }}></div>
                  <div className="pattern-3" style={{ backgroundImage: "url(/assets/images/shape/shape-11.png)" }}></div>
                  <div className="pattern-4" style={{ backgroundImage: "url(/assets/images/shape/shape-35.png)" }}></div>
                </div>
                <div className="auto-container">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div className="image_block_one">
                        <div className="image-box">
                          <div className="shape float-bob-x" style={{ backgroundImage: "url(/assets/images/shape/shape-7.png)" }}></div>
                          <div className="image-shape" style={{ backgroundImage: "url(/assets/images/shape/shape-26.png)" }}></div>
                          <figure className="image-2"><img src="/assets/images/custom/about-us-page.png" alt="" /></figure>
                          <div className="icon-one"><i className="icon-13"></i></div>
                          <div className="icon-two"><i className="icon-14"></i></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                      <div className="content_block_one">
                        <div className="content-box ml_30">
                          <div className="sec-title mb_15">
                            <span className="sub-title">About Us</span>
                            <h2>Medical Services</h2>
                          </div>
                          <div className="text-box mb_40">
                          <p>Welcome to Medicental Healtcare, your trusted partner in medical tourism. We have been at the forefront of providing exceptional healthcare services to international patients for over 15 years. Our mission is to bridge the gap between high-quality healthcare and affordable prices, making medical treatments accessible to everyone, regardless of their location.</p>
                          <p>Our vision is to become a global leader in medical tourism, offering a seamless and personalized experience to our patients. We believe in the power of health and wellness, and we are committed to providing our patients with the best possible care, ensuring their well-being and recovery.</p>
                           <p>Located in the heart of Istanbul, we are strategically positioned to offer a wide range of medical services, from general healthcare to specialized treatments. Our team of experienced healthcare professionals is dedicated to providing top-notch care, ensuring that our patients receive the best possible outcomes.</p>
                          <p>At Medicental Healtcare, we understand that choosing a healthcare provider is a significant decision. We are committed to transparency, quality, and patient satisfaction. We strive to exceed expectations by offering personalized care, cutting-edge technology, and a compassionate approach to healthcare.</p>
                          <p>We invite you to explore our services and learn more about how we can help you achieve your health and wellness goals. Whether you are looking for a specific treatment, seeking a comprehensive health check-up, or simply want to experience the best of healthcare in Istanbul, we are here to support you every step of the way.</p>
                          </div>
                          <div className="lower-box">
                            <div className="experience-box">
                              <div className="icon-box"><i className="icon-29"></i></div>
                              <h3>15 Years</h3>
                              <span className="designation">Of Medical Experience</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
               
            </Layout>
        </>
    )
}


