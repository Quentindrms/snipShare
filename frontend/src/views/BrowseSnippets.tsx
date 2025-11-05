import { useEffect, useState } from "react";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import SearchBar from "../components/SearchBar/SearchBar";
import SnippetArea from "../components/SnippetArea/SnippetArea";
import { useApiFetch } from "../hooks/useApiFetch";
import type { Snippet } from "../types/Types";

export function BrowseSnippets(){

    const {fetchApi, isLoading, result} = useApiFetch<Snippet[]>();

    useEffect(() => {
        const init = async () => {
            try{
                const res = await fetchApi({
                    method: 'GET',
                    path: '/snippets/fetch-snippets',
                    credentials: 'include',
                });
            } catch(err){
                console.log(err);
            }
        };
        init();
        console.log(result?.data);
    }, []);

    return (
        <>
            <h2 className="title-2-centered">Parcourir les snippets</h2>
            <div className="browsepage-cta">
                <SearchBar />
                <PrimaryButton buttonText="Recherche avancée" buttonLink="#" />
            </div>
            <div className="snippetsContainer">
                {result?.data.map((snippet, index) => (
                    <SnippetArea key={index} snippetTitle={snippet.titre} 
                    snippetNumberComments={0}
                    snippetNumberLikes={0}
                    snippetSummary={snippet.description} />
                ))}
            </div>
        </>
    )
}

export default BrowseSnippets;