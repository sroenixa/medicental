import Link from 'next/link';
import React from 'react';

export default function feature() {
  return (
    <section className="feature-section pt_120 pb_90">
    <div className="shape" style={{ backgroundImage: 'url(/assets/images/shape/shape-6.png)' }}></div>
    <div className="auto-container">
      <div className="row clearfix">
        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
          <div className="feature-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-2"></i></div>
              <h3><Link href="/">Get a Free Consultation</Link></h3>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
          <div className="feature-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-1"></i></div>
              <h3><Link href="/">Make Your Appointment</Link></h3>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
          <div className="feature-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-9"></i></div>
              <h3><Link href="/">Ask a Doctor</Link></h3>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
          <div className="feature-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-8"></i></div>
              <h3><Link href="/">Enjoy A Healthy Life</Link></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
