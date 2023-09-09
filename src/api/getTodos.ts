import axios, { AxiosInstance } from "axios";
import {TodoType} from "../types.ts";

const instance: AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const getTodos = async (page: number = 1): Promise<TodoType[]> => {
    const response = await instance.get(`todos?_page=${page}`);
    return await response.data;
}