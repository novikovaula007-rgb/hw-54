import type {MouseEventHandler} from "react";
import './ButtonReset.css'

interface Props {
    reset: MouseEventHandler
}

const ButtonReset: React.FC<Props> = ({reset}) => {
    return (
        <button className="buttonReset" onClick={reset}>Reset</button>
    );
};

export default ButtonReset;