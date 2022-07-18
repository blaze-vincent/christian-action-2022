import Link from "next/link";
import Navbar from "./navbar/navbar";
import Pin from "./svg/pin";

export default function Header(){

  return (<header
    className="w-full max-w-screen-lg m-auto flex flex-col text-neutral-800 mb-12"
  >

    {/* 'logo' and navbar*/}
    <div className="flex px-4 pt-4 pb-2 sm:flex-row items-center flex-col sm:gap-4 justify-between w-full">
      <Link href='/'>
        <a>
          <h1 className="text-4xl relative hover:underline whitespace-nowrap sm:text-5xl font-medium font-handwriting">
            Christian Action
          </h1>
        </a>
      </Link>

      <Navbar />
    </div>

    {/* tagline */}
    <div
      className="relative italic w-full max-w-max top-1 px-4 text-neutral-600 text-center m-auto sm:m-0"
    >
      <p>a non-profit corporation designed for enabling home ownership</p>
    </div>

    {/* location */}
    <div className="flex fill-neutral-600 text-neutral-600 flex-row justify-center sm:justify-start gap-0 items-center h-content">
      <Pin className='inline-block scale-50' /> 
      <p>
        P.O. box 232, Burlington, Iowa
      </p>
    </div>

  </header>)
}