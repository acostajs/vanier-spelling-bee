import { ReactElement } from "react";

type ScoreTabProps = {
    words: Array<{ word: string; score: number }>;
};

export default function ScoreTab({ words }: ScoreTabProps): ReactElement {
    return (
        <table>
            <thead>
                <tr>
                    <th>Word</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {words.map((word) => (
                    <tr key={word.word}>
                        <td>{word.word}</td>
                        <td>{word.score}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
