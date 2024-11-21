import React from 'react';

const Card = ({ card, onClick, isFlipped }) => {
    return (
        <div className="card" onClick={onClick}>
            {isFlipped ? card.value : "?"}
        </div>
    );
};

export default Card;