import { ReactElement, useState } from "react";
import Controls from "./controls/Controls.tsx";
import ScoreBoard from "./scoreboard/Scoreboard.tsx";

export default function App(): ReactElement {
    return (
        <>
            <h1>Spelling Bee</h1>
            <Game />
        </>
    );
}

function Game(): ReactElement {
    const [foundWords, setFoundWords] = useState<string[]>([]);

    function handleWordFound(word: string): void {
        setFoundWords([...foundWords, word]);
    }

    return (
        <section className="game">
            <div>
                <Controls onWordFound={handleWordFound} />
            </div>

            <div>
                <ScoreBoard wordsFound={foundWords} />
            </div>
        </section>
    );
}
