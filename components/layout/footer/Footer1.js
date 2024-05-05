import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="main-footer" id="footer">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}></div>
        <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}></div>
        <div className="pattern-3" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
        <div className="pattern-4"></div>
      </div>
      <div className="widget-section pt_120 pb_100">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget logo-widget">
                                <figure className="footer-logo"><Link href="/"><img src="assets/images/footer-logo.png" alt="" /></Link></figure>
                                <p>Highest level of service you can find.</p>
                                <ul className="social-links clearfix">
                                    <li><Link href="https://www.instagram.com/medicentalagency/"><i className="icon-4"></i></Link></li>
                                    <li><Link href="https://www.facebook.com/medicental"><i className="icon-7"></i></Link></li>
                                </ul>
                            </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget contact-widget">
                                <div className="widget-title">
                                    <h3>Contact us</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="info-list">
                                        <li><img src="assets/images/icons/icon-1.png" alt="" />İstanbul,Turkey</li>
                                        <li><i className="icon-2"></i><Link href="tel:+905402440212">+905402440212</Link></li>
                                        <li><i className="icon-26"></i><Link href="mailto:info@medicental.com">info@medicental.com</Link></li>
                                    </ul>
                                </div>
                            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="bottom-inner">
            <div className="copyright">
              <p>&copy; Medicental 2024 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>

        </>
    )
}
