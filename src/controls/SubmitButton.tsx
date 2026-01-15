import { ReactElement } from "react";

type SubmitButtonProps = {
    onClick: () => void;
};

export default function SubmitButton({
    onClick,
}: SubmitButtonProps): ReactElement {
    return (
        <button type="submit" onClick={onClick} className="submitButton">
            Submit
        </button>
    );
}
