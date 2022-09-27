import axios from "axios";

export const instance = axios.create({
    baseURL : 'https://632eaa74b56bd6ac45a318b6.mockapi.io/api/contacts'
})

export const fetchAllContacts = async () => {
    const { data } = await instance.get('/');
    return data;
}

export const addNewContact = async (data) => {
    const { data: result } = await instance.post('/', data);
    return result;
}

export const removeContact = async (id) => {
    const { data } = await instance.delete(`/${id}`);
    return data;
}