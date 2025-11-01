import { useState, type ChangeEvent } from 'react';
import RadioInputLanguage from './Input/RadioInputLanguage';
import SubmitButton from './Input/SubmitButton';
import './snippetForm.css';
import SelectTag from './SelectTag/SelectTag';

interface SnippetFormProps {
    sendToApi: (FormData: SnippetFormType) => void;
}

export interface SnippetFormType {
    snippetName: string,
    snippetTag: string[],
    snippetDetails: string,
    snippetCode: string,
}


const defaultValue: SnippetFormType = {
    snippetName: '',
    snippetTag: [],
    snippetDetails: '',
    snippetCode: '',
}

export function SnippetForm({ sendToApi }: SnippetFormProps) {

    const [formData, setFormData] = useState(defaultValue);

    /** Détecte les modifications dans les champs du formulaire 
     * Puis transmet les informations au formData à chaque modification
     */

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        const checked = 'checked' in event.target ? event.target.checked : undefined; //Si un checked est détecté dans l'event target checked prend la valeur checked, sinon undefined

        setFormData((prev) => {
            return { ...prev, [name]: value, checked: checked }
        })
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log('handle submit')
        console.log(formData)
        event.preventDefault();
        sendToApi(formData);
    }

    const handleTagsChange = (tags: string[]) => {
        setFormData((prev) => ({
            ...prev,
            snippetTag: tags
        }))
    }

    return (
        <>
            <form className="create-snippet-form" onSubmit={(e) => handleFormSubmit(e)}>

                <label className='snippet-name-label label'> Nom du snippet</label>
                <input className="snippetName" id="snippetName" name="snippetName" type="text" placeholder="Le nom de votre snippet" onChange={(event) => handleInputChange(event)} required>
                </input>

                <fieldset className="select-language">
                    <legend className='select-language-legend legend'>Language du snippet</legend>
                    <RadioInputLanguage labelText='Javascript' inputId='javascript' value='javascript' onChange={(event) => handleInputChange(event)} />
                    <RadioInputLanguage labelText='Typescript' inputId='typescript' value='typescript' onChange={(event) => handleInputChange(event)} />
                    <RadioInputLanguage labelText='Python' inputId='python' value='python' onChange={(event) => handleInputChange(event)} />
                    <RadioInputLanguage labelText='Java' inputId='java' value='java' onChange={(event) => handleInputChange(event)} />
                    <RadioInputLanguage labelText='C' inputId='c' value='c' onChange={(event) => handleInputChange(event)} />
                    <RadioInputLanguage labelText='C++' inputId='cpp' value='cpp' onChange={(event) => handleInputChange(event)} />
                    <RadioInputLanguage labelText='Rust' inputId='rust' value='rust' onChange={(event) => handleInputChange(event)} />
                    <RadioInputLanguage labelText='Fortran' inputId='fortran' value='fortran' onChange={(event) => handleInputChange(event)} />
                    <RadioInputLanguage labelText='Go' inputId='go' value='go' onChange={(event) => handleInputChange(event)} />
                    <RadioInputLanguage labelText='Kotlin' inputId='kotlin' value='kotlin' onChange={(event) => handleInputChange(event)} />
                </fieldset>

                <SelectTag onChange={(change: string[]) => handleTagsChange(change)} />

                <label className='snippet-details-label label'>Description de votre snippet</label>
                <textarea className="snippet-input-details" name="snippetDetails" id="snippetDetails" rows={15} cols={2} onChange={(event) => handleInputChange(event)} required></textarea>
                <label className='snippet-input-code label'>Code de votre snippet</label>
                <textarea className="snippet-input-code" name="snippetCode" id="snippetCode" rows={15} cols={2} onChange={(event) => handleInputChange(event)} required></textarea>
                <SubmitButton text='Postez votre snippet' />
            </form>
        </>
    )
}

export default SnippetForm;