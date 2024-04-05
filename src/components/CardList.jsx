import Card from "./Card";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import './variables.scss';

export default function CardList() {
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

    const cards = [
        {price: '300', speed: '10', headerColor: '#1f9eae', mainColor: '#2ac3d6'},
        {price: '450', speed: '50', headerColor: '#198b74', mainColor: '$lightGreen'},//почему не работает переменная цвета?
        {price: '550', speed: '100', headerColor: '#c5544d', mainColor: '#f46a5f'},
        {price: '1000', speed: '200', headerColor: '#232b34', mainColor: `#303742`},
    ]

    const handleCardClick = (index) => {
        setSelectedCardIndex((currentIndex) => (currentIndex === index ? null : index));
    };

    return (
        <>
            {cards.map((card, index) => 
                <Card
                    key={uuidv4()}
                    price={card.price} 
                    speed={card.speed}
                    headerColor={card.headerColor}
                    mainColor={card.mainColor}
                    onClick={() => handleCardClick(index)}
                    checked={index === selectedCardIndex}
                    />
                )
            }
        </>
        );
}