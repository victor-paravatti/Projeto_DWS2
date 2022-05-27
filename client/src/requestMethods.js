import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2FkZjI3NDQ5ZDg1OTEwNjI1Mzg4YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzU5MzM2NiwiZXhwIjoxNjUzODUyNTY2fQ.z-WJ7_gZu-jxm9tYY8AjRpsTp9uk7ccZFqPlAhsjRsQ";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${token}` }
})