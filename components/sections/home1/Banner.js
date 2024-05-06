import React from 'react';
import Link from "next/link"
export default function Banner() {
  return (
    <section className="banner-section p_relative">
      <div className="pattern-layer wow slideInDown animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ backgroundImage: 'url(/assets/images/shape/shape-1.png)' }}></div>
      <div className="shape">
        <div className="shape-1" style={{ backgroundImage: 'url(/assets/images/shape/shape-2.png)' }}></div>
        <div className="shape-2 float-bob-x" style={{ backgroundImage: 'url(/assets/images/shape/shape-3.png)' }}></div>
        <div className="shape-3" style={{ backgroundImage: 'url(/assets/images/shape/shape-4.png)' }}></div>
        <div className="shape-4" style={{ backgroundImage: 'url(/assets/images/shape/shape-5.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <span className="upper-text">Highest level of service you can find</span>
              <h2>We drive the maximum limits of <span>satisfactions and the best services</span> what's possible for our patients.</h2>
              {/* <p>We are dedicated to providing you with the highest quality services to protect and enhance your health.</p> */}
              <div className="btn-box">
                <Link href="/contact" className="theme-btn btn-two"><span>Free Consultation With Your Surgeon</span></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image-box">
              <figure className="image float-bob-y"><img src="/assets/images/custom/main_banner.png" alt="" /></figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

