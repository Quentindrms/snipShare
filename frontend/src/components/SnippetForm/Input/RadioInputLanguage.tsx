interface RadioInputLanguageProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelText: string,
    inputId: string,
    value: string,
}

export function RadioInputLanguage({labelText, inputId, value, onChange}:RadioInputLanguageProps) {

    return (
        <>
            <input type="radio" id={inputId} name="language" value={value} className="language-name" onChange={onChange}/>
            <label htmlFor={inputId} className='language-label'>{labelText}</label>
        </>
    )
}

export default RadioInputLanguage;