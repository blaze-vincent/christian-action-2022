import StyledLink from './link'
import {useState, useEffect} from 'react'
import {useRouter} from "next/router"

const locations = [
  {
    url: '/',
    name: 'Home'
  },
  {
    url: '/about',
    name: 'About'
  },
  {
    url: '/resources',
    name: 'Resources'
  }
]

export default function Navbar(){

  const router = useRouter();
  const [location, setLocation] = useState(locations[0]);
  useEffect(_ => {
    setLocation(locations.find(_location => {return _location.url === router.pathname}))
  }, [router.pathname])

  return <nav
    className=""
  >
    <ul
      className="list-none flex flex-row sm:gap-6 gap-4  items-center h-full"
    >
      {
        locations.map((_location, index) => {
          return <li>
            <StyledLink 
              href={_location.url} 
              selected={_location === location}
              key={index}  
            >
              <a>{_location.name}</a>
            </StyledLink>
          </li>
        })
      }
    </ul>
  </nav>
}