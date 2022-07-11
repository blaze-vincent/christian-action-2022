import SectionTitle from "../sectionTitle"
import Contact from "./contact"

const contacts = [
  {
    name: 'Roger Hatteberg',
    email: 'rogerhatteberg@msn.com'
  },
  {
    name: 'Brice Hughes',
    email: 'pastor@zionuccburlington.com'
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
    name: 'Reverend David Selmon',
    email: 'dselmon431@gmail.com'
  },
  {
    name: 'Reverend Susanne Smith',
    email: 'revses@aol.com'
  },
  {
    name: 'Reverend Orlando "Ray" Dial',
    email: 'odial5542@msn.com'
  },
  {
    name: 'Marshal Walz',
    email: 'marshal_walz@msn.com'
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