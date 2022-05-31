import { getProfile, login, logout } from '@/api-client';
import { useAuth } from '@/hooks';
import * as React from 'react';

export default function LoginPage() {
    const { profile, loginUser, logoutUser } = useAuth({
        revalidateOnMount: false,
    });
    async function handleLoginClick() {
        try {
            await loginUser();
            console.log('redirect to dashboard');
        } catch (error) {
            console.log('faile to login', error);
        }
    }
    async function handleGetProfile() {
        try {
            await getProfile();
        } catch (error) {
            console.log('faile to getProfile', error);
        }
    }
    async function handleLogout() {
        try {
            await logoutUser();
            console.log('redirect to login');
        } catch (error) {
            console.log('faile to logout', error);
        }
    }
    return (
        <div>
            <h1>Login Page</h1>
            <p>profile: {JSON.stringify(profile || {}, null, 4)}</p>
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleGetProfile}>Get Profile</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
