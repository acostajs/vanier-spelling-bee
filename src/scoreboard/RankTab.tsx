import { ReactElement } from "react";
import puzzle from "../puzzle.ts";

type RankTabProps = {
    totalScore: number;
    maxScore: number;
};

export default function RankTab({
    totalScore,
    maxScore,
}: RankTabProps): ReactElement {
    return (
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Minimum Points</th>
                </tr>
            </thead>
            <tbody>
                {puzzle.rankData.map((rank) => {
                    const threshold = Math.ceil(maxScore * rank.pct);
                    const achieved = totalScore >= threshold;
                    return (
                        <tr
                            key={rank.rank}
                            className={achieved ? "achieved" : " "}
                        >
                            <td>{rank.rank}</td>
                            <td>{threshold}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
