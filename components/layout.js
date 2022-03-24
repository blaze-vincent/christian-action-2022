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
      className="h-max min-h-screen"
    >{children}</main>

    <Footer />
    </div>)
}