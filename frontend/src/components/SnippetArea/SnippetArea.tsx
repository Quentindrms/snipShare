import './snippetArea.css';

interface SnippetAreaProps {
    snippetTitle: string,
    snippetSummary: string,
    snippetNumberComments: string,
    snippetNumberLikes: string,
}

export function SnippetArea({ snippetTitle, snippetSummary, snippetNumberComments, snippetNumberLikes }: SnippetAreaProps) {


    return (
        <div className="snippetArea">
            <div className="snippetAreaBody">
                <h3 className='snippetTitle'>{snippetTitle}</h3>
                <p className="snippetSummary">{snippetSummary}</p>
            </div>
            <div className="snippetAreaFooter">
                <p className="snippetNumberComments">Commentaire : {snippetNumberComments}</p>
                <p className="snippetNumberLikes">Like : {snippetNumberLikes}</p>
            </div>
        </div>
    )
}

export default SnippetArea;