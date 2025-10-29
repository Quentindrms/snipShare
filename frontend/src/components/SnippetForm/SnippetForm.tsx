import RadioInputLanguage from './Input/RadioInputLanguage';
import SubmitButton from './Input/SubmitButton';
import './snippetForm.css';

export function SnippetForm() {


    return (
        <>
            <form className="create-snippet-form">

                <label className='snippet-name-label label'> Nom du snippet</label>
                <input className="inputTitle" id="inputTitle" name="snippetTitle" type="text" placeholder="Le nom de votre snippet">
                </input>

                <fieldset className="select-language">
                    <legend className='select-language-legend legend'>Language du snippet</legend>
                    <RadioInputLanguage labelText='Javascript' inputId='javascript' value='javascript' />
                    <RadioInputLanguage labelText='Typescript' inputId='typescript' value='typescript' />
                    <RadioInputLanguage labelText='Python' inputId='python' value='python' />
                    <RadioInputLanguage labelText='Java' inputId='java' value='java' />
                    <RadioInputLanguage labelText='C' inputId='c' value='c' />
                    <RadioInputLanguage labelText='C++' inputId='cpp' value='cpp' />
                    <RadioInputLanguage labelText='Rust' inputId='rust' value='rust' />
                    <RadioInputLanguage labelText='Fortran' inputId='fortran' value='fortran' />
                    <RadioInputLanguage labelText='Go' inputId='go' value='go' />
                    <RadioInputLanguage labelText='Kotlin' inputId='kotlin' value='kotlin' />
                </fieldset>

                <fieldset className='select-tag'>
                    <legend className="select-tag-legend legend">Tags</legend>
                    <input className='select-tag-input-text' placeholder='Tags (maximum 5)'></input>
                </fieldset>

                <label className='snippet-details-label label'>Description de votre snippet</label>
                <textarea className="snippet-input-details" name="details" rows={15} cols={2}></textarea>
                <label className='snippet-input-code label'>Code de votre snippet</label>
                <textarea className="snippet-input-code" name="details" rows={15} cols={2}></textarea>
                    <SubmitButton text='Postez votre snippet' />
            </form>
        </>
    )
}

export default SnippetForm;