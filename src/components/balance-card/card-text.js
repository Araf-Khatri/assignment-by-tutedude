import "./card-text.css";

const CardText = ({ className = "", heading, text, textStyle = "" }) => {
  return (
    <div className={`${className}card-content`}>
      <p className="card-content--heading">{heading}</p>
      <p className={`card-content--text ${textStyle}`}>{text}</p>
    </div>
  );
};

export default CardText;
