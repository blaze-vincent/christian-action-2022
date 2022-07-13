import Link from 'next/link';

export default function OutlineTree({tree, subsection = false}){

  const className = `flex flex-col pl-4 ${subsection ? "gap-1 text-sm mt-1" : "gap-2"}`  
  return <ol
    className={className}
  >
    {
      tree.map(item => {
        return <li>
          <Link href={item.fragment}>
              <a className='underline'>
                {item.name}
              </a>
          </Link>
          {
            item.subsections && <OutlineTree tree={item.subsections} subsection /> 
          }
        </li>  
      })
    }
  </ol>
}