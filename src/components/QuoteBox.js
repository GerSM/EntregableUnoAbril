import React from 'react';
import quotes from '../quotes.json'
import { useState } from 'react';

const QuoteBox = () => {
    const colors = ["#06060c", "#0c2b41", "#1a6080", "#2b9bc8", "#2bc8c8"]
    const [random, setRandom] = useState(0)
    const changeQuote = () => {
        const randomIndex = Math.floor(Math.random()*quotes.length)
        setRandom(randomIndex);
    }

    const randomColor = Math.floor(Math.random()*colors.length)
    document.body.style = `background: ${colors[randomColor]}`

    return (
        <div>
            <div className="card-quoute" style={{color: colors[randomColor]}}>
                <h1 className='quote'>"{quotes[random].quote}"</h1>
                <h3 className='author'>{quotes[random].author}</h3>
                <button className='change-quote' onClick={changeQuote} style={{background: colors[randomColor]}}><i class="fa-solid fa-shuffle"></i></button>
            </div>
        </div>
    );
};

export default QuoteBox;