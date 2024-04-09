import ApponimentDoctor from "../../Components/BodyComponents/AponimentDoctor/ApponimentDoctor";
import HeaderComponent from "../../Components/HeaderComponets/HeaderComponent";
import VirtualVisitScheduler from "../../Components/VirtualVisitScheduler/VirtualVisitScheduler";
import DoctorCard from "../../Components/BodyComponents/DoctorCard/DoctorCard";
import mockData from "../../MockData/Constants.js";
import VisitsButton from "../../Components/BodyComponents/VisitsButton/VisitsButton.jsx";
import RecordComponent from "../../Components/BodyComponents/RecordComponent/RecordComponent.jsx";
export function MainPage() {
  return (
    <>
      <VirtualVisitScheduler />
      <ApponimentDoctor />
      <VisitsButton/>
      <RecordComponent/>

      {mockData?.meetingList?.map((item, index) => {
        return <DoctorCard key={item + index} {...item} />;
      })}
    </>
  );
}
