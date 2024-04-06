import "./Card2.scss";
const Card = ({ card, isSelected, onClick }) => {
  return (
    <div className={isSelected ? "card expanded" : "card"} onClick={onClick}>
      {/* Card content */}
      {card.title}
    </div>
  );
};

export default Card;
