import SectionTitle from "./sectionTitle";
import { useState } from 'react'

function SectionBlinds({children}){
  const [sectionHidden, setSectionHidden] = useState(true);

  return <span className="">
    {sectionHidden 
    ? <button
      className="px-2 font-medium"
      onClick={_ => {setSectionHidden(false)}}
    >
      Show more
    </button> 
    : " " + children}
  </span>
}

export default function TestimonialSection(){
  return <div className="p-4.">
    <SectionTitle title='Testimonials'/>
    <p className="text-lg">
      I connected with Christian Action when I could not afford to rent a place big enough for myself and six children.  
      For a brief time, we stayed in a shelter that was no longer in use.  
      I could not manage to buy a home on my own with the interest rates, security required, and down payment.
      <SectionBlinds>  
        A close friend and mentor knew about Christian Action, and assisted me with the connection and getting things organized and going.  
        Christian Action helped me find a house, and made sure that all repairs were completed.  
        Christian Action managed very low rate mortgage and closing costs.  
        When more repairs were needed that were over my budget, they assisted, and I repaid those amounts at a rate I could afford.  
        Christian Action has been such a blessing to myself and my children.  
        A couple of years ago, I made my last mortgage payment to Christian Action, and now I own my house.  
        This would not have been possible without the aid of Christian Action.  
        My children and I thank Christian Action very much.
      </SectionBlinds>
    </p>
  </div>
}