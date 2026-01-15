import { ReactElement, useState } from "react";
import puzzle from "../puzzle.ts";
import Honeycomb from "./Honeycomb.tsx";
import Message from "./Message.tsx";
import ResetButton from "./ResetButton.tsx";
import ShuffleButton from "./ShuffleButton.tsx";
import SubmitButton from "./SubmitButton.tsx";
import WordInput from "./WordInput.tsx";

type ControlsProps = {
    onWordFound: (word: string) => void;
};

export default function Controls({ onWordFound }: ControlsProps): ReactElement {
    const { edgeLetters, centerLetter, words } = puzzle;

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState<
        "error" | "success" | "info"
    >();
    const [shuffledEdgeLetters, setShuffledEdgeLetters] = useState(edgeLetters);
    const [inputValue, setInputValue] = useState("");

    function handleShuffle(): void {
        const random = 0.5;
        const shuffled = [...shuffledEdgeLetters].sort(
            () => Math.random() - random,
        );
        setMessage("");
        setShuffledEdgeLetters(shuffled);
    }

    function handleValidation(): void {
        const minimum = 3;
        if (!inputValue) {
            setMessage("Please enter a word");
            setMessageType("error");
        } else if (inputValue.length <= minimum) {
            setMessage("The word is too short");
            setMessageType("info");
        } else if (puzzle.pangrams.includes(inputValue)) {
            setMessage("Great! Pangram!");
            setMessageType("success");
            onWordFound(inputValue);
        } else if (words.includes(inputValue)) {
            setMessage("Good!");
            setMessageType("success");
            onWordFound(inputValue);
        } else {
            setMessage("Word not found in list");
            setMessageType("error");
        }
        setInputValue("");
    }

    function handleLetterClick(letter: string): void {
        setMessage("");
        setInputValue(inputValue + letter);
    }

    function handleInputChange(
        event: React.ChangeEvent<HTMLInputElement>,
    ): void {
        setInputValue(event.target.value);
    }

    function handleReset(): void {
        setInputValue("");
        setMessage(" ");
    }

    return (
        <section className="controls">
            <div className="controls-container">
                <Message message={message} type={messageType} />
                <WordInput value={inputValue} onChange={handleInputChange} />
                <Honeycomb
                    edgeLetters={shuffledEdgeLetters}
                    centerLetter={centerLetter}
                    onClick={handleLetterClick}
                />
                <div className="controls-buttons">
                    <ResetButton onClick={handleReset} />
                    <ShuffleButton onClick={handleShuffle} />
                    <SubmitButton onClick={handleValidation} />
                </div>
            </div>
        </section>
    );
}
