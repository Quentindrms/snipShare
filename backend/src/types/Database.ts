export type UserDbRow = {
    identifiant_utilisateur?: number,
    nom_utilisateur: string,
    prenom: string,
    nom: string,
    mot_de_passe_hash: string,
    email: string,
    snippet_favoris: string[], //Valeur à modifier en base de données et en type car doit être un number
    snippet_like: string[], //Idem ligne du dessus
}

export type CategoryDbRow = {
    identifiant_categorie?: number,
    categorie_nom: string,
}

export type TokenDbRow = {
    identifiant_jeton?: number,
    contenu: string,
}

export type LanguageDbRow = {
    identifiant_language?: number,
    contenu: string,
}

export type SnippetDbRow = {
    identifiant_snippet?: number,
    titre: string,
    visibilité: number,
    tags: string,
    nombre_like: number,
    identifiant_language: number,
    identifiant_utilisateur: number,
}

export type CommentDbRow = {
    identifiant_utilisateur?: number,
    identifiant_snippet?: number,
    identifiant_categorie?: number,
    contenu: string,
}

export type CategorizeDbRow = {
    identifiant_snippet?: number,
    identifiant_categorie?: number,
}

export type VerifyDbRow = {
    identifiant_utilisateur: number,
    identifiant_jeton: number, //A modifier en base de donnée car VARCHAR(50)
}

export type LikeDbRow = {
    identifiant_utilisateur?: number,
    identifiant_snippet?: number,
    utilisateur: string,
}