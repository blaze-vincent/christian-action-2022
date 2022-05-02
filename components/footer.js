import Arrow from "./svg/arrow";

export default function Footer(){

  const scrollToTop = _ => {
     window.scrollTo({
       top: 0,
       behavior: 'smooth'
     })
  }

  return (<footer className="flex flex-row justify-between items-end bottom-0 bg-stone-700 text-white p-4 mt-4 w-full max-w-screen-lg m-auto border-solid border-t-2 border-neutral-800">
    {/* width container */}
    <small>&copy; 2022 Christian Action, Inc.</small>
      <button
        onClick={scrollToTop}
      >
        <Arrow 
          className='rotate-90 relative w-8 h-8' 
          alt='back to top'
          title='back to top'  
        />
      </button>
  </footer>)
}