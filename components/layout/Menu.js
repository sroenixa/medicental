import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

        
            <ul className="navigation clearfix">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li className="dropdown"><Link href="/">Find Treatment</Link>
                    <ul>
                        <li className="dropdown"><Link href="/dummy-link">Hair Transplant</Link>
                            <ul className="p-2">
                                <li><Link href="/dummy-link">FUE Hair Transplant</Link></li>
                                <li><Link href="/dummy-link">FUT Hair Transplant</Link></li>
                                <li><Link href="/dummy-link">DHI Hair Transplant</Link></li>
                                <li><Link href="/dummy-link">Beard Transplant</Link></li>
                                <li><Link href="/dummy-link">Eyebrow Transplant</Link></li>
                                <li><Link href="/dummy-link">Mustache Transplant</Link></li>
                                <li><Link href="/dummy-link">Sapphire Hair Transplant</Link></li>
                                <li><Link href="/dummy-link">PRP</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="/dummy-link">Plastic Surgery</Link>
                            <ul className="p-2">
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
                        </li>
                        <li className="dropdown"><Link href="/dummy-link">Bariatric Surgery</Link>
                            <ul className="p-2">
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
                        </li>
                        <li className="dropdown"><Link href="/dummy-link">Dentistry</Link>
                            <ul className="p-2">
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
                        </li>
                        <li className="dropdown"><Link href="/dummy-link">Eye Care</Link>
                            <ul className="p-2">
                                <li><Link href="/dummy-link">LASIK Eye Surgery</Link></li>
                                <li><Link href="/dummy-link">Cataract Surgery</Link></li>
                                <li><Link href="/dummy-link">Smile Eye Surgery</Link></li>
                                <li><Link href="/dummy-link">PRK Eye Surgery</Link></li>
                                <li><Link href="/dummy-link">Corneal Transplant</Link></li>
                                <li><Link href="/dummy-link">Strabismus Treatment</Link></li>
                                <li><Link href="/dummy-link">Artificial Corneal Transplant</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/dummy-link">General Surgery</Link></li>
                        <li className="dropdown"><Link href="/dummy-link">Others</Link>
                            <ul className="p-2">
                                <li><Link href="/dummy-link">Diagnostic Imaging</Link></li>
                                <li><Link href="/dummy-link">Ear, Nose and Throat</Link></li>
                                <li><Link href="/dummy-link">Orthopedics</Link></li>
                                <li><Link href="/dummy-link">Spinal Surgery</Link></li>
                                <li><Link href="/dummy-link">Oncology</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>

        </>
    )
}
