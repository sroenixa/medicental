'use client'
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  const [isSubActive, seSubtIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleSubToggle = (key, subMenuKey = "") => {
    if (isSubActive.key === key && isSubActive.subMenuKey === subMenuKey) {
      seSubtIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      seSubtIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };


  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}><span className="far fa-times" /></div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img src="/assets/images/footer-logo.png" alt="" />
            </Link>
          </div>
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent">
              <ul className="navigation clearfix">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                  <Link href="/dummy-link">Find Treatment</Link>
                  <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                            <Link href="/#">Hair Transplant</Link>
                            <ul className="px-4" style={{ display: `${isSubActive.key == 1 ? "block" : "none"}` }}>
                                  <li><Link href="/dummy-link">FUE Hair Transplant</Link></li>
                                  <li><Link href="/dummy-link">FUT Hair Transplant</Link></li>
                                  <li><Link href="/dummy-link">DHI Hair Transplant</Link></li>
                                  <li><Link href="/dummy-link">Beard Transplant</Link></li>
                                  <li><Link href="/dummy-link">Eyebrow Transplant</Link></li>
                                  <li><Link href="/dummy-link">Mustache Transplant</Link></li>
                                  <li><Link href="/dummy-link">Sapphire Hair Transplant</Link></li>
                                  <li><Link href="/dummy-link">PRP</Link></li>
                            </ul>
                            <div className={isSubActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleSubToggle(1)}><span className="fa fa-angle-right" /></div>
                        </li>

                        <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                            <Link href="/#">Plastic Surgery</Link>
                            <ul className="px-4" style={{ display: `${isSubActive.key == 2 ? "block" : "none"}` }}>
                                <li><Link href="/dummy-link">Liposuction</Link></li>
                                <li><Link href="/dummy-link">Rhinoplasty</Link></li>
                                <li><Link href="/dummy-link">Breast Implants</Link></li>
                                <li><Link href="/dummy-link">Butt Implants</Link></li>
                                <li><Link href="/dummy-link">Tummy Tuck</Link></li>
                                <li><Link href="/dummy-link">Mummy Makeover</Link></li>
                                <li><Link href="/dummy-link">Eyelid Surgery</Link></li>
                                <li><Link href="/dummy-link">Facelift</Link></li>
                                <li><Link href="/dummy-link">Breast Lift</Link></li>
                                <li><Link href="/dummy-link">Brazilian Butt Lift</Link></li>
                                <li><Link href="/dummy-link">Body Lift</Link></li>
                                <li><Link href="/dummy-link">Arm Lift</Link></li>
                                <li><Link href="/dummy-link">Chin Implant</Link></li>
                                <li><Link href="/dummy-link">Ultrasonic Rhinoplasty</Link></li>
                                <li><Link href="/dummy-link">Fat Transfer</Link></li>
                                <li><Link href="/dummy-link">Gynecomastia</Link></li>
                                <li><Link href="/dummy-link">Neck Lift</Link></li>
                                <li><Link href="/dummy-link">Brow Lift</Link></li>
                                <li><Link href="/dummy-link">Fat Transfer</Link></li>
                            </ul>
                            <div className={isSubActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleSubToggle(2)}><span className="fa fa-angle-right" /></div>
                        </li>

                        <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                            <Link href="/#">Bariatric Surgery</Link>
                            <ul className="px-4" style={{ display: `${isSubActive.key == 3 ? "block" : "none"}` }}>
                                <li><Link href="/dummy-link">Gastric Bypass Surgery</Link></li>
                                <li><Link href="/dummy-link">Gastric Sleeve</Link></li>
                                <li><Link href="/dummy-link">Gastric Balloon</Link></li>
                                <li><Link href="/dummy-link">Gastric Band</Link></li>
                                <li><Link href="/dummy-link">Endoscopic Sleeve Gastroplasty</Link></li>
                                <li><Link href="/dummy-link">Diabetes Surgery</Link></li>
                                <li><Link href="/dummy-link">Laparoscopic Ileal Interposition</Link></li>
                                <li><Link href="/dummy-link">Floppy Nissen Fundoplication</Link></li>
                                <li><Link href="/dummy-link">Gastric Sleeve Revision</Link></li>
                            </ul>
                            <div className={isSubActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleSubToggle(3)}><span className="fa fa-angle-right" /></div>
                        </li>


                        <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                            <Link href="/#">Dentistry</Link>
                            <ul className="px-4" style={{ display: `${isSubActive.key == 4 ? "block" : "none"}` }}>
                                <li><Link href="/dummy-link">Root Canal Treatment</Link></li>
                                <li><Link href="/dummy-link">Teeth Cleaning</Link></li>
                                <li><Link href="/dummy-link">Crowns</Link></li>
                                <li><Link href="/dummy-link">Teeth Whitening</Link></li>
                                <li><Link href="/dummy-link">Sinus Lift</Link></li>
                                <li><Link href="/dummy-link">Hollywood Smile</Link></li>
                                <li><Link href="/dummy-link">All-on-4</Link></li>
                                <li><Link href="/dummy-link">Bone Graft</Link></li>
                                <li><Link href="/dummy-link">Tooth Filling</Link></li>
                                <li><Link href="/dummy-link">Dental Implants</Link></li>
                                <li><Link href="/dummy-link">Veneers</Link></li>
                                <li><Link href="/dummy-link">Dental Bridge</Link></li>
                            </ul>
                            <div className={isSubActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleSubToggle(4)}><span className="fa fa-angle-right" /></div>
                        </li>


                        <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                            <Link href="/#">Eye Care</Link>
                            <ul className="px-4" style={{ display: `${isSubActive.key == 5 ? "block" : "none"}` }}>
                            <li><Link href="/dummy-link">LASIK Eye Surgery</Link></li>
                                <li><Link href="/dummy-link">Cataract Surgery</Link></li>
                                <li><Link href="/dummy-link">Smile Eye Surgery</Link></li>
                                <li><Link href="/dummy-link">PRK Eye Surgery</Link></li>
                                <li><Link href="/dummy-link">Corneal Transplant</Link></li>
                                <li><Link href="/dummy-link">Strabismus Treatment</Link></li>
                                <li><Link href="/dummy-link">Artificial Corneal Transplant</Link></li>
                            </ul>
                            <div className={isSubActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleSubToggle(5)}><span className="fa fa-angle-right" /></div>
                        </li>
                        <li className={isActive.key == 1 ? "current" : ""}>
                          <Link href="#">General Surgery</Link>
                        </li>

                        <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                            <Link href="/#">Others</Link>
                            <ul className="px-4" style={{ display: `${isSubActive.key == 6 ? "block" : "none"}` }}>
                            <li><Link href="/dummy-link">LASIK Eye Surgery</Link></li>
                            <li><Link href="/dummy-link">Diagnostic Imaging</Link></li>
                                <li><Link href="/dummy-link">Ear, Nose and Throat</Link></li>
                                <li><Link href="/dummy-link">Orthopedics</Link></li>
                                <li><Link href="/dummy-link">Spinal Surgery</Link></li>
                                <li><Link href="/dummy-link">Oncology</Link></li>
                            </ul>
                            <div className={isSubActive.key == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleSubToggle(6)}><span className="fa fa-angle-right" /></div>
                        </li>



                  </ul>
                  <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                </li>
                <li><Link href="/contact" onClick={handleMobileMenu}>Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="contact-info">
          <h4>Contact Info</h4>
          <ul>
            <li>İstanbul, Turkey</li>
            <li><Link href="tel:+905402440212">+905402440212</Link></li>
            <li><Link href="mailto:info@medicental.com">info@medicental.com</Link></li>
          </ul>
        </div>
          {/*Social Links*/}
          <div className="social-links">
          <ul className="clearfix">
            <li><Link href="https://www.facebook.com/medicental"><span className="fab fa-facebook-square"></span></Link></li>
            <li><Link href="https://www.instagram.com/medicentalagency/"><span className="fab fa-instagram"></span></Link></li>
          </ul>
        </div>
      </nav>
    </div>{/* End Mobile Menu */}
      <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />
    </>
  );
};

