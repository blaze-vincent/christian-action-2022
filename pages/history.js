import SectionTitle from "../components/sectionTitle";
import OutlineTree from "../components/outlineTree";
import Head from 'next/head'

function Article({children, subsection = false}){
  const className = `flex flex-col text-lg ${subsection ? "gap-2 my-2" : "gap-4"}`
  
  return <article
    className={className}
  >
    {children}
  </article>
}

export default function History(){

  // const sections = [
  //   {
  //     name: 'Origin',
  //     fragment: '#origin'
  //   },
  //   {
  //     name: 'Sponsorship',
  //     fragment: '#sponsorship'
  //   },
  //   {
  //     name: 'Incorporation',
  //     fragment: '#incorporation'
  //   },
  //   {
  //     name: 'Board of Directors',
  //     fragment: '#board'
  //   },
  //   {
  //     name: 'Membership',
  //     fragment: '#membership'
  //   },
  //   {
  //     name: 'Funding',
  //     fragment: '#funding'
  //   },
  //   {
  //     name: 'Activities',
  //     fragment: '#activities',
  //     subsections: [
  //       {
  //         name: 'Early, 1969-1984',
  //         fragment: '#early'
  //       },
  //       {
  //         name: 'Mid-term, 1985-2008',
  //         fragment: '#mid'
  //       },
  //       {
  //         name: 'Late-term, 2009-Present',
  //         fragment: '#late'
  //       },
  //       {
  //         name: 'Future',
  //         fragment: '#future'
  //       }
  //     ]
  //   }
  // ]

  return <div
    className="w-full max-w-screen-lg flex flex-col gap-16 px-4 mb-40"
  >

    <Head>
      <title>
        History - Christian Action, Inc.
      </title>
    </Head>

    {/* outline */}
    {/* <div>
      <h3
        className="text-lg font-medium"
      >History Outline</h3>
      <OutlineTree tree={sections} />
    </div> */}

    <Article>
      <SectionTitle id="origin">Origin</SectionTitle>
      <p>
        The organization came about as the result of a successful effort to assist a homeless family to buy a home. This was accomplished by extending capital to the family via a contract purchase arrangement, thereby avoiding the family&apos;s exposure to normal banking underwriting requirements.
      </p>
    </Article>

    <Article>
      <SectionTitle id="sponsorship">Sponsorship</SectionTitle>
      <p>
        Participants in the initial endeavor determined that the approach they had used on the pilot project were repeatable. They petitioned the congregations of Messiah Lutheran and Zion United Church of Christ to support a continuing mission that would be facilitated by a new non-profit corporation that would prioritize housing.
      </p>
    </Article>

    <Article>
      <SectionTitle id="incorporation">Incorporation</SectionTitle>
      <p>
        Christian Action, Inc. completed its incorporation as a 501(c)(3) entity on June 19, 1968. The Constitution and By-laws of the organization formalized the sponsors&apos; roles both as sources of leadership and initial-and-ongoing funders. While the charter of the organization permitted a general range of charitable purposes, it was understood by the supporters that housing would be prioritized.
      </p>
    </Article>
    
    <Article>
      <SectionTitle id="board">Board of Directors</SectionTitle>
      <p>
        Christian Action, Inc. is managed by a Board of Directors ranging from 6-25 persons. Its initial composition was drawn from the congregations of the sponsoring churches, but eventually diversified to include members from throughout the community. Directors receive no compensation for their involvement. Furthermore, Christian Action, Inc. has no paid employees and utilizes contracted services only when specific needs occur, such as for accounting.
      </p>
    </Article>

    <Article>
      <SectionTitle id="membership">Membership</SectionTitle>
      <p>
        There are two classes of membership that are open to all. These are the Participating Membership and the Sustaining Membership. The former includes those persons that apply to and are approved by the Board of Directors that wish to be actively involved and working for the objects and purposes of the Corporation. The latter includes those persons that apply to and are approved by the Board of Directors as financial contributors. Participating Members have voting rights. Supporting Members have no voting rights. 
      </p>
    </Article>

    <Article>
      <SectionTitle id="funding">Funding</SectionTitle>
      <p>
        Christian Action, Inc. has relied on donations and rental income to support its mission. The former includes charitable giving and the receipt of the assets of Burlington Housing Partnership (BHP) when it dissolved. The latter includes rental receipts from a property that was included in the foundation from BHP and a property that was forfeited back to Christian Action, Inc. 
      </p>
    </Article>
    
    <Article>
      <SectionTitle id="activities">History</SectionTitle>
      
      <Article subsection>
        <SectionTitle subsection id="early">Early, 1969-1984</SectionTitle>
        <p>
          Christian Action, Inc. confined its involvement to home ownership, via contract sales, and the provision of emergency assistance for housing and housing-related activities for many years. Because the needs of both of the areas of concentration were considerable, in-depth debate was essential to achieve a balanced use of donated capital. Furthermore, a smooth flow of repayments was essential for the home ownership model to continue to work, since donations were not large enough to permit the target homes to be acquired in advance outright. Each activity required Christian Action, Inc. to borrow the funds via a companion mortgage and the make the home available to the family on contract. All sales have been at cost.
        </p>
      </Article>

      
      <Article subsection>
        <SectionTitle subsection id="mid">Mid-term, 1985-2008</SectionTitle>
        <p>
          Changes in pricing and home financing accelerated beginning in the 1970s and never stopped as successive Presidential administrations promoted the expansion of home ownership. Prices increased, which required the infusion of larger amounts of capital, while access to financing was eased by the availability of insured mortgages and relaxed underwriting standard. These trends reduced the utility of the &quot;traditional program&quot; and made potential client base smaller and poorer. In response, Christian Action, Inc. sought out and received several grants through the state-administered HOME program. The project designs included down payment assistance and &quot;acquisition with rehabilitation for resale&quot;. These projects would eventually assist more than 30 families in Burlington.
        </p>
      </Article>

      
      <Article subsection>
        <SectionTitle subsection id="late">Late-term, 2009-Present</SectionTitle>
        <p>
          Beyond market influences, the complexity and time requirements of the HOME Program, which continued to be prioritized, left little capacity for other involvements and the utilization of the contract sales design waned. The design of Christian Action, Inc.&apos;s HOME project was set up to provide &quot;gap&quot; funding for each activity including a combination of down payment assistance, mortgage write-down, and rehabilitation financing. In 2008, the Great Recession occurred. It disrupted the nation&apos;s capital markets and temporarily closed the insured marketplace, effectively depriving lower-income families of access to mortgage financing. Because client families were effectively frozen out, the approved HOME design was no longer viable and the organization was eventually required to surrender its last award, a loss of $299,000. Subsequently, the organization has sought out partnership opportunities to continue the mission. Examples include funding for the Burlington Homeless Shelter and joint ventures with the Southeast Iowa Regional Planning Commission. In addition, Christian Action, Inc. has resumed its traditional activities.
        </p>
      </Article>

      
      <Article subsection>
        <SectionTitle subsection id="future">Future</SectionTitle>
        <p>
          This story is yet to be determined, but various trends are emerging that undoubtedly support a continuing role for Christian Action, Inc. in the housing arena. These include rising rents, escalating home pricing, and the lack of quality inventory. While interest rates remain low by historic standards, these are likely to rise substantially and create further stresses and the need for appropriate societal responses.
        </p>  
      </Article>
    </Article>
  </div>
}