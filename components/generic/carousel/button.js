export default function CarouselButton({selected, setDisplayedSlide, index}){

  const selectedStyle = {true: 'bg-neutral-800'}

  return <button
    className={'w-6 h-6 bg-white transition-colors rounded-full ' + selectedStyle[selected]}
    onClick={_ => setDisplayedSlide(index)}
  />
}