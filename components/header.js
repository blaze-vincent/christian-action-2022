import Link from "next/link";
import Navbar from "./navbar/navbar";
import Phone from "./svg/phone";
import Pin from "./svg/pin";

function ContactContainer({children}){
  return <div className="flex mt-2 fill-neutral-600 text-neutral-600 flex-row justify-center sm:justify-start gap-0 items-center h-[24px]">
    {children}
  </div>
}

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

    <div className="flex flex-col sm:flex-row gap-0 sm:gap-4">
      <ContactContainer>
        <Pin className='inline-block scale-50' /> 
        <p>
          P.O. box 232, Burlington, Iowa 52601
        </p>
      </ContactContainer>
      <ContactContainer>
        <Phone className='inline-block scale-50' /> 
        <a 
          href='tel:3196710963'
          className="underline"  
        >
          319-671-0963
        </a>
      </ContactContainer>
    </div>

  </header>)
}