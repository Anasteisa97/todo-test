import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const getTodos = async (page: number = 1) => {
    const response = await instance.get(`todos?_page=${page}`);
    return await response.data;
}