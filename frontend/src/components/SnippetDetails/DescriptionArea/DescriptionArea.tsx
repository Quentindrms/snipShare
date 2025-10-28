import './descriptionArea.css'

interface DescriptionAreaProps{
    text: string;
}

export function DescriptionArea({text}:DescriptionAreaProps) {

    return (
            <p className="description-area">
                {text}
            </p>
    )
}

export default DescriptionArea;