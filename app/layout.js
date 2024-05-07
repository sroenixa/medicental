import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/bootstrap.css"
import "../public/assets/css/color.css"
import "../public/assets/css/style.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { poppins } from '@/lib/font'
import Head from "next/head"
import Script from "next/script"

 
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata = {
    title: 'Medicental Healthcare',
    description: 'Highest level of medical services you can find.',
    authors: [{ name: 'Medicental Healthcare' }],
    authors: "Medicental Healthcare",
    creator: "Medicental Healthcare",
    publisher: "Medicental Healthcare",
    keywords:['medical tourism', 'health tourism', 'worldwide health services','medical services','doctors','medicental healtcare','medical', 'rhinoplasti','HairTransplant','FUEHairTransplant','FUTHairTransplant','DHIHairTransplant','BeardTransplant','EyebrowTransplant','MustacheTransplant','SapphireHairTransplant','PRP','Rhinoplasty','BreastImplants','ButtImplants','TummyTuck','MummyMakeover','EyelidSurgery','Facelift','BreastLift','BrazilianButtLift','BodyLift','ArmLift','ChinImplant','UltrasonicRhinoplasty','FatTransfer','Gynecomastia','NeckLift','BrowLift','FatTransfer','GastricBypassSurgery','GastricSleeve','GastricBalloon','GastricBand','EndoscopicSleeveGastroplasty','DiabetesSurgery','LaparoscopicIlealInterposition','FloppyNissenFundoplication','GastricSleeveRevision','RootCanalTreatment','TeethCleaning','Crowns','TeethWhitening','SinusLift','HollywoodSmile','All-on-4','BoneGraft','ToothFilling','DentalImplants','Veneers','DentalBridge','LASIKEyeSurgery','CataractSurgery','SmileEyeSurgery','PRKEyeSurgery','CornealTransplant','StrabismusTreatment','ArtificialCornealTransplant','GeneralSurgery','DiagnosticImaging','Ear,NoseandThroat','Orthopedics','SpinalSurgery','Oncology'],
    openGraph: {
        title: 'Medical Tourism - High-Quality Health Services',
        description: 'Medical tourism company offers high-quality health services. Discover the best doctors and medical services worldwide.',
        image: 'https://medicental.com/assets/medical-tourism.jpg',
        url: "https://www.medicental.com",
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Medical Tourism - High-Quality Health Services',
        description: 'Medical tourism company offers high-quality health services. Discover the best doctors and medical services worldwide.',
        image: 'https://medicental.com/assets/medical-tourism.jpg',
        url: "https://www.medicental.com",
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${poppins.variable}`}>
            <Script  strategy="lazyOnload" src="https://embed.tawk.to/662e9b46a0c6737bd131eda5/1ht2qoqtk"></Script>
            <body>{children}</body>
        </html>
    )
}
