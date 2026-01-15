import { ReactElement, useState } from "react";
import puzzle from "../puzzle.ts";
import RankTab from "./RankTab.tsx";
import ScoreTab from "./ScoreTab.tsx";

type ScoreBoardProp = {
    wordsFound: Array<string>;
};

type WordScore = {
    word: string;
    score: number;
};

export default function ScoreBoard({
    wordsFound,
}: ScoreBoardProp): ReactElement {
    const [activeTab, setActiveTab] = useState<"score" | "rank">("score");

    function calculateScore(word: string): number {
        const offset = 3;
        const pangramPoints = 7;
        if (puzzle.pangrams.includes(word)) {
            return word.length - offset + pangramPoints;
        }
        return word.length - offset;
    }

    const wordsWithScores: WordScore[] = wordsFound.map((word) => ({
        word,
        score: calculateScore(word),
    }));

    const totalScore = wordsWithScores.reduce((sum, ws) => sum + ws.score, 0);
    const currentRank = puzzle.rankData
        .slice()
        .reverse()
        .find((rank) => totalScore >= Math.ceil(puzzle.maxScore * rank.pct))
        || {
            rank: "no Rank",
        };

    return (
        <section className="scoreBoard">
            <div className="tabs">
                <button
                    className={activeTab === "score" ? "tab" : "selected-tab"}
                    onClick={() => setActiveTab("score")}
                >
                    Score: {totalScore}
                </button>
                <button
                    className={activeTab === "rank" ? "tab" : "selected-tab"}
                    onClick={() => setActiveTab("rank")}
                >
                    Rank: {currentRank.rank}
                </button>
            </div>
            {activeTab === "score" && <ScoreTab words={wordsWithScores} />}
            {activeTab === "rank" && (
                <RankTab totalScore={totalScore} maxScore={puzzle.maxScore} />
            )}
        </section>
    );
}
