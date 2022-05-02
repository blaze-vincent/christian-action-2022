import AboutPreview from "../components/aboutPreview/aboutPreview"
import Hero from "../components/hero"
import Head from 'next/head'

export default function Home() {
  return (<>

    <Head>
      <title>
        Home - Christian Action, Inc.
      </title>
    </Head>

    <Hero />
    <AboutPreview />

    {/* donation information, not enough to warrant its own page */}
    <div
      className="bg-blue-200 p-4 flex flex-col gap-4 w-full max-w-screen-lg"
    >
      <h2
        id='give'
        className="text-2xl font-medium font-ibm-serif"
      >Give</h2>
      <p>Christian Action is primarily funded through donations.</p>
      <p>If you are considering donation, please reach out to Christian Action, Inc. through one of the contacts listed <a className="underline" href="/resources">here</a>.</p>
      <p>Your contribution may be tax-deductible within the limits prescribed by the law.</p>
    </div>
  </>
  )
}
