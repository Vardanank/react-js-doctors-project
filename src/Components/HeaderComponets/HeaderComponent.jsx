import "./HeaderComponent.style.css";
import {
  DoctorGeneralPhoto,
  HeaderLogo,
  NotificationIcon,
  ProfileIcon,
  FAQLogo,
  CreditCardLogo,
  LogoutLogo
} from "../../Images/Svg";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { useCallback, useState } from "react";
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";
// import { TranslationContext } from "../../App";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../Services/i18n";


export default function HeaderComponent() {
  const{t} = useTranslation();
  // const {language, setLanguage,t} = useContext(TranslationContext)
  const [visible, setVisible] = useState(false);
  const [language, setLanguage] = useState("ru");
  const me = {id:25}
  const languages = ["ru", "en"];
  const dropDownList = [
    { title: t('z'), icon: ProfileIcon },
    { title: "Пополнить баланс", icon: CreditCardLogo },
    { title: "FAQ", icon: FAQLogo },
    { title: "Выйти", icon: LogoutLogo },
  ];
  const onPress = useCallback((language) => {
    setLanguage(language);
    i18n.changeLanguage(language)
  }, []);
  const dropDown = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);
  return (
    <div className="headerGeneralContainer">
      <div className="contentContainer">
        <img src={HeaderLogo} />
        <div className="rightContainer">
          <div className="buttonsContainer">
            <div className="buttonContainer">
              <span className="buttonText">{t("howToUse")}</span>
            </div>
            <div className="buttonContainer">
              <span className="buttonText">Мои записи</span>
            </div>
            <div className="buttonContainer">
              <Link className="buttonText" to={`/balance/${me.id}`}>Записаться к врачу</Link>
            </div>
            <img src={NotificationIcon} />
          </div>
          <div className="nameContainer">
            <ProfileDropDown
              name={"Артем"}
              surname={"Свиридов"}
              onArroDownClick={dropDown}
              dropDownVisibility={visible}
              dropDownData={dropDownList}
            />
          </div>
        </div>

        <div className="languageSelector">
          <LanguageSelect
            languageList={languages}
            onPress={onPress}
            selected={language}
          />
        </div>
      </div>
    </div>
  );
}
