import {useState} from "react";
import './GameField.css'
import GameBlock from "./GameBlock/GameBlock.tsx";

const createItems = () => {
    const itemsArray: {hasItem: boolean, clicked: boolean}[] = []
    for (let i = 0; i<36; i++) {
        itemsArray.push({hasItem: false, clicked: false})
    }
    const randomIndex = Math.floor(Math.random() * (36 - 1 + 1)) + 1
    itemsArray[randomIndex].hasItem = true
    return itemsArray
}

const GameField = () => {
    const [items, setItems] = useState(createItems)
    return (
        <div className="gameField">
            {items.map((item, index) => {
                return <GameBlock key={index} hasItem={item.hasItem} clicked={item.clicked}/>
            })}
        </div>
    );
};

export default GameField;