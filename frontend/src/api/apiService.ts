import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5557',
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const signupUser = async (email: string, password: string) => {
    const response = await apiClient.post('/register', {
        email,
        password,
    });
    return response.data;
};

export const fetchTrips = async () => {
    const response = await apiClient.get('/api/trips');
    return response.data;
}