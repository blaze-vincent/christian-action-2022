import Carousel from "./generic/carousel/carousel";

export default function Hero(){
  return <div className="w-full max-w-screen-lg m-auto grid sm:grid-cols-3 gap-2">
    <Carousel 
      className='sm:col-span-2'
    />
    <div
      className="bg-blue-400 p-4 flex flex-col gap-4"
    >
      <h2 className="font-ibm-serif font-medium text-xl">
        Lorem Ipsum
      </h2>
      <p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      </p>
    </div>
  </div>
}