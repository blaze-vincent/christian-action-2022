import Head from "next/head"
import Header from './header'
import Footer from './footer'

export default function Layout({children}){
  return (<div
    className="bg-white font-ibm-sans text-neutral-800"
  >
    <Head>
      <title>nextjs w/ tailwindcss</title>
      <meta name="description" content="bv nextjs template with tailwindcss" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main
      className="h-max flex flex-col gap-6 justify-start items-center py-2"
    >{children}</main>

    <Footer />
    </div>)
}