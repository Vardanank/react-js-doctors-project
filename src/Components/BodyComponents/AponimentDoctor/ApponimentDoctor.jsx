import { AnimatedDoctor } from "../../../Images/Svg";
import "./ApponimentDoctor.style.css";

export default function ApponimentDoctor() {
  return (
    <div className="apponiment">
      <div className="animeDoctor">
        <img src={AnimatedDoctor} />
      </div>
      <div className="infoContainer">
        <h1>Записаться к врачу </h1>
        <h3>Более 1500 врачей и более 50 разных специализаций</h3>
        <ul>
          <li>Прием в удобное для вас время, без визита в клинику</li>
          <li>Врачи с опытом работы более 8 лет</li>
          <li>
            Понятно объясним причину недуга и дадим подробную рекомендацию
          </li>
        </ul>
        <button className="textButton">Записаться</button>
      </div>
    </div>
  );
}
