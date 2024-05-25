import axios from "axios";


export const instanceXhr = axios.create({
    baseURL: 'http://192.168.10.147:3000/',
    timeout: 1000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
})

