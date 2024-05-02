import Link from "next/link";

export default function BackToTop({ scroll }) {

    return (
        <>
            {(
                <Link className="wp-button scroll-to-target d-block" href="https://api.whatsapp.com/send?phone=905402440212">
                   <img src="assets/images/custom/wp_logo.webp" alt="wp-button"/>
                </Link> 
            )}
        </>
    )
}
