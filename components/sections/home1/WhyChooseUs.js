import Link from 'next/link';
import React from 'react';

export default function chooseus() {
  return (
    <section className="chooseus-section">
      <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/custom/why-choose-us.png)' }}></div>
      <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-12.png)' }}></div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-8 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <div className="sec-title light mb_50">
                <span className="sub-title">Why Choose Us</span>
                <h2>Choose The Best For Your <br />Health</h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box"><i className="icon-18"></i></div>
                      <h3>Quality</h3>
                      <p>We strive to exceed the expectations of all of our clients by committing to deliver quality services and enhance value by educating them about their health and empowering them to be partners in self-care.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box"><i className="icon-24"></i></div>
                      <h3>Community Relationships</h3>
                      <p>We acknowledge our vital and dynamic role in the world-wide communities and aim at fostering growth and development to serve patient needs..</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box"><i className="icon-34"></i></div>
                      <h3>Respect</h3>
                      <p>To honour the dignity, individuality and rights of everyone, while safe guarding patients and preserving their rights to privacy, confidentiality and information.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box"><i className="icon-20"></i></div>
                      <h3>24/7 Services</h3>
                      <p>Amet minim mollit non deserunt aliqua dolor do amet sint.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
