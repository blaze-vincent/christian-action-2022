import Carousel from "./generic/carousel/carousel";

export default function Hero(){
  return <div className="w-full">
    <div 
      className="w-full max-w-screen-lg bg-blue-500 m-auto p-4"
    >
      <p>Home</p>
    </div>
    <Carousel />
  </div>
}