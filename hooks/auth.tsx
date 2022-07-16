import useSWR, { useSWRConfig } from "swr"
import { list, signup } from "../api/auth";

export const useAuth = () => {
    // get list user
    const fetcher = async (url: string) => {
        const { data } = await list(url)
        return data
    };

    const { data, error} = useSWR("/users", fetcher)
    const { mutate } = useSWRConfig();

    // register

    const register = (user) => {
        const account = user;
        mutate("/users", async() => {
            const { data: user } = await signup(account);
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