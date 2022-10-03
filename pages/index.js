import AboutPreview from "../components/aboutPreview/aboutPreview"
import Hero from "../components/hero"
import Head from 'next/head'
import DonationSection from "../components/donationSection"
import TestimonialSection from '../components/testimonialSection'

export default function Home() {
  return (<>

    <Head>
      <title>
        Home - Christian Action, Inc.
      </title>
    </Head>
    <div className="flex flex-col gap-20 max-w-screen-lg">
      <Hero />
      <AboutPreview />
      <TestimonialSection />
      <DonationSection />
    </div>
  </>
  )
}
