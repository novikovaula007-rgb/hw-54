import './GameBlock.css'

interface Props {
    hasItem: boolean,
    clicked: boolean,
    clickBlock: React.MouseEventHandler
    id: number
}

const GameBlock: React.FC<Props> = ({clicked, clickBlock, hasItem}) => {
    const blockClasses = ['gameBlock']
    if (clicked && hasItem) {
        blockClasses.push('blockClickedWin')
    } else if (!clicked) {
        blockClasses.push('blockNoClicked')
    }

    return (
        <>
            <div onClick={clickBlock} className={blockClasses.join(' ')}></div>
        </>
    );
};

export default GameBlock;