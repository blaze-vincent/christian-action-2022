import Section from "./section"
import Link from 'next/link'

export default function AboutPreview(){
  return <div
    className="w-full max-w-screen-lg flex flex-col gap-4"
  >
    <h2
      className="text-2xl font-ibm-serif font-medium max-w-max bg-blue-300 px-8 border-solid border-t-2 border-blue-500 p-2 "
    >About us</h2>
    <Section imgSrc={'/svg/house-broken.svg'} textContent='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'/>
    <Section imgSrc={'/svg/help.svg'} textContent='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
    <Section imgSrc={'/svg/house.svg'} textContent='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
    <Link 
      href='/about'       
    >
      <a
        className="py-2 text-cl max-w-max font-medium bg-blue-300 px-4 rounded-full border-blue-500 border-2 border-solid"
      >Read more about us</a>
    </Link>
  </div>
}