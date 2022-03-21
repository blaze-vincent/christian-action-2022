import Head from "next/head"
import Header from './header'
import Footer from './footer'

export default function Layout({children}){
  return (<div
    className="bg-white"
  >
    <Head>
      <title>nextjs w/ tailwindcss</title>
      <meta name="description" content="bv nextjs template with tailwindcss" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main>{children}</main>

    <Footer />
    </div>)
}