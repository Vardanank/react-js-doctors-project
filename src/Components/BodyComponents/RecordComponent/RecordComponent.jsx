import { useContext } from 'react';
import './RecordComponent.style.css'
import { TranslationContext } from '../../../App';
function RecordComponent(){
    const {t} = useContext(TranslationContext);
    return (
        <div className="record-container">
            <div className="recordState">Предстоящие</div>
            <div className="recordState">Прошедшие</div>
            <div className="recordState">Отмененные</div>
        </div>
    )
}

export default RecordComponent;