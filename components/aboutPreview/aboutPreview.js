import Section from "./section"
import Link from 'next/link'

export default function AboutPreview(){
  return <div
    className="w-full max-w-screen-lg flex flex-col gap-4"
  >
    <h2
      className="text-2xl font-ibm-serif font-medium max-w-max bg-blue-300 px-8 border-solid border-t-2 border-blue-500 p-2 "
    >About us</h2>

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