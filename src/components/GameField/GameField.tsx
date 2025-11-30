import {useState} from "react";

const createItems = () => {
    const itemsArray: {hasItem: boolean, clicked: boolean}[] | null = []
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
        <div>

        </div>
    );
};

export default GameField;