
import SendMailForm from "@/components/elements/SendEmail"
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Contact Us">
                <div>
                    {/* Contact Form Section */}
                    <section className="contact-info-section pt_120">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-12 col-md-12 col-sm-12 info-column">
                                    <div className="info-block-one">
                                        <h3>Quick Contact</h3>
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-2"></i></div>
                                            <p>Main Office: <br /><Link href="tel:+905402440212">+905402440212</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Contact Form Section End */}
                    {/* Contact Form Section2 */}
                    <section className="contact-style-three pt_90 pb_120">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                                    <div className="form-inner mr_40">
                                        <div className="sec-title mb_50">
                                            <h2>Send a Message</h2>
                                        </div>
                                       <SendMailForm/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                                    <figure className="image-box"><img src="/assets/images/custom/contact-banner.png" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Contact Form Section2 End */}

                    {/* Google Map Section */}
                    <section className="google-map-section">
                        {/*Map Outer*/}
                        <div className="map-inner">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.992402846764!2d29.006335809816836!3d41.091012626398815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab76a738eba6b%3A0xcd148ef394ac61a3!2sYeni%20Levent%20Sitesi!5e0!3m2!1str!2str!4v1714854515725!5m2!1str!2str" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </section>
                    {/* Google Map Section End */}
                </div>

            </Layout>
        </>
    )
}
