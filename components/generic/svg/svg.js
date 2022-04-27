//generic svg template for including static svg files
//created because certain SVGs had strange document-breaking behavior when not encapsulated

export default function SVG({src, className}){
  return <div 
    className={"relative w-24 h-24 min-w-[6rem] min-h-[6rem] overflow-hidden flex items-center justify-center " + className}
    >
      <img src={src} alt='' className="absolute w-full h-full left-0 top-0 p-1"/>
  </div>
}