import Carousel from "./carousel/carousel";

export default function Hero(){
  return <div className="w-full max-w-screen-lg grid sm:grid-cols-3 gap-2">
    <Carousel 
      className='sm:col-span-2'
    />
    <div
      className="bg-blue-200 p-4 h-max overflow-auto flex flex-col gap-4"
    >
      <h2 className="font-ibm-serif font-medium text-2xl">
        We&apos;re Here to Help
      </h2>
      <p>
        Christian Action, Inc. is committed to helping the underprivileged people of Burlington, Iowa obtain housing. We specialize our means of assistance to the needs of the individual.
        <a 
          href='/resources/ChristianActionApplicationForm.pdf'
          className="underline mx-2"
          target="_blank"
        >Apply for help today.</a>
      </p>
    </div>
  </div>
}