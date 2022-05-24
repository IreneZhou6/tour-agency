import './SelectsImg.styles.scss';

export default function SelectsImg({ bgImg, text }) {
    return (
        <div className="selects-location">
            <img src={bgImg} alt={text} />
            <div className="overlay">
                <p>{text}</p>
            </div>
        </div>
    )
}