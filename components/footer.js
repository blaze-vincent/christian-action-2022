import Arrow from "./generic/svg/arrow";
import { useEffect, useRef } from 'react';

export default function Footer(){

  const scrollToTop = _ => {
     window.scrollTo({
       top: 0,
       behavior: 'smooth'
     })
  }

  return (<footer className="bg-stone-800 text-white p-4 mt-4 w-full max-w-screen-lg m-auto h-80">
    {/* width container */}
    <button
        className="flex flex-row gap-2 items-center"
        onClick={scrollToTop}
      >
        back to top
        <Arrow 
          className='rotate-90 relative w-8 h-8' 
          alt='back to top'
          title='back to top'  
        />
      </button>
  </footer>)
}