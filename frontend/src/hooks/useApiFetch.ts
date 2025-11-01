import { useState } from "react";
import type { ApiResponse, ApiFetchOptions } from "../types/Types"; 

export const useApiFetch = <TResponse>() => {
    const [result, setResult] = useState<ApiResponse<TResponse> | null> (null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);


    const fetchApi = async ({
        method,
        path,
        body,
        headers,
        credentials,
        delai,
    }: ApiFetchOptions) => {
        setIsLoading(true);
        setIsError(false);
        setErrorMsg(undefined);

        try{
            const fetchOptions: RequestInit = {
                method,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    ...headers,
                },
                credentials,
            };
            if(body && method !== "GET"){
                fetchOptions.body = JSON.stringify(body);
            }

            const response = await fetch('http://localhost:3000'+ path, fetchOptions);
            const json = (await response.json()) as ApiResponse<TResponse>;

            if(!response.ok) throw new Error(json.message);
            setResult(json);
            return json;
        } catch(err){
            const msg = err instanceof Error ? err.message : String(err);
            setResult(null);
            setIsError(true);
            setErrorMsg(msg);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    return {fetchApi, result, isLoading, isError, errorMsg}

}