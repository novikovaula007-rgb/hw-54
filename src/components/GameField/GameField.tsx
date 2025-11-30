import {useState} from "react";
import './GameField.css'
import GameBlock from "./GameBlock/GameBlock.tsx";

const createItems = () => {
    const itemsArray: {hasItem: boolean, clicked: boolean, id: number}[] = []
    for (let i = 0; i<36; i++) {
        itemsArray.push({hasItem: false, clicked: false, id: i+1})
    }
    const randomIndex = Math.floor(Math.random() * (36 - 1 + 1)) + 1
    itemsArray[randomIndex].hasItem = true
    return itemsArray
}

const GameField = () => {
    const [items, setItems] = useState(createItems)

    const onClickBlock = (blockId: number) => {
        const itemsCopy = items.map(item => {
            if (item.id === blockId) {
                return {...item, clicked: true}
            } else {
                return item
            }
        })
        setItems(itemsCopy)
    }

    return (
        <div className="gameField">
            {items.map(item => {
                return <GameBlock id={item.id} clickBlock={() => onClickBlock(item.id)} hasItem={item.hasItem} clicked={item.clicked}/>
            })}
        </div>
    );
};

export default GameField;