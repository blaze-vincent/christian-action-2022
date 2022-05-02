import {useState} from 'react';

export default function Contact({name, emailAddress}){
  const [emailHidden, setEmailHidden] = useState(true);

  return <div className="relative odd:bg-blue-200 p-2 flex sm:flex-row flex-col items-center justify-between">
    {name}
    {
    emailHidden && <button
      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 font-medium"
      onClick={e => {setEmailHidden(!emailHidden)}}
    >get email</button>
    || <a 
      href={'mailto:'+emailAddress}
      className='underline px-2 py-1'
    >{emailAddress}</a>
    }
  </div>
}