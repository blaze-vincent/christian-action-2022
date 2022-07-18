import SectionTitle from "./sectionTitle"

export default function DownloadsSection(){

  const resources = [
    {
      name: 'Assistance Application',
      url: '/resources/ChristianActionApplicationForm.pdf' 
    },
    {
      name: 'Down Payment Aid Application',
      url: '/resources/2020DownPaymentAssistanceHomeownerApplication.pdf' 
    },
    {
      name: 'Southeast Iowa Regional Planning Commission Housing Department',
      url: 'https://www.seirpc.com/housing' 
    },
    {
      name: 'Improving Your Credit Score',
      url: 'https://www.investopedia.com/how-to-improve-your-credit-score-4590097' 
    },
  ]

  return <div className="flex flex-col gap-4 p-4">
    <SectionTitle>
      Resources
    </SectionTitle>
    <ul
      className="flex flex-col gap-2"
    >
      {
        resources.map((obj, index) => {
          return <li key={index}>
            <a
              href={obj.url}
              className="underline"
              rel="ext"
            >
              {obj.name}  
            </a>
          </li>
        })
      }
      
    </ul>
  </div>
}