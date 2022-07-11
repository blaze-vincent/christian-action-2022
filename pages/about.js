import Head from 'next/head'
import GraphicTile from '../components/graphicTile'
import SectionTitle from '../components/sectionTitle'

export default function About(){
  
  const partners = [
    {
      name: "Bridges",
    },
    {
      name: "Casebine Community Credit Union",
      website: 'https://casebine.com/'
    },
    {
      name: "Two Rivers",
      website: 'https://www.tworivers.bank/'
    },
    {
      name: "Council of Churches",
    },
    {
      name: "Regional Planning Commission",
      website: 'https://www.seirpc.com/'
    },
    {
      name: "City of Burlington, IA",
      website: 'https://www.burlingtoniowa.org/'
    }
  ]

  return <div
    className="w-full max-w-screen-lg flex flex-col gap-8"
  >

    <Head>
      <title>
        About - Christian Action, Inc.
      </title>
    </Head>

    <GraphicTile imgSrc='/images/givingkeys.jpg' />

    <div
      className='p-4 flex flex-col gap-4'
    >
      <SectionTitle>
        About Christian Action, Inc.
      </SectionTitle>
      <p>
        Christian Action, Inc. serves primarily to help people get homes.
      </p>
      <p>
        Our emphasis is on helping people get into homes, rather than making homes available to people.
      </p>
      <p>
        We tailor our methods of help to the needs of each individual client.
      </p>
      <p>
        Some ways we&apos;ve helped our clients before include making zero-interest loans available, providing partial down payments on houses, and seeking out home repairs.
      </p>
    </div>

    {/* partners */}
    <div
      className="p-4"
    >
      <SectionTitle>
        Our Partners and Sponsors
      </SectionTitle>
      {partners.map((partner, index) => {
        return <div
          key={index}
          className="odd:bg-blue-200 p-2"
        >
          <a href={partner.website} className={partner.website && 'underline'}>{partner.name}</a>
        </div>
      })}
    </div>
  </div>
}