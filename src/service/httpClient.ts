import axios, { AxiosHeaders, AxiosRequestConfig } from "axios";
import { iUSER } from "../model/user";

const SERVICE_URL: string = process.env.SERVICE_URL || 'http://localhost:5001/';
let AUTH_TOKEN: string | undefined = undefined;
let USER: iUSER | undefined = undefined;

export const isLoggedIn = () => AUTH_TOKEN !== undefined;

export const clearAuthToken = () => {
    AUTH_TOKEN = undefined;
}

export const getUser = () => USER;

const getConfig = () => {
    const headers = new AxiosHeaders();
    if (AUTH_TOKEN !== undefined) {
        headers.set('token', AUTH_TOKEN);
    }
    const config: AxiosRequestConfig = { headers };
    return config;
}

export const get = async (url: string) => {
    const response = await axios.get(`${SERVICE_URL}${url}`, getConfig());
    return response.data;
}

export const post = async (url: string, data: any) => {
    const response = await axios.post(`${SERVICE_URL}${url}`, data, getConfig());
    return response.data;
}

export const loginUser = async (data: any) => {
    try {
        const response = await axios.post(`${SERVICE_URL}login`, data, getConfig());
        if (response.data.data) {
            AUTH_TOKEN = response.data.data.token;
            const userResponse = await axios.get(`${SERVICE_URL}user`, getConfig());
            console.log(userResponse);
            USER = userResponse.data.data;
            return true;
        }
    } catch (err) {
        console.log(err);
    }
    return false;
}