
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Our Doctors">
                <div>
                    <section className="team-section sec-pad-2 centred">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                    <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images/custom/doctors/emre_hekimoglu.png" alt="" /></figure>
                                                <ul className="social-links clearfix">
                                                    <li><Link  target="_blank" href="https://www.instagram.com/goz.dr.emre.hekimoglu"><i className="icon-4"></i></Link></li>
                                                </ul>
                                            </div>
                                            <div className="lower-content">
                                                <h3>Dr. Emre Hekimoğlu</h3>
                                                <span className="designation">Ophthalmologist</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                    <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="/assets/images/custom/doctors/yasin_bilen.png" alt="" /></figure>
                                                <ul className="social-links clearfix">
                                                    <li><Link target="_blank" href="https://www.instagram.com/yasinbilendt"><i className="icon-4"></i></Link></li>
                                                </ul>
                                            </div>
                                            <div className="lower-content">
                                                <h3>Dt. Yasin Bilen<br/><br/></h3>
                                                <span className="designation">Dentist</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}