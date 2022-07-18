import Carousel from "./carousel/carousel";
import SectionTitle from "./sectionTitle";

export default function Hero(){
  return <div className="w-full max-w-screen-lg grid sm:grid-cols-3 gap-2">
    <Carousel 
      className='sm:col-span-2'
    />
    <div
      className="px-4 h-max overflow-auto flex flex-col gap-4"
    >
      <SectionTitle>
        We&apos;re Here to Help
      </SectionTitle>
      <p
        className="text-lg"
      >
        Christian Action, Inc. is committed to helping the families of Burlington, Iowa gain home ownership. We specialize our means of assistance to the needs of the individual.
        <a 
          href='/resources/ChristianActionApplicationForm.pdf'
          className="underline mx-2"
          target="_blank"
        >Apply for help today.</a>
      </p>
    </div>
  </div>
}