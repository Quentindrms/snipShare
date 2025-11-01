import SnippetForm, { type SnippetFormType } from "../components/SnippetForm/SnippetForm";
import Title2 from "../components/Titles/Title-2";
import { useApiFetch } from "../hooks/useApiFetch";

export function CreateSnippets(){

    const {fetchApi} = useApiFetch();


    const sendToApi = async (formData: SnippetFormType) => {
        console.log('Send to api');
        const response = await fetchApi({
            method: "POST",
            path: "/snippets/post-snippet",
            body: formData,
            credentials: "include",
            delai: 0,
        })
        console.log(response);
    }

    return(
        <>
            <Title2 center={true} text="Création d'un snippet" />
            <SnippetForm sendToApi={sendToApi}/>
        </>
    )
}

export default CreateSnippets;