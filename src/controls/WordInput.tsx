import { ReactElement } from "react";

type WordInputProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function WordInput({
    value,
    onChange,
}: WordInputProps): ReactElement {
    return (
        <input
            type="text"
            className="word-input"
            value={value}
            onChange={onChange}
            required
        />
    );
}
