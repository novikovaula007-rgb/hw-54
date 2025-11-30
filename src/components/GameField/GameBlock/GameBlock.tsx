import './GameBlock.css'

interface Props {
    hasItem: boolean,
    clicked: boolean
}

const GameBlock: React.FC<Props> = ({clicked}) => {
    const blockClasses = ['gameBlock']
    if (clicked) {
        blockClasses.push('blockClicked')
    } else {
        blockClasses.push('blockNoClicked')
    }

    return (
        <>
            <div className={blockClasses.join(' ')}></div>
        </>
    );
};

export default GameBlock;