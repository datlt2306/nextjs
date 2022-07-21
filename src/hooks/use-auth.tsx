import useSWR, { useSWRConfig } from "swr";
import { list, signup } from "../api/auth";

export const useAuth = (options?) => {
    const { data, error, mutate } = useSWR("/users", { ...options });

    // register

    const register = async (user) => {
        const account = await signup(user);
        mutate([...data, account]);
    };

    const profile = (id) => {
        mutate(`/users/${id}`);
    };
    // login

    // logout

    return {
        data,
        error,
        register,
        profile,
    };
};
