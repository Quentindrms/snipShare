import './tagLabel.css';

interface tagLabelProps{
    text: string,
}

export function TagLabel({text}:tagLabelProps){

    return(
        <div className='tag-label'>
            <span className="tag-label-text">{text}</span>
        </div>
    )
}

export default TagLabel;