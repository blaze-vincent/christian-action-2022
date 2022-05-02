import { useEffect, useRef } from "react"
import Arrow from "../svg/arrow"


export default function Endcap({side = 'left', slidesCount}){

  const sideClasses = {
    'right': '', //have to handle position with JS, keeping entry to make options clear
    'left': 'right-[120%] rotate-180'
  }

  const element = useRef(null)
  useEffect(_ => {
    //position rightside cap 25% to right of last absolutely positioned slide
    if(side === 'right'){
      element.current.style.left = `calc(100% * ${slidesCount} + 20%)`
    }
  }, [side, slidesCount] /*side doesn't ever change so no need for dependency*/)

  //material arrow icon
  return <Arrow
    ref={element}
    className={sideClasses[side]}
  />
}