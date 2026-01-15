import { ReactElement } from "react";

type MessageProps = {
    message: string;
    type?: "error" | "success" | "info";
};

export default function Message({ message, type }: MessageProps): ReactElement {
    return (
        <div className="message">
            <p className={`message-${type}`}>{message}</p>
        </div>
    );
}
