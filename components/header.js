import Link from "next/link";
import Navbar from "./generic/navbar/navbar";

export default function Header(){
  return (<header
    className="flex px-4 sm:flex-row items-center flex-col sm:gap-4 justify-between w-full max-w-screen-lg m-auto"
  >
    <Link href='/'>
      <a>
        <h1 className="text-neutral-800 text-2xl whitespace-nowrap md:text-4xl font-medium font-ibm-serif py-4">
          Christian Action, Inc. 
        </h1>
      </a>
    </Link>

    <Navbar />
  </header>)
}