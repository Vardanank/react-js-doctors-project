import './RecordComponent.style.css'
import { useTranslation } from 'react-i18next';

function RecordComponent(){
    const {t} = useTranslation();
    return (
        <div className="record-container">
            <div className="recordState">{t("upcoming")}</div>
            <div className="recordState">{t("Past")}</div>
            <div className="recordState">{t("Canceled")}</div>
        </div>
    )
}

export default RecordComponent;