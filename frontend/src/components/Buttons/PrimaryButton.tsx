import './button.css';

interface PrimaryButtonProps{
    buttonText: string,
    buttonLink: string,
}

export function PrimaryButton({buttonText, buttonLink}:PrimaryButtonProps){


    return(
        <a href={buttonLink} className="primaryButton">{buttonText}</a>
    )

}

export default PrimaryButton;