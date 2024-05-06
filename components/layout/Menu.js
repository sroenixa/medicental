import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

        
            <ul className="navigation clearfix">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li><Link href="/team">Doctors</Link></li>
                <li className="dropdown"><Link href="#">Find Treatment</Link>
                    <ul>
                        <li className="dropdown"><Link href="#">Hair Transplant</Link>
                            <ul className="p-2">
                                <li><Link href="#">FUE Hair Transplant</Link></li>
                                <li><Link href="#">FUT Hair Transplant</Link></li>
                                <li><Link href="#">DHI Hair Transplant</Link></li>
                                <li><Link href="#">Beard Transplant</Link></li>
                                <li><Link href="#">Eyebrow Transplant</Link></li>
                                <li><Link href="#">Mustache Transplant</Link></li>
                                <li><Link href="#">Sapphire Hair Transplant</Link></li>
                                <li><Link href="#">PRP</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">Plastic Surgery</Link>
                            <ul className="p-2">
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
                        </li>
                        <li className="dropdown"><Link href="#">Bariatric Surgery</Link>
                            <ul className="p-2">
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
                        </li>
                        <li className="dropdown"><Link href="#">Dentistry</Link>
                            <ul className="p-2">
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
                        </li>
                        <li className="dropdown"><Link href="#">Eye Care</Link>
                            <ul className="p-2">
                                <li><Link href="#">LASIK Eye Surgery</Link></li>
                                <li><Link href="#">Cataract Surgery</Link></li>
                                <li><Link href="#">Smile Eye Surgery</Link></li>
                                <li><Link href="#">PRK Eye Surgery</Link></li>
                                <li><Link href="#">Corneal Transplant</Link></li>
                                <li><Link href="#">Strabismus Treatment</Link></li>
                                <li><Link href="#">Artificial Corneal Transplant</Link></li>
                            </ul>
                        </li>
                        <li><Link href="#">General Surgery</Link></li>
                        <li className="dropdown"><Link href="#">Others</Link>
                            <ul className="p-2">
                                <li><Link href="#">Diagnostic Imaging</Link></li>
                                <li><Link href="#">Ear, Nose and Throat</Link></li>
                                <li><Link href="#">Orthopedics</Link></li>
                                <li><Link href="#">Spinal Surgery</Link></li>
                                <li><Link href="#">Oncology</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>

        </>
    )
}
