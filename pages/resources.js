import ContactInformation from "../components/contactInformation/contactInformation";
import DownloadsSection from "../components/downloadsSection";

export default function Resources(){
  return <div
    className="w-full max-w-screen-lg flex flex-col gap-4"
  >
    <DownloadsSection />
    <ContactInformation />
  </div>
}