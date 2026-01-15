import { ReactElement } from "react";
import shuffle from "../assets/images/shuffle.svg";

type ShuffleButtonProps = {
    onClick: () => void;
};

export default function ShuffleButton({
    onClick,
}: ShuffleButtonProps): ReactElement {
    return (
        <button onClick={onClick} className="shuffleButton">
            <img src="{shuffle}" alt="Shuffle" />
        </button>
    );
}
