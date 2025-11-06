import SignupForm from "../components/AuthForm/SignupForm"
import { useApiFetch } from "../hooks/useApiFetch"
import type { UserAuthentification } from "../types/Types"

export function Authentification(){

    const {fetchApi} = useApiFetch();
    const sendToApi = async (formData: UserAuthentification) => {
        const response = await fetchApi({
            method: "POST",
            path: "/authentification/signup",
            body: formData,
            credentials: "include",
            delai: 0,
        })
    }

    return(
        <>
            <SignupForm sendToApi={sendToApi}/>
            <p className="" >Pas de compte ? <a className='link 'href="/inscription">Inscrivez-vous</a> </p>
        </>
    )
}