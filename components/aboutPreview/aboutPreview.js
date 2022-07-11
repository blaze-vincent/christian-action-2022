import Section from "./section"
import Link from 'next/link'
import SectionTitle from "../sectionTitle"

export default function AboutPreview(){
  return <div
    className="w-full max-w-screen-lg flex flex-col gap-4"
  >
    <SectionTitle title="About us" />

    <Section imgSrc={'/svg/house-broken.svg'} textContent='Our services are intended for those in difficult situations in need of housing and loan support.'/>
    <Section imgSrc={'/svg/help.svg'} textContent='We aid people in achieving a comfortable living situation. The services we offer include partial down payments and zero-interest loans.'/>
    <Section imgSrc={'/svg/house.svg'} textContent='With our help, you can get back on your feet and live comfortably.'/>
    <Link 
      href='/about'       
    >
      <a
        className="font-medium underline px-2 py-1 max-w-max"
      >Read more about us</a>
    </Link>
  </div>
}