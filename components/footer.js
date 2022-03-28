import Arrow from "./generic/svg/arrow";

export default function Footer(){
  return (<footer className="bg-stone-800 text-white p-4 mt-4">
    <div
      className="w-full max-w-screen-lg m-auto"
    >
      back to top
      <button
        
      >
        <Arrow 
          className='rotate-90 relative w-8 h-8' 
          alt='back to top'
          title='back to top'  
        />
      </button>
    </div>
  </footer>)
}