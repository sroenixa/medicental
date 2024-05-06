import React from 'react';
import Link from "next/link"
export default function Team() {
  const teamMembers = [
    { name: 'Black Marvin', role: 'Medical Assistant', image: 'assets/images/team/team-1.jpg' },
    { name: 'Eleanor Pena', role: 'Doctor', image: 'assets/images/team/team-2.jpg' },
    { name: 'Arlene Maccy', role: 'Nursing Assistant', image: 'assets/images/team/team-3.jpg' },
    { name: 'Jenny Wilson', role: 'Senior Doctor', image: 'assets/images/team/team-4.jpg' },
  ];

  return (
    <section className="team-section sec-pad centred">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: 'url(/assets/images/shape/shape-13.png)' }}></div>
        <div className="pattern-2" style={{ backgroundImage: 'url(/assets/images/shape/shape-14.png)' }}></div>
      </div>
      <div className="shape">
        <div className="shape-1 float-bob-y" style={{ backgroundImage: 'url(/assets/images/shape/shape-15.png)' }}></div>
        <div className="shape-2"></div>
        <div className="shape-3 float-bob-x" style={{ backgroundImage: 'url(/assets/images/shape/shape-16.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="sec-title mb_50">
          <span className="sub-title">Our Team</span>
          <h2>Meet our experienced doctors <br />for the best treatment</h2>
        </div>
        <div className="row clearfix">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 team-block">
              <div className="team-block-one wow fadeInUp animated" data-wow-delay={`${index * 200}ms`} data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><img src={member.image} alt={`${member.name}'s photo`} /></figure>
                    <ul className="social-links clearfix">
                      <li><Link href="/#"><i className="icon-4"></i></Link></li>
                      <li><Link href="/#"><i className="icon-5"></i></Link></li>
                      <li><Link href="/#"><i className="icon-6"></i></Link></li>
                      <li><Link href="/#"><i className="icon-7"></i></Link></li>
                    </ul>
                  </div>
                  <div className="lower-content">
                    <h3><Link href="team-details">{member.name}</Link></h3>
                    <span className="designation">{member.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

