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
        <StyledLink href='/#give'>
          <a
            className="flex flex-row gap-1 items-center"
          >Give
          </a>
        </StyledLink>
      </li>
    </ul>
  </nav>
}