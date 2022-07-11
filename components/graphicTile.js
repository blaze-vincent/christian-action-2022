export default function GraphicTile({imgSrc}){
  return <div
    className='w-full h-[25rem]'
  >
    <img src={imgSrc} alt='' className='w-full h-full object-cover'/>
  </div>
}