import axios from "axios";


export const instanceXhr = axios.create({
    baseURL: import.meta.env.VITE_ENDPOINT,
    timeout: 1000000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
})

export const urldataTable = import.meta.env.VITE_ENDPOINT || 'http://localhost:3000'
