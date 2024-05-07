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
                <li><Link href="/" onClick={handleMobileMenu}>Home</Link></li>
                <li><Link href="/about-us" onClick={handleMobileMenu}>About Us</Link></li>
                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                  <Link href="#" onClick={handleMobileMenu}>Find Treatment</Link>
                  <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                            <Link onClick={handleMobileMenu} href="#">Hair Transplant</Link>
                            <ul className="px-4" style={{ display: `${isSubActive.key == 1 ? "block" : "none"}` }}>
                                  <li><Link onClick={handleMobileMenu} href="#">FUE Hair Transplant</Link></li>
                                  <li><Link href="#">FUT Hair Transplant</Link></li>
                                  <li><Link href="#">DHI Hair Transplant</Link></li>
                                  <li><Link href="#">Beard Transplant</Link></li>
                                  <li><Link href="#">Eyebrow Transplant</Link></li>
                                  <li><Link href="#">Mustache Transplant</Link></li>
                                  <li><Link href="#">Sapphire Hair Transplant</Link></li>
                                  <li><Link href="#">PRP</Link></li>
                            </ul>
                            <div className={isSubActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleSubToggle(1)}><span className="fa fa-angle-right" /></div>
                        </li>

                        <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                            <Link onClick={handleMobileMenu} href="/#">Plastic Surgery</Link>
                            <ul className="px-4" style={{ display: `${isSubActive.key == 2 ? "block" : "none"}` }}>
                                <li><Link href="#">Liposuction</Link></li>
                                <li><Link href="#">Rhinoplasty</Link></li>
                                <li><Link href="#">Breast Implants</Link></li>
                                <li><Link href="#">Butt Implants</Link></li>
                                <li><Link href="#">Tummy Tuck</Link></li>
                                <li><Link href="#">Mummy Makeover</Link></li>
                                <li><Link href="#">Eyelid Surgery</Link></li>
                                <li><Link href="#">Facelift</Link></li>
                                <li><Link href="#">Breast Lift</Link></li>
                                <li><Link href="#">Brazilian Butt Lift</Link></li>
                                <li><Link href="#">Body Lift</Link></li>
                                <li><Link href="#">Arm Lift</Link></li>
                                <li><Link href="#">Chin Implant</Link></li>
                                <li><Link href="#">Ultrasonic Rhinoplasty</Link></li>
                                <li><Link href="#">Fat Transfer</Link></li>
                                <li><Link href="#">Gynecomastia</Link></li>
                                <li><Link href="#">Neck Lift</Link></li>
                                <li><Link href="#">Brow Lift</Link></li>
                                <li><Link href="#">Fat Transfer</Link></li>
                            </ul>
                            <div className={isSubActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleSubToggle(2)}><span className="fa fa-angle-right" /></div>
                        </li>

                        <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                            <Link onClick={handleMobileMenu} href="/#">Bariatric Surgery</Link>
                            <ul className="px-4" style={{ display: `${isSubActive.key == 3 ? "block" : "none"}` }}>
                                <li><Link href="#">Gastric Bypass Surgery</Link></li>
                                <li><Link href="#">Gastric Sleeve</Link></li>
                                <li><Link href="#">Gastric Balloon</Link></li>
                                <li><Link href="#">Gastric Band</Link></li>
                                <li><Link href="#">Endoscopic Sleeve Gastroplasty</Link></li>
                                <li><Link href="#">Diabetes Surgery</Link></li>
                                <li><Link href="#">Laparoscopic Ileal Interposition</Link></li>
                                <li><Link href="#">Floppy Nissen Fundoplication</Link></li>
                                <li><Link href="#">Gastric Sleeve Revision</Link></li>
                            </ul>
                            <div className={isSubActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleSubToggle(3)}><span className="fa fa-angle-right" /></div>
                        </li>


                        <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                            <Link onClick={handleMobileMenu} href="/#">Dentistry</Link>
                            <ul className="px-4" style={{ display: `${isSubActive.key == 4 ? "block" : "none"}` }}>
                                <li><Link href="#">Root Canal Treatment</Link></li>
                                <li><Link href="#">Teeth Cleaning</Link></li>
                                <li><Link href="#">Crowns</Link></li>
                                <li><Link href="#">Teeth Whitening</Link></li>
                                <li><Link href="#">Sinus Lift</Link></li>
                                <li><Link href="#">Hollywood Smile</Link></li>
                                <li><Link href="#">All-on-4</Link></li>
                                <li><Link href="#">Bone Graft</Link></li>
                                <li><Link href="#">Tooth Filling</Link></li>
                                <li><Link href="#">Dental Implants</Link></li>
                                <li><Link href="#">Veneers</Link></li>
                                <li><Link href="#">Dental Bridge</Link></li>
                            </ul>
                            <div className={isSubActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleSubToggle(4)}><span className="fa fa-angle-right" /></div>
                        </li>


                        <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                            <Link onClick={handleMobileMenu} href="/#">Eye Care</Link>
                            <ul className="px-4" style={{ display: `${isSubActive.key == 5 ? "block" : "none"}` }}>
                            <li><Link href="#">LASIK Eye Surgery</Link></li>
                                <li><Link href="#">Cataract Surgery</Link></li>
                                <li><Link href="#">Smile Eye Surgery</Link></li>
                                <li><Link href="#">PRK Eye Surgery</Link></li>
                                <li><Link href="#">Corneal Transplant</Link></li>
                                <li><Link href="#">Strabismus Treatment</Link></li>
                                <li><Link href="#">Artificial Corneal Transplant</Link></li>
                            </ul>
                            <div className={isSubActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleSubToggle(5)}><span className="fa fa-angle-right" /></div>
                        </li>
                        <li className={isActive.key == 1 ? "current" : ""}>
                          <Link onClick={handleMobileMenu} href="#">General Surgery</Link>
                        </li>

                        <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                            <Link onClick={handleMobileMenu} href="/#">Others</Link>
                            <ul className="px-4" style={{ display: `${isSubActive.key == 6 ? "block" : "none"}` }}>
                            <li><Link href="#">LASIK Eye Surgery</Link></li>
                            <li><Link href="#">Diagnostic Imaging</Link></li>
                                <li><Link href="#">Ear, Nose and Throat</Link></li>
                                <li><Link href="#">Orthopedics</Link></li>
                                <li><Link href="#">Spinal Surgery</Link></li>
                                <li><Link href="#">Oncology</Link></li>
                            </ul>
                            <div className={isSubActive.key == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleSubToggle(6)}><span className="fa fa-angle-right" /></div>
                        </li>



                  </ul>
                  <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                </li>
                <li><Link onClick={handleMobileMenu} href="/contact" onClick={handleMobileMenu}>Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="contact-info">
          <h4>Contact Info</h4>
          <ul>
            <li>İstanbul, Turkey</li>
            <li><Link href="tel:+905402440212">+905402440212</Link></li>
            <li><Link href="mailto:contact@medicental.com">contact@medicental.com</Link></li>
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

