export type ApiFetchOptions = {
    method: 'GET' | 'POST' | 'PATCH';
    path: string,
    body?: unknown,
    headers?: Record<string, string>,
    credentials?: RequestCredentials,
    delai?: number,
}

export type ApiResponse<TData> = {
    message: string,
    data: TData,
}

export type Languages = {
    identifiant_language?: number,
    nom_language: string,
}

export type Snippet = {
    identifiant_snippet?: number,
    titre: string,
    description: string,
    code: string,
    visibilite: number,
    tags: string,
    nombre_like: string,
    nombre_commentaire: string,
    identifiant_language: number,
}

export type UserRegistration = {
    prenom: string,
    nom: string,
    nom_utilisateur: string,
    email: string,
    mot_de_passe: string,
    mot_de_passe_confirmation: string,
}

export type UserAuthentification = {
    email: string,
    mot_de_passe: string,
}