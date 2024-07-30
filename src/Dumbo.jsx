import { useState } from "react";
// after the first render, react knows to ignore this function. 
function generateGameBoard() {
    console.log("MAKING THE INITIAL GAME BOARD");
    return Array(5000);
}

//set the initial state of the board
export default function Dumbo() {
const [board, setBoard] = useState(generateGameBoard);
return (
<button onClick={() => setBoard("Hello!")}>Click me to change state</button>);
}