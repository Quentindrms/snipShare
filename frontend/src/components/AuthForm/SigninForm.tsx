import type { UserRegistration } from "../../types/Types";
import type { ChangeEvent } from "react";
import { useState } from "react";

interface SigninFormProps{
    sendToApi : (FormData: UserRegistration) => void;
}

const defaultValue: UserRegistration = {
    prenom: '',
    nom: '',
    nom_utilisateur: '',
    email: '',
    mot_de_passe: '',
    mot_de_passe_confirmation: ''
}

export function SigninForm({sendToApi}:SigninFormProps) {

    const [formData, setFormData] = useState(defaultValue);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        sendToApi(formData);
    }

    return (
        <form className="inscription-form" onSubmit={(e) => handleFormSubmit(e)}>

            <label className="label" htmlFor="prenom">Prénom</label>
            <input type="text" id='prenom' name="prenom" onChange={handleInputChange}></input>
            <label className="label" htmlFor="nom">Nom</label>
            <input type="text" id='nom' name="nom" onChange={handleInputChange}></input>
            <label className="label" htmlFor="nom_utilisateur">Nom d'utilisateur</label>
            <input type="text" id='nom_utilisateur' name="nom_utilisateur" onChange={handleInputChange}></input>
            <label className="label" htmlFor="email">Adresse email</label>
            <input type="email" id='email' name="email" onChange={handleInputChange}></input>
            <label className="label" htmlFor="password">Mot de passe</label>
            <input type="password" id='password' name="mot_de_passe" onChange={handleInputChange}></input>
            <label className="label" htmlFor="password_confirmation">Confirmation du mot de passe</label>
            <input type="password" id='password_confirmation' name="mot_de_passe_confirmation" onChange={handleInputChange}></input>
            
            <button type="submit" className="button">S'inscrire</button>
        </form>
    )
}