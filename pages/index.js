import AboutPreview from "../components/aboutPreview/aboutPreview"
import Hero from "../components/hero"
import Head from 'next/head'
import DonationSection from "../components/donationSection"

export default function Home() {
  return (<>

    <Head>
      <title>
        Home - Christian Action, Inc.
      </title>
    </Head>
    <div className="flex flex-col gap-20">
      <Hero />
      <AboutPreview />
      <DonationSection />
    </div>
  </>
  )
}
