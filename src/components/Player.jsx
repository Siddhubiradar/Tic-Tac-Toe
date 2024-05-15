import { useState } from "react";

export default function Player({name, symbol}) {
const [] = useState()

    return (
        <li>
        <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={clickHandler}>Edit</button>
        </li>

    );
}