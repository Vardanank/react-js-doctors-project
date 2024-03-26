import "./ButtonVisit.style.css";

export default function ButtonVisit({text, style}) {
    return (
        <button className="buttonVisit" style={style}>{text}</button>
    )
}