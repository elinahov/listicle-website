import axios from "axios"

export const getServices = () => {
    return axios.get('/services')
}

export const updateService = (id, data) => {
    return axios.patch('/services', { servicesId: id, ...data })
}
