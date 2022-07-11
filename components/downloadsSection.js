import SectionTitle from "./sectionTitle"

export default function DownloadsSection({resources}){
  return <div className="p-4">
    <SectionTitle>
      Resources
    </SectionTitle>
    <ul
      className="flex flex-col gap-2"
    >
      <li className="flex flex-col justify-between items-start">
        <p>
          Assistance Application
        </p>
        <div className="flex flex-col">

          {
            [
              {
                text: 'Microsoft Word document',
                url: '/resources/ChristianActionApplicationForm.docx'
              },
              {
                text: 'Adobe PDF',
                url: '/resources/ChristianActionApplicationForm.pdf'
              }
            ].map((obj, index) => {
              return <a
                href={obj.url}
                key={index }
                rel="ext"
                className="underline pl-4"
              >
                {obj.text}
              </a>
            })
          }
        </div>
      </li>
      <li>
        <a
          href="/resources/2020DownPaymentAssistanceHomeownerApplication.pdf"
          className="underline"
          rel="ext"
        >
          Down Payment Aid Application
        </a>
      </li>
      <li>
        <a
          href="https://www.seirpc.com/housing"
          className="underline"
          rel="ext"        >
          Southeast Iowa Regional Planning Commission Housing Department
        </a>
      </li>
      <li>
        <a
          href="https://www.investopedia.com/how-to-improve-your-credit-score-4590097"
          className="underline"
          rel="ext"
        >
          Improving Your Credit Score
        </a>
      </li>
    </ul>
  </div>
}