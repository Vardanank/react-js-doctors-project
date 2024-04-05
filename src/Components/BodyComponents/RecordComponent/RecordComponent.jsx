import './RecordComponent.style.css'
function RecordComponent(){
    return (
        <div className="record-container">
            <div className="recordState">Предстоящие</div>
            <div className="recordState">Прошедшие</div>
            <div className="recordState">Отмененные</div>
        </div>
    )
}

export default RecordComponent;