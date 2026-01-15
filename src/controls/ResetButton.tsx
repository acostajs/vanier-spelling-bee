import { ReactElement } from "react";

type ResetButtonProps = {
    onClick: () => void;
};

export default function ResetButton({
    onClick,
}: ResetButtonProps): ReactElement {
    return (
        <button onClick={onClick} className="resetButton">
            Reset
        </button>
    );
}
