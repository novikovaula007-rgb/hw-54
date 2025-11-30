interface Props {
    tries: number
}

const TriesCounter: React.FC<Props> = ({tries}) => {
    return (
        <div>
            Tries: {tries}
        </div>
    );
};

export default TriesCounter;