import './LanguageSelect.style.css'
export default function LanguageSelect(props) {
console.log(props.selected);
  return (
    <div className="LanguagesMainContainer">
      {props.languageList.map((language, index) => {
        return (
          <div
            className={props.selected ===language?"selectedLanguage":undefined}
            onClick={()=>props.onPress(language)}
            key={language + index}
          >
            {language}
          </div>
        );
      })}
    </div>
  );
}
