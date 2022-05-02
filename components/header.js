import Link from "next/link";
import Navbar from "./navbar/navbar";
import {useState, useEffect} from 'react'
import {useRouter} from "next/router"

const locations = {
  '/': 'Home',
  '/about': 'About',
  '/resources': 'Resources',
  '/give': 'Give'
}

export default function Header(){
  const router = useRouter();
  const [location, setLocation] = useState('Home');
  useEffect(_ => {
    setLocation(locations[router.pathname])
  }, [router.pathname])

  return (<header
    className="w-full max-w-screen-lg m-auto flex flex-col text-neutral-800 "
  >

    {/* 'logo' and navbar*/}
    <div className="flex px-4 pt-4 pb-2 sm:flex-row items-center flex-col sm:gap-4 justify-between w-full">
      <Link href='/'>
        <a>
          <h1 className="text-2xl relative hover:underline whitespace-nowrap md:text-4xl font-medium font-ibm-serif">
            Christian Action, Inc. 
          </h1>
        </a>
      </Link>

      <Navbar />
    </div>

    {/* tagline */}
    <div
      className="relative w-full max-w-max top-1 px-4 text-neutral-600 font-medium text-center"
    >
      <p>A non-profit corporation designed for enabling home ownership</p>
    </div>

    {/* placeholder breadcrumb trail */}
    <div 
      className="
      w-full p-4
      bg-blue-300
      border-t-2 border-blue-500
      flex flex-row gap-2
      "
    >
      {
        location !== 'Home' && <>
          <Link href='/'><a className="underline">Home</a></Link>
          <p>&gt;</p>
          <a>{location}</a>
        </>
        || <a>Home</a>
      }
    </div>
  </header>)
}