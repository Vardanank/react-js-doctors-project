import { DoctorInfo } from "../../../../Images/Svg";
import './DoctorInfoComponent.style.css'

export default function DoctorInfoComponent(props) {
    return (
        <div className="doctorInfoCard">
            <img src={props.avatar}/>
            <div className="docInfo">
                <div>{props.name}</div>
                <div>{props.profile}</div>
                <div>{props.experience}</div>
            </div>
        </div>

    )
}