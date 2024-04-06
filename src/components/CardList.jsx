import Card from "./Card";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

export default function CardList() {
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

    const cards = [
        {
            price: '300',
            speed: '10',
            headerColor: 'header__blue',
            mainColor: 'main__blue'
        },
        {
            price: '450',
            speed: '50',
            headerColor: 'header__green',
            mainColor: 'main__green'
        },
        {
            price: '550',
            speed: '100',
            headerColor: 'header__red',
            mainColor: 'main__red'
        },
        {
            price: '1000',
            speed: '200',
            headerColor: 'header__black',
            mainColor: 'main__black'
        },
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
                )}
        </>
        );
}