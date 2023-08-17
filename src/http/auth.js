import axios from "axios"

export const register = async ({ name, email, password }) => {
    return axios.post('/user/register', {
        fullName: name,
        email: email,
        password: password,
        confirmPassword: password
    });
}