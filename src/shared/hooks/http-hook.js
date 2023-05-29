import { useState } from "react"

export const HttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const sendRequest = async (url, method = 'GET', body =null, headers = {} ) => {
        const response = await fetch(url, {
            method,
            body,
            headers
        });
    };
};