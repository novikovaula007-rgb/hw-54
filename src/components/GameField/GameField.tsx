import {useState} from "react";
import './GameField.css'
import GameBlock from "./GameBlock/GameBlock.tsx";
import TriesCounter from "./TriesCounter/TriesCounter.tsx";
import ButtonReset from "./ButtonReset/ButtonReset.tsx";

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
    const [count, setCount] = useState(0)

    const onClickBlock = (blockId: number) => {
        const itemsCopy = items.map(item => {
            if (item.id === blockId && !item.clicked) {
                setCount(prevCount => prevCount + 1)
                return {...item, clicked: true}
            } else {
                return item
            }
        })
        setItems(itemsCopy)
    }

    const resetGame = () => {
        setCount(0)
        setItems(createItems)
    }

    return (
        <div className="gameWrapper">
            <div className="gameField">
                {items.map(item => {
                    return <GameBlock id={item.id} clickBlock={() => onClickBlock(item.id)} hasItem={item.hasItem} clicked={item.clicked}/>
                })}
            </div>
            <TriesCounter tries={count}/>
            <ButtonReset reset={resetGame}/>
        </div>
    );
};

export default GameField;