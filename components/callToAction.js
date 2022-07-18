import Link from "next/link";

export default function CallToAction({href, children}){
  return <Link href={href}>
    <a
      className="px-3 py-2 max-w-max bg-blue-300 hover:bg-blue-400 font-medium"
    >
      {children}
    </a>
  </Link>
}