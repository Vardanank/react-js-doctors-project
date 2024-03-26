import "./ButtonVisit.style.css";

export default function ButtonVisit({text, style, onClick}) {
    return (
        <button onClick={onClick} className="buttonVisit" style={style} >{text}</button>
    )
}