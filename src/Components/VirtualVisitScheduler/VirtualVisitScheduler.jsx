import "./VirtualVisitScheduler.style.css";
import { DoctorGeneralPhoto } from "../../Images/Svg";
import ButtonVisit from "./ButtonVisitComponent/ButtonVisit";

export default function VirtualVisitScheduler() {
  return (
    <div className="secondContainer">
      <div className="VirtualVisitScheduler">
        <h1>Онлайн консультации от врачей специалистов 24/7</h1>
        <h3>
          Проконсультируйтесь сейчас или по предварительной записи со своего
          компьютера или c помощью нашего приложения, доступного в <span className="blueSpan">App Store</span> и
          <span className="blueSpan">Google Play</span>
        </h3>
        <ButtonVisit style={{ color: 'blue' }}>{'Записаться'}</ButtonVisit>

      </div>
      <img src={DoctorGeneralPhoto} />

      
    </div>
  );
}
