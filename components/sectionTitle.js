export default function SectionTitle({title, children}){
  return <h2
    className="text-2xl font-baloo font-bold max-w-max px-8 border-solid border-t-2 border-blue-500 p-2 "
  >{children || title}</h2>
}