import { v4 as uuid } from 'uuid';
import { useState } from "react";

export default function EmojiClicker(){
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: ":)"}])
    const addEmoji = () => {
        setEmojis((oldEmojis) => [...oldEmojis, {id: uuid(), emoji: ":)"}]);
    };

    const removeEmoji = (id) => {
        setEmojis(prevEmojis => {
            return prevEmojis.filter(e => e.id !== id)
        })
    };

    const makeEverythingHeart = () => {
        setEmojis(prevEmojis => {
            prevEmojis.map(e => {
                return {...e, emoji: "heart"}
            })
        })
    }

    return (
        <div>
            {emojis.map((e) =>  (
                <span onClick={() => removeEmoji(e.id)} 
                key={e.id}
                style={{ fontSize: "4rem" }}
                >
                  {e.emoji}
                </span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    );
}