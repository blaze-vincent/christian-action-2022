import Section from "./section"
import Link from 'next/link'
import SectionTitle from "../sectionTitle"

export default function AboutPreview(){
  return <div
    className="w-full max-w-screen-lg flex flex-col gap-4"
  >
    <div className="pl-4 ">
      <SectionTitle title="About us" />
      <p className="text-lg relative font-medium">
        Christian Action is a Burlington nonprofit whose mission is to help Burlington families gain homeownership. Since 1968, Christian Action has partnered with state and local agencies to support families in making down payments, managing purchase contracts, and maintaining affordable homes.
      </p>
    </div>
    <Section imgSrc={'/svg/house-broken.svg'} textContent='Our services are intended for those in need of housing and loan support.'/>
    <Section imgSrc={'/svg/help.svg'} textContent='We aid people in achieving a comfortable living situation. The services we offer include partial down payments and zero-interest loans.'/>
    <Section imgSrc={'/svg/house.svg'} textContent='With our help, you can get back on your feet and live comfortably.'/>
    <div className="pl-4">
      <Link 
        href='/about'
      >
        <a
          className="px-3 py-2 max-w-max bg-blue-300 hover:bg-blue-400 font-medium"
        >Read more about us</a>
      </Link>
    </div>
    
  </div>
}