import axios from "axios";

export const AUTH_TOKEN = 'auth_token';

export const register = async ({ name, email, password }) => {
    return axios.post('/user/register', {
        fullName: name,
        email: email,
        password: password,
        confirmPassword: password
    });
}

export const login = async ({ email, password }) => {
    return axios.post('/user/login', {
        email: email,
        password: password,
    });
}

export const getProfile = () => {
    return axios.get('/user/profile')
}