import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5557',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const signInUser = async (email: string, password: string) => {
    const response = await apiClient.post('/api/auth/login', {
        email,
        password,
    });

    localStorage.setItem('token', response.data);

    return response.data;
}

export const getUser = async (email: string, password: string) => {
    const response = await apiClient.post(`/api/Auth/user`, {
        email,
        password
    });
    return response.data;
}