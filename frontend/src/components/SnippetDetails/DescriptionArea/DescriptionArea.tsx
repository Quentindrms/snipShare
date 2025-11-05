import './descriptionArea.css'

interface DescriptionAreaProps{
    text: string|undefined;
}

export function DescriptionArea({text}:DescriptionAreaProps) {

    return (
            <p className="description-area">
                {text}
            </p>
    )
}

export default DescriptionArea;