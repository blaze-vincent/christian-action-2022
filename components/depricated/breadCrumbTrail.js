import {useState, useEffect} from 'react'
import {useRouter} from "next/router"

const locations = {
  '/': 'Home',
  '/about': 'About',
  '/resources': 'Resources',
  '/give': 'Give'
}

export default function BreadCrumbTrail(){

  const router = useRouter();
  const [location, setLocation] = useState('Home');
  useEffect(_ => {
    setLocation(locations[router.pathname])
  }, [router.pathname])

  <div 
    className="w-full p-4 bg-blue-300 border-t-2 border-blue-500 flex flex-row gap-2"
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
}