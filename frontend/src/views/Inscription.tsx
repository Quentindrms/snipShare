import { SigninForm } from "../components/AuthForm/SigninForm";
import { useApiFetch } from "../hooks/useApiFetch"
import type { UserRegistration } from "../types/Types";

export function Inscription() {

    const {fetchApi} = useApiFetch();
    const sendToApi = async (formData: UserRegistration) => {
        const response = await fetchApi({
            method: "POST",
            path: "/authentification/signin",
            body: formData,
            credentials: "include",
            delai: 0,
        })
    }


    return (
        <SigninForm sendToApi={sendToApi}/>
    )
}