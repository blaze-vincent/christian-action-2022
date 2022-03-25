import StyledLink from './link'

export default function Navbar(){
  return <nav
    className=""
  >
    <ul
      className="list-none flex flex-row sm:gap-6 gap-4  items-center h-full"
    >
      <li>
        <StyledLink href='/'>
          <a>Home</a>
        </StyledLink>
      </li>
      <li>
        <StyledLink href='/about'>
          <a>About</a>
        </StyledLink>
      </li>
      <li>
        <StyledLink href='/resources'>
          <a>Resources</a>
        </StyledLink>
      </li>
      <li>
        <StyledLink href='/give'>
          <a
            className="flex flex-row gap-1 items-center"
          >Give
            <svg 
              className="fill-neutral-800 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg" 
              height="24" 
              viewBox="0 0 24 24" 
              width="24"
            >
              <path 
                d="M0 0h24v24H0z" 
                fill="none"
              />
              <path 
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>

          </a>
        </StyledLink>
      </li>
    </ul>
  </nav>
}