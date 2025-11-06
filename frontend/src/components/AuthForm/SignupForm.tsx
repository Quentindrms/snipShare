import { useState, type ChangeEvent } from "react";
import type { UserAuthentification } from "../../types/Types";

interface SignupFormProps{
    sendToApi: (FormData: UserAuthentification) => void;
}

const defaultValue: UserAuthentification = {
    email: '',
    mot_de_passe: '',
}

export function SignupForm({sendToApi}: SignupFormProps) {

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
        sendToApi(formData);
    }

    return (
        <form className="auth-form" onSubmit={(e) => handleFormSubmit(e)}>
            <label className="label">Adresse email</label>
            <input type="email" className="form-email" name="email" onChange={handleInputChange}></input>
            <label className="label">Adresse email</label>
            <input type="password" className="form-password" name="mot_de_passe" onChange={handleInputChange}></input>
            <button type="submit" className="auth-button">Se connecter</button>
        </form>
    )
}

export default SignupForm;