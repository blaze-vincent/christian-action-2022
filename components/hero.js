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
        Christian Action is a Burlington nonprofit whose mission is to help Burlington families buy affordable homes. Since 1968, Christian Action has partnered with state and local agencies to support families in making down payments, managing purchase contracts, and maintaining affordable homes.
      </p>
    </div>
  </div>
}