import './tag.css';

interface TagsProps{
    text: string,
}

export function Tags({text}:TagsProps){


    return(<p className="snippet-tag">{text}</p>)

}

export default Tags;