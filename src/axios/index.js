import axios from "axios";


export const instanceXhr = axios.create({
    baseURL: 'http://192.168.0.14:3000/',
    timeout: 1000000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
})

