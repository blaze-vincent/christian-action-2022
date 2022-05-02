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
    className="w-full max-w-screen-lg"
  >

    {/* partners */}
    <div
      className="bg-blue-100 p-4"
    >
      <h2
        className="font-semibold text-2xl font-ibm-serif"
      >
        Our Partners and Sponsors
      </h2>
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