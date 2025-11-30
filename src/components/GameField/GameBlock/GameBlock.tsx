import './GameBlock.css'

interface Props {
    hasItem: boolean,
    clicked: boolean,
    clickBlock: React.MouseEventHandler
    id: number
}

const GameBlock: React.FC<Props> = ({clicked, clickBlock}) => {
    const blockClasses = ['gameBlock']
    if (clicked) {
        blockClasses.push('blockClicked')
    } else {
        blockClasses.push('blockNoClicked')
    }

    return (
        <>
            <div onClick={clickBlock} className={blockClasses.join(' ')}></div>
        </>
    );
};

export default GameBlock;