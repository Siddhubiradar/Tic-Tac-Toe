import { useState } from "react";

export default function Player({initialName, symbol}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function clickHandler() {
        setIsEditing((editing) => !editing);        //setIsEditing = true; this i wrote this is wrong i guess
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    let buttonCaption = 'Edit'

    if(isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
        buttonCaption = 'save'
    }

    return (
        <li>
        <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={clickHandler}>{buttonCaption}</button>
        </li>

    );
}