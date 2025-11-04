import { useState, type ChangeEvent } from 'react';
import RadioInputLanguage from './Input/RadioInputLanguage';
import SubmitButton from './Input/SubmitButton';
import './snippetForm.css';
import SelectTag from './SelectTag/SelectTag';
import { useEffect } from 'react';
import { useApiFetch } from '../../hooks/useApiFetch';
import SelectMenu from './Input/SelectMenu';

import type { Languages } from '../../types/Types';

interface SnippetFormProps {
    sendToApi: (FormData: SnippetFormType) => void;
}

export interface SnippetFormType {
    snippetName: string,
    snippetTag: string[],
    snippetDetails: string,
    snippetCode: string,
    language: string,
    identifiant_utilisateur: number,
    visibilite: number;
}


const defaultValue: SnippetFormType = {
    snippetName: '',
    snippetTag: [],
    snippetDetails: '',
    snippetCode: '',
    language: '',
    identifiant_utilisateur: 1,
    visibilite: 0,
}

export function SnippetForm({ sendToApi }: SnippetFormProps) {

    const [formData, setFormData] = useState(defaultValue);

    /** Détecte les modifications dans les champs du formulaire 
     * Puis transmet les informations au formData à chaque modification
     */

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        if (event.target.type === 'radio') {
            setFormData((prev) => ({
                ...prev,
                language: value
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
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

    const handleVisibilityChange = (visibilite: string) => {
        console.log(visibilite);
        setFormData((prev) => ({
            ...prev,
            visibilite: parseInt(visibilite),
        }))
    }

    const { fetchApi, isLoading, result } = useApiFetch<Languages[]>();

    useEffect(() => {
        const init = async () => {
            try {
                const res = await fetchApi({
                    method: 'GET',
                    path: '/snippets/fetch-languages/',
                    credentials: 'include'
                });
            } catch (err) {
                console.log(err);
            }
        };
        init();
    }, []);

    return (
        <>
            <form className="create-snippet-form" onSubmit={(e) => handleFormSubmit(e)}>

                <label className='snippet-name-label label'> Nom du snippet</label>
                <input className="snippetName" id="snippetName" name="snippetName" type="text" placeholder="Le nom de votre snippet" onChange={(event) => handleInputChange(event)} required>
                </input>

                <fieldset className="select-language">
                    <legend className='select-language-legend legend'>Language du snippet</legend>
                    {result?.data.map((language) => (
                        <RadioInputLanguage
                            key={language.identifiant_language}
                            inputId={`${language.identifiant_language}`}
                            labelText={language.nom_language}
                            value={language.identifiant_language}
                            onChange={handleInputChange}
                        />
                    ))}
                </fieldset>

                <SelectTag onChange={(change: string[]) => handleTagsChange(change)} />

                <SelectMenu onChange={(event: React.ChangeEvent<HTMLSelectElement>) => handleVisibilityChange(event.target.value)} />

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