//known issues:
//  images must be resized on viewport resize



import { useRef, useState, useEffect } from "react"
import CarouselButton from "./button"
import Endcap from "./endcap"
import Slide from "./slide"

export default function Carousel({
  className,
  slides = [
    {
      imgSrc: '/images/hands.jpg',
    },
    {
      imgSrc: '/images/paperwork.jpg',
    },
    {
      imgSrc: '/images/house.jpg',
    },
  ]
}) {

  const slidesContainer = useRef(null)
  const [displayedSlide, setDisplayedSlide] = useState(0)
  useEffect(_ => {
    //edge cases (literally lol)
    if(displayedSlide < 0){
      setDisplayedSlide(slides.length - 1)
    } else if (displayedSlide > (slides.length - 1)){
      setDisplayedSlide(0)
    } 
    
    else {
      slidesContainer.current.style.transform = `translateX(-${displayedSlide * 100}%)`
    }
    slidesContainer.current.style.transition = 'transform 0.5s'

  }, [displayedSlide])

  //correct image position on screen size change
  useEffect(_ => {
    window.addEventListener('resize', _ => {

    })
  }); 

  //grab controls
  const [clickDetected, setClickDetected] = useState(false)
  const [grabX, setGrabX] = useState(null)

  const handlePointerUp = e => {
    slidesContainer.current.style.transition = 'transform 0.5s'
    slidesContainer.current.style.cursor = 'grab'

    if(grabX){
      const dragDistance = e.clientX - grabX
      //if slide is dragged over a quarter a slides distance
      if(Math.abs(dragDistance) > (0.2 * slidesContainer.current.parentElement.getBoundingClientRect().width)){
        //dragged right to left
        if(dragDistance < 0){
          setDisplayedSlide(displayedSlide + 1)
        } else {
          //dragged left to right
          setDisplayedSlide(displayedSlide - 1)
        }
      } else {
        //center selected slide in frame if a new one isnt chosen
        slidesContainer.current.style.transform = `translateX(-${displayedSlide * 100}%)`
      }
    }

    setClickDetected(false)
  }

  //frame
  return <div
    className={" relative w-full h-[25rem] overflow-hidden bg-stone-800 " + className}
  >

    {/*slides container*/}
    <div
      ref={slidesContainer}
      className="h-full w-full 
        flex flex-row items-center gap-0
        cursor-grab
        "
      onPointerDown={e => {
        e.preventDefault()
        slidesContainer.current.style.transition = ''
        slidesContainer.current.style.cursor = 'grabbing'
        setClickDetected(true)
        setGrabX(e.clientX)
      }}
      onPointerUp={e => {
        setGrabX(null)
        handlePointerUp(e)
      }}
      onPointerLeave={e => {
        handlePointerUp(e)
      }}
      onPointerEnter={e => {
        setGrabX(null)
      }}

      onPointerMove={e => {
        if (clickDetected) {
          slidesContainer.current.style.transform = `translateX(calc(-${displayedSlide * 100}% + ${e.clientX - grabX}px))`
        }
      }}
    >

      {/*endcap*/}
      <Endcap />

      {
        slides.map((slideObj, index) => {
          return <Slide imgSrc={slideObj.imgSrc} key={index} order={index} />
        })
      }

      {/*endcap*/}
      <Endcap side='right' slidesCount={slides.length} />

    </div>

    {/* slider buttons container*/}
    <div
      className="flex flex-row gap-8 absolute bottom-4 w-full justify-center"
    >
      {slides.map((_, index) => {
        //slider buttons
        return <CarouselButton 
          key={index} 
          selected={displayedSlide === index}
          index={index}
          setDisplayedSlide={setDisplayedSlide}  
        />
      })}
    </div>
  </div>
}