import Link from 'next/link'
import SectionTitle from './sectionTitle'

export default function DonationSection(){
  return <div
    className=" flex flex-col gap-4 w-full max-w-screen-lg"
  >
    <div className='pl-4'>
      <SectionTitle title="Donations" />
    </div>
    <div
      className='w-full h-[20rem]'
    >
      <img src="/images/handshake.jpg" className='w-full h-full object-cover' alt=''/> 
    </div>
    <div
      className='flex flex-col gap-4 p-4 text-lg'
    >
      <p>Christian Action is primarily funded through donations.</p>
      <p>If you are considering donating, please reach out to Christian Action, Inc. through one of the contacts listed <Link href="/resources"><a className="underline">here</a></Link>.</p>
      <p>Your contribution may be tax-deductible within the limits prescribed by the law.</p>
    </div>
  </div>
}