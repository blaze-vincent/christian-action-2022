import Section from "./section"
import SectionTitle from "../sectionTitle"
import CallToAction from "../callToAction"

export default function AboutPreview(){
  return <div
    className="w-full max-w-screen-lg flex flex-col gap-4 text-lg"
  >
    <div className="pl-4">
      <SectionTitle title="About us" />
    </div>
    <Section imgSrc={'/svg/people.svg'} textContent='Our services are intended for those in need of housing and loan support in Burlington.'/>
    <Section imgSrc={'/svg/help.svg'} textContent='We aid people in achieving a comfortable living situation. The services we offer include partial down payments and zero-interest loans.'/>
    <Section imgSrc={'/svg/house.svg'} textContent='Christian Action, Inc. has helped hundreds of Burlington families acquire housing.'/>
    <div className="pl-4">
      <CallToAction href='/about'>
        Read more about us
      </CallToAction>
    </div>
    
  </div>
}