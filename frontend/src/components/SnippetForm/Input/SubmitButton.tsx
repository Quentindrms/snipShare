interface SubmitButtonProps{
    text:string,
}

export function SubmitButton({text}:SubmitButtonProps){

    return(
    <>
    <button type="submit" className='submit-form-button'>{text}</button>
    </>
    )
}

export default SubmitButton;