import './commentary.css'

interface CommentaryProps{
    username: string,
    contents: string,
    publishDate: string,
}

export function Commentary({username, contents, publishDate}:CommentaryProps) {

    return (
        <div className='commentary'>
            <div className="commentary-body">
                <h4 className="commentary-username">{username}</h4>
                <p className="commentary-contents">{contents}</p>
            </div>
            <div className="commentary-footer">
                <p className="commentary-publish-date">{publishDate}</p>
            </div>
        </div>
    )
}

export default Commentary;