import SnippetForm from "../components/SnippetForm/SnippetForm";
import Title2 from "../components/Titles/Title-2";

export function CreateSnippets(){


    return(
        <>
            <Title2 center={true} text="Création d'un snippet" />
            <SnippetForm />
        </>
    )
}

export default CreateSnippets;