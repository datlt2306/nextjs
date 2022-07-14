import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://6110f09bc38a0900171f0ed0.mockapi.io'
})
export default instance