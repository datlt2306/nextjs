import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001",
});
// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);
export default instance;
