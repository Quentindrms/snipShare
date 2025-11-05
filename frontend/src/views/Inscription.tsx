
export function Inscription() {

    return (
        <form className="inscription-form">
            <label className="label" htmlFor="prenom">Prénom</label>
            <input type="text" id='prenom'></input>
            <label className="label" htmlFor="nom">Nom</label>
            <input type="text" id='nom'></input>
            <label className="label" htmlFor="nom_utilisateur">Nom d'utilisateur</label>
            <input type="text" id='nom_utilisateur'></input>
            <label className="label" htmlFor="email">Adresse email</label>
            <input type="email" id='email'></input>
            <label className="label" htmlFor="password">Mot de passe</label>
            <input type="password" id='password'></input>
            <label className="label" htmlFor="password_confirmation">Confirmation du mot de passe</label>
            <input type="password" id='password_confirmation'></input>
            <button type="submit" className="button">S'inscrire</button>
        </form>
    )
}