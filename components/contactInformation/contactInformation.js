import SectionTitle from "../sectionTitle"
import Contact from "./contact"

const contacts = [
  {
    name: 'Brice Hughes',
    email: 'pastor@zionuccburlington.com'
  },
  {
    name: 'Reverend David Selmon',
    email: 'dselmon431@gmail.com'
  },
  {
    name: 'John Riessen',
    email: 'jhriessen@gmail.com'
  },
  {
    name: 'Marshal Walz',
    email: 'marshal_walz@msn.com'
  },
  {
    name: 'Reverend Orlando "Ray" Dial',
    email: 'odial5542@msn.com'
  },
  {
    name: 'Robert Ritson',
    email: 'robatbbt@hotmail.com'
  },
  {
    name: 'Roger Hatteberg',
    email: 'rogerhatteberg@msn.com'
  },
  {
    name: 'Reverend Susanne Smith',
    email: 'revses@aol.com'
  },  
  {
    name: 'Tom Richert',
    email: 'tomtomrichett@gmail.com'
  },
]

export default function ContactInformation(){
  return <div
    className="p-4"
  >
    <SectionTitle>
      Contacts
    </SectionTitle>
    {
      contacts.map((contact, index) => {
        return <Contact name={contact.name} emailAddress={contact.email} key={index}/>
      })
    }
  </div>
}