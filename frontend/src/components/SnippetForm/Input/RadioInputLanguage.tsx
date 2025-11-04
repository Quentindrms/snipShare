interface RadioInputLanguageProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelText: string,
    inputId: string,
    value: number|undefined;
}

export function RadioInputLanguage({ labelText, inputId, value, onChange }: RadioInputLanguageProps) {

    return (
        <>
            <input
                type="radio"
                id={inputId}
                name="language"
                value={value}
                className="language-name"
                onChange={onChange}
                required
            />
            <label
                htmlFor={inputId}
                className='language-label'
            >
                {labelText}
            </label>
        </>
    )
}

export default RadioInputLanguage;