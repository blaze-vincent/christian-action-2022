import SVG from "../generic/svg/svg";

export default function Section({imgSrc, textContent, }){

  return <div
    className="flex flex-row gap-4 w-full items-end pr-4"
  >
    <SVG src={imgSrc} />
    <p
      className="text-lg max-w-xl"
    >{textContent}</p>
  </div>
}