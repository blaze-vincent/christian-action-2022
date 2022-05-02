import Contact from "./contact"

const contacts = [
  {
    name: 'Jean Ballinger',
    email: 'jeanballingercpa@myiowacpa.com'
  },
  {
    name: 'Roger Hatteberg',
    email: 'rogerhatteberg@msn.com'
  },
  {
    name: 'Brice Hughes',
    email: 'pastor@zionuccburlington.com'
  },
  {
    name: 'James Miller',
    email: 'jameswmiller@craylawfirm.com'
  },
  {
    name: 'Tom Richert',
    email: 'tomtomrichett@gmail.com'
  },
  {
    name: 'John Riessen',
    email: 'jhriessen@gmail.com'
  },
  {
    name: 'Robert Ritson',
    email: 'robatbbt@hotmail.com'
  },
  {
    name: 'David Selmon',
    email: 'dselmon431@gmail.com'
  },
  {
    name: 'Susanne Smith',
    email: 'revses@aol.com'
  },
  {
    name: 'Marshal Walz',
    email: 'marshal_walz@msn.com'
  },
]

export default function ContactInformation(){
  return <div
    className="p-4 bg-blue-100 border-solid border-t-2 border-blue-300"
  >
    <h2
      className="text-xl font-semibold font-ibm-serif"
    >
      Contacts
    </h2>
    {
      contacts.map((contact, index) => {
        return <Contact name={contact.name} emailAddress={contact.email} key={index}/>
      })
    }
  </div>
}