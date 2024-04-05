import DoctorInfoComponent from "./DoctorInfoComponent/DoctorInfoComponent";
import "./DoctorCard.style.css";
import {
  Clock,
  KalendarIcon,
  MessageIcon,
  VideoCameraIcon,
} from "../../../Images/Svg";
export default function DoctorCard({ doctor, meeting }) {
  return (
    <div className="doctorCard">
      <div className="rowContainer">
        <div className="meetingInfoContainer">
          <div className="meetingInfoItem">
            <img src={KalendarIcon} />
            <div> {meeting.date}</div>
          </div>
          <div className="meetingInfoItem">
            <img src={Clock} />
            <div>{meeting.time}</div>
          </div>
          <div className="meetingInfoItem">
            <img
              src={
                meeting.connectType === "chat" ? MessageIcon : VideoCameraIcon
              }
            />
            <div>{meeting.connectType}</div>
          </div>
        </div>
        <div className="meetingStatusContainer">{meeting.status}</div>
      </div>
      <div className="rowContainer">
        <DoctorInfoComponent {...doctor} />
      </div>
    </div>
  );
}
