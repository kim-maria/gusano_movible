import React, { useState, useEffect } from 'react';
import Card from './Card';

const generateCards = () => {
    const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const cards = [...values, ...values].map(value => ({ value, id: Math.random() }));
    return cards.sort(() => Math.random() - 0.5);
};

const MemoryGame = () => {
    const [cards, setCards] = useState(generateCards());
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);

    useEffect(() => {
        if (flippedCards.length === 2) {
            const [firstCard, secondCard] = flippedCards;

            if (firstCard.value === secondCard.value) {
                setMatchedCards(prev => [...prev, firstCard.value]);
            }

            setTimeout(() => setFlippedCards([]), 1000);
        }
    }, [flippedCards]);

    const handleCardClick = (card) => {
        if (!flippedCards.includes(card) && flippedCards.length < 2) {
            setFlippedCards(prev => [...prev, card]);
        }
    };

    return (
        <div>
            <h1 >Juego de Memoria</h1>
            <div className="grid">
                {cards.map(card => (
                    <Card
                        key={card.id}
                        card={card}
                        onClick={() => handleCardClick(card)}
                        isFlipped={flippedCards.includes(card) || matchedCards.includes(card.value)}
                    />
                ))}
            </div>
        </div>
    );
};

export default MemoryGame;