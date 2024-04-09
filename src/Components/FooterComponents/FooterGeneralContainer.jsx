import "./FooterGeneralContainer.style.css";
import {
  HeaderLogo,
  instagram,
  facebook,
  youtube,
  AlloDocWhite,
} from "../../Images/Svg";

function FooterGeneralContainer() {
  return (
    <div className="general-container">
      <div className="general-info">
        <img className="header-logo" src={AlloDocWhite} />
        <p>
          Онлай- консульации специалистов врачей, то что предлагает данный
          сервис.В нашем веб и мобильном приложении вы найдете врачей экспертов,
          которые окажут вам персонализированную помощь онлайн 24/7
        </p>
        <div className="logos-container">
          <img src={instagram} />
          <img src={facebook} />
          <img src={youtube} />
        </div>
        <div className="download-icons"></div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default FooterGeneralContainer;
