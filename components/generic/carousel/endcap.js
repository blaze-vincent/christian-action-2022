import { useEffect, useRef } from "react"


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
  }, [] /*side doesn't ever change so no need for dependency*/)

  //material arrow icon
  return <svg 
    ref={element}
    className={"fill-stone-200 absolute " + sideClasses[side]}
    xmlns="http://www.w3.org/2000/svg" 
    height="24" 
    viewBox="0 0 24 24" 
    width="24"
    >
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </svg>
}