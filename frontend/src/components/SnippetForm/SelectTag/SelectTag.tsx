import { useState } from "react";
import { useEffect } from "react";
import TagLabel from "./TagLabel/TagLabel"


export function SelectTag({ onChange }: any) {

    const [inputValue, setInputValue] = useState('');
    const [arrayTags, setArrayTags] = useState<string[]>([]);

    useEffect(() => {
        onChange(arrayTags);
    }, [arrayTags])

    const handleTag = () => {
        if (inputValue.trim() !== '' && arrayTags.length < 5) {
            console.log('Condition if')
            setArrayTags([...arrayTags, inputValue]);
            setInputValue(''); //Vide le champ de saisie
        }
    }

    return (
        <>
            <fieldset className='select-tag'>
                <legend className="select-tag-legend legend">Tags</legend>
                <div className='tag-form-container'>
                    <input className='select-tag-input-text' id="snippetTag" name="snippetTag" placeholder='Tags (maximum 5)' onChange={(event) => {setInputValue(event.target.value)}}></input>
                    <button type="button" className='submit-tag-button' onClick={handleTag}>Ajouter un tag</button>
                    <div className='tag-container'>
                        {arrayTags.map((tag, index) => (
                            <TagLabel text={tag} key={index} />
                        ))}
                    </div>
                </div>
            </fieldset>

        </>
    )
}

export default SelectTag;