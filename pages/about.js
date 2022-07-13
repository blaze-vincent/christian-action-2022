import Head from 'next/head'
import GraphicTile from '../components/graphicTile'
import SectionTitle from '../components/sectionTitle'

export default function About(){
  
  const partners = [
    {
      "name": "Bridges"
    },
    {
      "name": "Burlington Area Homeless Shelter",
      "website": "https://burlingtonareahomelessshelter.wordpress.com/"
    },
    {
      "name": "Burlington Council of Churches"
    },
    {
      "name": "Burlington Housing Partnership"
    },
    {
      "name": "Casebine Community Credit Union",
      "website": "https://casebine.com/"
    },
    {
      "name": "City of Burlington, IA",
      "website": "https://www.burlingtoniowa.org/"
    },
    {
      "name": "Community Action of Southeast Iowa",
      "website": "https://caofseia.org"
    },
    {
      "name": "Council of Churches"
    },
    {
      "name": "Cray Law Firm",
      "website": "https://www.craylawfirm.com"
    },
    {
      "name": "Hope Haven",
      "website": "https://hopehavencorp.com"
    },
    {
      "name": "Iowa Department of Economic Development",
      "website": "https://www.iowaeda.com"
    },
    {
      "name": "Low Rent Housing Agency of Burlington, Iowa"
    },
    {
      "name": "Messiah Lutheran Church"
    },
    {
      "name": "Southeast Iowa Regional Board of Realtors",
      "website": "https://www.southeastiowarealtors.com"
    },
    {
      "name": "Southeast Iowa Regional Planning Commission",
      "website": "https://www.seirpc.com/"
    },
    {
      "name": "Two Rivers",
      "website": "https://www.tworivers.bank/"
    },
    {
      "name": "Zion UCC",
      "website": "https://zionuccburlington.org"
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
      className="flex flex-col gap-4 p-4"
    >
      <SectionTitle>
        Our Partners and Sponsors
      </SectionTitle>
      <div
        className='flex flex-wrap'
      >
        {partners.map((partner, index) => {
          return <div
            key={index}
            className="pr-8 pb-3"
          >
            <a href={partner.website} className={partner.website && 'underline'}>{partner.name}</a>
          </div>
        })}
      </div>
    </div>
  </div>
}