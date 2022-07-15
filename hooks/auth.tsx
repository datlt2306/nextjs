import useSWR, { useSWRConfig } from "swr"

export const useAuth = () => {
    const url = 'http://localhost:3001/users';
    const fetcher = async (url: string) => await (await fetch(url)).json()
    const { data, error} = useSWR(url, fetcher)
    const { mutate } = useSWRConfig();

    // register

    const register = () => {
        mutate(url, async() => {
            const user = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email: "datlt23061@gmail.com", password: "123456"})
            });
            return [...data, user]
        })
    }
    // login
    
    // logout

    return {
        data,
        error,
        register
    }
}