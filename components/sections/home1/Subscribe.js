import React from 'react';
import Link from "next/link"
export default function subscribe() {
  return (
    <section className="subscribe-section bg-color-1">
      <div className="auto-container">
        <div className="inner-container">
          <div className="row align-items-center d-flex justify-content-between">
            <div className="col-lg-6 col-md-12 col-sm-12 text-column">
              <div className="text-box">
                <h2><span>Fill in the information and</span> we will contact you!</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 form-column d-flex justify-content-sm-end">
              <Link href="/contact" className="theme-btn btn-one"><span>Let Us Contact You</span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
