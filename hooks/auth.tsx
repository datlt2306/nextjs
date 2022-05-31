import useSWR from 'swr';
import { getProfile, login, logout } from '@/api-client';
import { PublicConfiguration } from 'swr/dist/types';

const MILLESECOND_PER_HOUR = 60 * 60 * 1000;

export const useAuth = (options?: Partial<PublicConfiguration>) => {
    //
    const {
        data: profile,
        error,
        mutate,
    } = useSWR('/profile', {
        // sau 1 tiếng thì fetch api
        dedupingInterval: MILLESECOND_PER_HOUR,
        // không muốn fetch api khi click các tab khác nhau
        revalidateOnFocus: false,
        ...options,
    });

    const loginUser = async () => {
        await login({
            username: 'test',
            password: '123123',
        });
        await mutate();
    };
    const logoutUser = async () => {
        await logout();
        mutate({}, false);
    };

    return { profile, error, loginUser, logoutUser };
};
