import getClient from "./BaseAPI";

export const getProduct = async () => {
    try {
        const response = await getClient.get("products");
        return response;
    } catch (error) {
        throw error;
    }
};

export const addProduct = async () => {

    try {
        const response = await getClient.get("products");
        return response;
    } catch (error) {
        throw error;
    }
};

export const Register = async (data) => {
    const name = {
        firstname: data.firstName,
        lastname: data.lastName
    }
    const addres = {
        city: data.city,
        street: data.street,
        number: data.number,
        zipcode: '',
        geolocation: {
            lat: '',
            long: ''
        }
    }

    const dataToSend = {
        email : data.email,
        username : data.userName,
        password :  data.password,
        name : name,
        addres : addres,
        phone : data.phone
    }

    try {
        const response = await getClient.post("users", dataToSend);
        return response;
    } catch (error) {
        throw error;
    }
};

export const Login = async (data) => {
    try {
        const response = await getClient.post("auth/login", data);
        return response;
    } catch (error) {
        throw error;
    }
};

export const getUser = async () => {
    try {
        const response = await getClient.get("users");
        return response;
    } catch (error) {
        throw error;
    }
};

export const getOneUser = async (id) => {
    try {
        const response = await getClient.get(`users/${id}`);
        return response;
    } catch (error) {
        throw error;
    }
};



