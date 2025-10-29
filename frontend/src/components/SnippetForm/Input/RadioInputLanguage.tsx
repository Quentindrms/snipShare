
interface RadioInputLanguageProps{
    labelText: string,
    inputId: string,
    value: string,
}

export function RadioInputLanguage({labelText, inputId, value}:RadioInputLanguageProps) {

    return (
        <>
            <input type="radio" id={inputId} name="language" value={value} className="language-name" />
            <label htmlFor={inputId} className='language-label'>{labelText}</label>
        </>
    )
}

export default RadioInputLanguage;