import SnippetForm, { type SnippetFormType } from "../components/SnippetForm/SnippetForm";
import Title2 from "../components/Titles/Title-2";

export function CreateSnippets(){

    const sendToApi = async (formData: SnippetFormType) => {

    }

    return(
        <>
            <Title2 center={true} text="Création d'un snippet" />
            <SnippetForm sendToApi={sendToApi}/>
        </>
    )
}

export default CreateSnippets;