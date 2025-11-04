export type SnippetType = {
    id: number,
    snippetName: string,
    language: string,
    snippetDetails: string,
    snippetTags: string[],
    snippetCode: string,
    identifiant_utilisateur: string,
    visibilite: number,
}

export default SnippetType;