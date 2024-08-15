import axios from "axios";


export const instanceXhr = axios.create({
    baseURL: import.meta.env.VITE_ENDPOINT,
    timeout: 1000000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
})

export const urldataTable = import.meta.env.VITE_ENDPOINT || 'http://localhost:3000'

export class axiosPrivate {
    constructor(){
        this.sendxhr =  axios.create({
            baseURL: import.meta.env.VITE_ENDPOINT,
            headers: {
                'X-Custom-Header': 'foobar'
            }
        })
        this.setItem = (key = '', value = '') => {
            window.localStorage.setItem(key, JSON.stringify(value))
        }
        this.delItem = (key = '') => {
            window.localStorage.removeItem(key)
        }

        this.getItem = (key = '') => {
            return JSON.parse( window.localStorage.getItem(key))
        }

        this.getItemKey = (key = '') => {
            let value =  JSON.parse(window.localStorage.getItem(key))
            return value['key'] || ''
        }
    }
}
