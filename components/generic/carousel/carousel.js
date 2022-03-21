import { useRef, useState, useEffect } from "react"
import Slide from "./slide"

export default function Carousel({
  slides = [
    {
      imgSrc: '/images/citrus.webp',
    },
    {
      imgSrc: '/images/sky.webp',
    },
  ]
}){

  const slidesContainer = useRef(null)
  const [displayedSlide, setDisplayedSlide] = useState(0)
  useEffect(_ => {
    slidesContainer.current.style.transform = `translateX(-${displayedSlide * 100}%)`
  }, [displayedSlide])
  
  
  //frame
  return <div
    className="
    relative max-w-2xl w-full h-80 overflow-hidden
    "
  >
    {/*slides container*/}
    <div
      ref={slidesContainer}
      className="h-full w-full 
        flex flex-row gap-0
        transition-transform
        "
    >
      {
        slides.map((slideObj, index) => {
          return <Slide imgSrc={slideObj.imgSrc} key={index} order={index}/>
        })
      }
    </div>

    {/* slider buttons container*/}
    <div
      className="flex flex-row gap-8 absolute bottom-4 w-full justify-center"
    >
      {slides.map((_, index) => {
        //slider buttons x3
        return <button 
          key={index}
          className='w-6 h-6 bg-white rounded-full border-solid border-white border-0 hover:border-2 hover:bg-neutral-700' 
          onClick={_ => setDisplayedSlide(index)}  
        />
      })}
    </div>
  </div>
}