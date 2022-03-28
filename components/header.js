import Link from "next/link";
import Navbar from "./generic/navbar/navbar";

export default function Header(){
  return (<header
    className="w-full max-w-screen-lg m-auto flex flex-col gap-1 pb-2 text-neutral-800 "
  >

    {/* 'logo' and navbar*/}
    <div className="flex p-4 sm:flex-row items-center flex-col sm:gap-4 justify-between w-full">
      <Link href='/'>
        <a>
          <h1 className="text-2xl relative hover:underline whitespace-nowrap md:text-4xl font-medium font-ibm-serif">
            Christian Action, Inc. 
          </h1>
        </a>
      </Link>

      <Navbar />
    </div>

    {/* placeholder breadcrumb trail */}
    <div 
      className="
      w-full max-w-screen-lg m-auto p-4
      bg-blue-300
      border-t-2 border-blue-500
      "
    >
      <p>Home</p>
    </div>
  </header>)
}