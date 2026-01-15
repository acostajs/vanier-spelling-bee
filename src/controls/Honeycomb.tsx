import { ReactElement } from "react";

type HexProps = {
    letter: string;
    onClick: () => void;
    centerLetter?: boolean;
};

function Hex({ letter, onClick, centerLetter }: HexProps): ReactElement {
    return (
        <button
            onClick={onClick}
            className={`hex ${centerLetter ? "center-letter" : ""}`}
        >
            {letter}
        </button>
    );
}

type HoneycombProps = {
    edgeLetters: Array<string>;
    centerLetter: string;
    onClick: (letter: string) => void;
};

export default function Honeycomb({
    edgeLetters,
    centerLetter,
    onClick,
}: HoneycombProps): ReactElement {
    return (
        <div className="honeycomb">
            <Hex
                letter={centerLetter}
                onClick={() => onClick(centerLetter)}
                centerLetter={true}
            />
            {edgeLetters.map((edgeLetter) => (
                <Hex
                    key={edgeLetter}
                    letter={edgeLetter}
                    onClick={() => onClick(edgeLetter)}
                />
            ))}
        </div>
    );
}
