export default function DownloadsSection({resources}){
  return <div className="p-4 bg-blue-100">
    <h2
      className="font-semibold text-xl font-ibm-serif"
    >Resources</h2>
    <ul
      className="flex flex-col gap-2"
    >
      <li className="flex flex-col xs:flex-row justify-between xs:gap-2 xs:items-end items-start">
        <p>
          Assistance Application
        </p>
        <div className="flex flex-row gap-4 items-center">

          {
            [
              {
                text: '.docx',
                url: '/resources/ChristianActionApplicationForm.docx'
              },
              {
                text: '.pdf',
                url: '/resources/ChristianActionApplicationForm.pdf'
              }
            ].map((obj, index) => {
              return <a
                href={obj.url}
                key={index }
                target="_blank"
                className="bg-blue-500 text-white font-medium px-2 py-1"
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
          target="_blank"
        >
          Down Payment Aid Application
        </a>
      </li>
      <li>
        <a
          href="https://www.seirpc.com/housing"
          className="underline"
          target="_blank"
        >
          Southeast Iowa Regional Planning Commission Housing Department
        </a>
      </li>
    </ul>
  </div>
}