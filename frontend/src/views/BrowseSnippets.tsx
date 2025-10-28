import PrimaryButton from "../components/Buttons/PrimaryButton";
import SearchBar from "../components/SearchBar/SearchBar";
import SnippetArea from "../components/SnippetArea/SnippetArea";

export function BrowseSnippets(){

    return (
        <>
            <h2 className="title-2-centered">Parcourir les snippets</h2>
            <div className="browsepage-cta">
                <SearchBar />
                <PrimaryButton buttonText="Recherche avancée" buttonLink="#" />
            </div>
            <div className="snippetsContainer">
                <SnippetArea snippetTitle="Lorem ipsum"
                snippetSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio lorem, maximus vel ipsum eu, venenatis dictum tellus. Pellentesque ut mauris malesuada lectus dictum placerat a quis risus. Aenean ut gravida tellus. Mauris porta metus a venenatis consequat. Morbi tortor sem, interdum a imperdiet ut, iaculis id nisl. Vestibulum ut convallis metus."
                snippetNumberComments={10}
                snippetNumberLikes={10}
                 />
            </div>
        </>
    )
}

export default BrowseSnippets;