import { useEffect } from "react";
import { useApiFetch } from "../../../hooks/useApiFetch";
import type { Languages } from "../../../types/Types";

interface RadioInputLanguageProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelText: string,
    inputId: string,
    value: number|undefined,
}

export function RadioInputLanguage({ labelText, inputId, value, onChange }: RadioInputLanguageProps) {

    return (
        <>
            <input
                type="radio"
                id={`${inputId}`}
                name="language"
                value={value}
                className="language-name"
                onChange={onChange}
            />
            <label
                htmlFor={`${inputId}`}
                className='language-label'
            >
                {labelText}
            </label>
        </>
    )
}

export default RadioInputLanguage;