import Link from 'next/link'

export default function StyledLink({children, href, selected}){
  let className = 'border-solid border-b-2 hover:border-neutral-800 '
  if(selected) className += 'border-neutral-800';
  return <div
    className={className}
  >
    <Link href={href}>
      {children}
    </Link>
  </div>
}