import { useState } from 'react';



//we need a numPlayers prop and a target prop
export default function ScoreKeeperGame({numPlayers=3, target=5}) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));
    const incrementScore = (idx) => {
        setScores((prevScores) => {
            return prevScores.map((score, i) => {
                if (i === idx) return score +1;
                return score;
            });
        });
    };

    const reset = () => {
        setScores(new Array(numPlayers).fill(0));
    };
    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
            {scores.map((score, idx) => {
                return <li key={idx}>Player{idx + 1}: {score} 
                <button onClick={() => incrementScore(idx)}>+1</button>
                {score >+ target && "WINNER!"}
                </li>
            })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )
}


//use .fill to fill the array - new Array(10).fill(0)