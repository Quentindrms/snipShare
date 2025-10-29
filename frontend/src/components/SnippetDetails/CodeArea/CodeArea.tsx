import './codeArea.css';

interface CodeAreaSnippet{
    code: string,
}

export function CodeArea({code}:CodeAreaSnippet){

    return(
        <div className="snippet-code-area">
            <p className="snippet-code">{code}</p>
        </div>
    )
}

export default CodeArea;