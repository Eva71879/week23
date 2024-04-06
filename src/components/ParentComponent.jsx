import { useState } from "react";
import Card from "./Card2";
const cards = [
  {
    id: 1,
    title: "Card Title 1",
  },
  {
    id: 2,
    title: "Card Title 2",
  },
  {
    id: 3,
    title: "Card Title 3",
  },
];

const ParentComponent = () => {
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleClick = (cardId) => {
    setSelectedCardId(cardId === selectedCardId ? null : cardId);
  };

  return (
    <div className="card-container">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          isSelected={card.id === selectedCardId}
          onClick={() => handleClick(card.id)}
        />
      ))}
    </div>
  );
};

export default ParentComponent;
