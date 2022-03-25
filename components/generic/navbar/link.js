import Link from 'next/link'

export default function StyledLink({children, href}){
  return <div
    className="border-solid border-b-2 hover:border-neutral-800"
  >
    <Link href={href}>
      {children}
    </Link>
  </div>
}