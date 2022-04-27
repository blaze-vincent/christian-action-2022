import Image from "next/image";
import { useRef, useEffect } from "react";

//groups image and textual content for display in a carousel
export default function Slide({
  imgSrc = '/images/sky2.jpeg',
  order = 0,
}){

  const container = useRef(null);
  useEffect(_ => {
    //offset from left by parent width * order
    container.current.style.left = `${container.current.parentElement.getBoundingClientRect().width * order}px`
  })

  return <div ref={container} className="absolute w-full h-full">
    <Image draggable={false} src={imgSrc} layout='fill' objectFit="cover"  alt='' />
  </div>
}