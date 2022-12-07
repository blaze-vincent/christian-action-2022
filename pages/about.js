import Head from 'next/head'
import CallToAction from '../components/callToAction'
import GraphicTile from '../components/graphicTile'
import SectionTitle from '../components/sectionTitle'

export default function About(){
  
  const partners = [
    {
      "name": "Bridges out of Poverty",
      "website": 'https://burlingtonbuildingbridges.org/'
    },
    {
      "name": "Burlington Area Homeless Shelter",
      "website": "https://burlingtonareahomelessshelter.wordpress.com/"
    },
    {
      "name": "Burlington Area Council of Churches"
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
      "name": "Low Rent Housing Agency of Burlington, Iowa",
      "website": "https://www.rentassistance.us/li/low-rent-housing-agency-section-8"
    },
    {
      "name": "Messiah Lutheran Church",
      "website": 'https://messiahburlington.org/'
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
      "name": "Two Rivers Bank and Trust",
      "website": "https://www.tworivers.bank/"
    },
    {
      "name": "Zion United Church of Christ",
      "website": "https://zionuccburlington.org"
    }
  ]

  return <div
    className="w-full max-w-screen-lg flex flex-col gap-8 text-lg"
  >

    <Head>
      <title>
        About - Christian Action, Inc.
      </title>
    </Head>

    <GraphicTile imgSrc='/images/house-sold-2.jpg' />

    <div
      className='p-4 flex flex-col gap-4'
    >
      <SectionTitle>
        About Christian Action, Inc.
      </SectionTitle>
      <p>
        Christian Action, Inc. serves primarily to help people buy their own homes.
      </p>
      <p>
        Our emphasis is on helping people buy homes, rather than making homes available to people.
      </p>
      <p>
        We tailor our methods of help to the needs of each individual client.
      </p>
      <p>
        Some ways we&apos;ve helped our clients before include making zero-interest loans available, providing partial down payments on houses, and managing home repairs.
      </p>
      <CallToAction href='/history'>
        Read about our history
      </CallToAction>
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