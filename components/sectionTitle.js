export default function SectionTitle({title, children, subsection = false, id}){
  const className = `
    font-baloo max-w-max border-solid border-t-2 
    ${
      subsection 
      ? "text-xl font-medium p-1 px-4 border-blue-300" 
      : "text-2xl font-bold p-2 px-8 border-blue-500"
    }
  `;

  return <h2
    id={id}
    className={className}
  >{children || title}</h2>
}