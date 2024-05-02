import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li className="dropdown"><Link href="/">Services</Link>
                    <ul>
                        <li><Link href="/service">Our Services</Link></li>
                        <li><Link href="/service-details">Cardiology</Link></li>
                        <li><Link href="/service-details-2">Dental Clinic</Link></li>
                        <li><Link href="/service-details-3">Neurosurgery</Link></li>
                        <li><Link href="/service-details-4">Medical</Link></li>
                        <li><Link href="/service-details-5">Pediatrics</Link></li>
                        <li><Link href="/service-details-6">Modern Laboratory</Link></li>
                    </ul>
                </li>
                     <li><Link href="/">Team</Link></li>
                     <li className="dropdown"><Link href="/">Blog</Link>
                            <ul>
                                <li><Link href="/blog">Blog Grid</Link></li>
                                <li><Link href="/blog-2">Blog Sidebar</Link></li>
                                <li><Link href="/blog-details">Blog Details</Link></li>
                            </ul>
                        </li>
                {/* Contact */}
                <li><Link href="/contact">Contact</Link></li>
            </ul>

        </>
    )
}
