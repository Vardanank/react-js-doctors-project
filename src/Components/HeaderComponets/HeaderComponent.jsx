import "./HeaderComponent.style.css";
import { DoctorGeneralPhoto, HeaderLogo, NotificationIcon } from "../../Images/Svg";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { useCallback, useState } from "react";


export default function HeaderComponent() {
    const [language, setLanguage] = useState('EN')
   const languages = ['RU', 'EN'];
   
   const onPress = useCallback((language)=>{
    setLanguage(language)
   },[])
  return (
    <div className="headerGeneralContainer">
      <div className="contentContainer">
        <img src={HeaderLogo} />
        <div className="rightContainer" >
          <div className="buttonsContainer">
            <div className="buttonContainer">
              <span className="buttonText">Как пользоватся?</span>
            </div>
            <div className="buttonContainer">
              <span className="buttonText">Мои записи</span>
            </div>
            <div className="buttonContainer">
              <span className="buttonText">Записаться к врачу</span>
            </div>
            <img src={NotificationIcon} />
          </div>
          
        </div>
        
        <div className="languageSelector">
                <LanguageSelect languageList={languages} onPress={onPress} selected={language}/>
          </div>
      </div>
      
    </div>
  );
}
