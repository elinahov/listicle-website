import axios from "axios"

export const getServices = () => {
    return axios.get('/services')
}

export const updateService = (id, data) => {
    return axios.patch('/services', { servicesId: id, ...data })
}

export const addService = (data) => {
    return axios.post('/services', data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

export const deleteService = (id) => {
    return axios.delete(`/services/delete/${id}`)
}