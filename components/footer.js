import Arrow from "./svg/arrow";

export default function Footer(){

  const scrollToTop = _ => {
     window.scrollTo({
       top: 0,
       behavior: 'smooth'
     })
  }

  return (<footer className="bg-stone-600 text-white p-4 mt-4 w-full max-w-screen-lg m-auto h-80 border-solid border-t-2 border-neutral-800">
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