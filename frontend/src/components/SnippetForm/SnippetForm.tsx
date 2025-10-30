import { useState, type ChangeEvent } from 'react';
import RadioInputLanguage from './Input/RadioInputLanguage';
import SubmitButton from './Input/SubmitButton';
import './snippetForm.css';

 interface SnippetFormProps {
    sendToApi: (FormData: SnippetFormType) => void;
}

export interface SnippetFormType {
    snippetName: string,
    snippetLanguage: string,
    snippetTag: string[],
    snippetDetails: string,
    snippetCode: string,
}


const defaultValue:SnippetFormType = {
    snippetName: '',
    snippetLanguage: '',
    snippetTag: [''],
    snippetDetails: '',
    snippetCode: '',
}

export function SnippetForm({sendToApi}:SnippetFormProps) {

    const [formData, setFormData] = useState(defaultValue);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        const checked = 'checked' in event.target ? event.target.checked : undefined;

        setFormData((prev) =>{
            console.log(` ${name} : ${value}`);
            return {...prev, [name]: value, checked: checked}
        })
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sendToApi(formData);
    }

    return (
        <>
            <form className="create-snippet-form" onSubmit={handleFormSubmit}>

                <label className='snippet-name-label label'> Nom du snippet</label>
                <input className="snippetName" id="snippetName" name="snippetName" type="text" placeholder="Le nom de votre snippet" onChange={(event) => handleInputChange(event)}>
                </input>

                <fieldset className="select-language">
                    <legend className='select-language-legend legend'>Language du snippet</legend>
                    <RadioInputLanguage labelText='Javascript' inputId='javascript' value='javascript' onChange={(event) => handleInputChange(event)}/>
                    <RadioInputLanguage labelText='Typescript' inputId='typescript' value='typescript' onChange={(event) => handleInputChange(event)}/>
                    <RadioInputLanguage labelText='Python' inputId='python' value='python' onChange={(event) => handleInputChange(event)}/>
                    <RadioInputLanguage labelText='Java' inputId='java' value='java' onChange={(event) => handleInputChange(event)}/>
                    <RadioInputLanguage labelText='C' inputId='c' value='c' onChange={(event) => handleInputChange(event)}/>
                    <RadioInputLanguage labelText='C++' inputId='cpp' value='cpp' onChange={(event) => handleInputChange(event)}/>
                    <RadioInputLanguage labelText='Rust' inputId='rust' value='rust' onChange={(event) => handleInputChange(event)}/>
                    <RadioInputLanguage labelText='Fortran' inputId='fortran' value='fortran' onChange={(event) => handleInputChange(event)}/>
                    <RadioInputLanguage labelText='Go' inputId='go' value='go' onChange={(event) => handleInputChange(event)}/>
                    <RadioInputLanguage labelText='Kotlin' inputId='kotlin' value='kotlin' onChange={(event) => handleInputChange(event)} />
                </fieldset>

                <fieldset className='select-tag'>
                    <legend className="select-tag-legend legend">Tags</legend>
                    <input className='select-tag-input-text' id="snippetTag" name="snippetTag"placeholder='Tags (maximum 5)' onChange={handleInputChange}></input>
                </fieldset>

                <label className='snippet-details-label label'>Description de votre snippet</label>
                <textarea className="snippet-input-details" name="snippetDetails" id="snippetDetails" rows={15} cols={2} onChange={(event) => handleInputChange(event)}></textarea>
                <label className='snippet-input-code label'>Code de votre snippet</label>
                <textarea className="snippet-input-code" name="snippetCode" id="snippetCode" rows={15} cols={2} onChange={(event) => handleInputChange(event)}></textarea>
                <SubmitButton text='Postez votre snippet'/>
            </form>
        </>
    )
}

export default SnippetForm;