import { LoginPayload } from '@/models';
import axiosClient from './config';

export const login = (payload: LoginPayload) => {
    return axiosClient.post('/login', payload);
};
export const logout = () => {
    return axiosClient.post('/logout');
};
export const getProfile = () => {
    return axiosClient.get('/profile');
};
