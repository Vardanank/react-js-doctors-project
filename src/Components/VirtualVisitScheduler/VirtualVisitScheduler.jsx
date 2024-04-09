import "./VirtualVisitScheduler.style.css";
import { DoctorGeneralPhoto } from "../../Images/Svg";
import ButtonVisit from "./ButtonVisitComponent/ButtonVisit";
import { useContext } from "react";
import { TranslationContext } from "../../App";

export default function VirtualVisitScheduler() {
  const {t} = useContext(TranslationContext)
  
  return (
    <div className="secondContainer">
      <div className="VirtualVisitScheduler">
    <h1>{t.consultatin}</h1>
        <h3>
          Проконсультируйтесь сейчас или по предварительной записи со своего
          компьютера или c помощью нашего приложения, доступного в{" "}
          <span className="blueSpan">App Store</span> и
          <span className="blueSpan">Google Play</span>
        </h3>
        <div className="buttons">
          <ButtonVisit
            onClick={() => console.log(11111)}
            text={"Записаться"}
            style={{
              backgroundColor: "#FFF",
              color: "#56CCF2",
              marginRight: "10px",
            }}
          />
          <ButtonVisit
            onClick={() => console.log(2222222222222)}
            text={"Как это работает?"}
            style={{ backgroundColor: "#56CCF2", color: "white" }}
          />
        </div>
      </div>
      <div className="imageContainer">
        <img className="doctorImage" src={DoctorGeneralPhoto} />
      </div>
      
    </div>
  );
}
