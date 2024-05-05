import React from 'react';
import Link from "next/link"
export default function Pricing() {
  return (
    <section className="pricing-section sec-pad">
      <div className="auto-container">
        <div className="sec-title mb_50 centred">
          <span className="sub-title">Our Offers</span>
          <h2>Affordable care options for <br />all patients</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
            <div className="pricing-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="pricing-table"  style={{ backgroundImage: "url(assets/images/custom/dental.png)", backgroundSize:"cover"}}>
              <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    }}
                  />
                <div className="table-header">
                  <h5>Dental Services</h5>
                  <h2><b>10%</b><br></br>Discount!</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
            <div className="pricing-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
            <div className="pricing-table"  style={{ backgroundImage: "url(assets/images/custom/cosmetic.png)", backgroundSize:"cover"}}>
              <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    }}
                  />
                <div className="table-header">
                <h5>Plastic Services</h5>
                  <h2><b>20%</b><br></br>Discount!</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
            <div className="pricing-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
            <div className="pricing-table"  style={{ backgroundImage: "url(assets/images/custom/hair.png)", backgroundSize:"cover"}}>
              <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    }}
                  />
                <div className="table-header">
                <h5>Hair Services</h5>
                <h2><b>20%</b><br></br>Discount!</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

