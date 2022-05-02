import ContactInformation from "../components/contactInformation/contactInformation";
import DownloadsSection from "../components/downloadsSection";
import Head from 'next/head'

export default function Resources(){
  return <div
    className="w-full max-w-screen-lg flex flex-col gap-4"
  >

    <Head>
      <title>
        Resources - Christian Action, Inc.
      </title>
    </Head>

    <DownloadsSection />
    <ContactInformation />
  </div>
}