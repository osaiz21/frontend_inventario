import axios from "axios";


export const instanceXhr = axios.create({
    baseURL: import.meta.env.VITE_ENDPOINT,
    timeout: 1000000,
    headers: {
        'X-Custom-Header': 'foobar',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
})



export const urldataTable = import.meta.env.VITE_ENDPOINT || 'http://localhost:3000'

export class axiosPrivate {
    constructor() {
        this.sendxhr =  axios.create({
            baseURL: import.meta.env.VITE_ENDPOINT,
            headers: {
                'X-Custom-Header': 'foobar',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
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

export class DataTableGeneral {
    constructor(name, data, columns, funcion = () => { 
        console.log('Click')
    }) {
        this.nameDataTable = name;
        this.data = data
        this.columns = columns
        this.selected = []
        this.id = 0
        this.RowIndexFunction = funcion
        //window[`dt_${name}`] = name
        // window[`dt_${name}`] = new DataTable(`#${name}`)
    }
    createDataTable = () => {
        console.log(this.nameDataTable )
        // this.addEventListener('click', () => { console.log('oswald')} , false)
        window[`dtg_${this.nameDataTable}`] = {
            ...this,
            ...new DataTable(`#${this.nameDataTable}`, 
                {
                    processing: true,
                    // serverSide: true,
                    autoWidth: true,
                    columns: this.columns,              
                    data: this.data,
                    destroy: true,
                    searching: false,
                    scrollX: true,
                    select: true,
                    rowCallback: ( row, data, displayIndex ) => {
                        if ( $.inArray(data.id, this.selected) !== -1 ) {
                            $(row).addClass('selected');
                        }
                    },
                    select: {
                        style: 'os',
                        selector: 'td:first-child'
                    }
                }
            )
        } 
        
        window[`dtg_${this.nameDataTable}`].on('click', 'tbody tr',  (e) => {
                let classList = e.currentTarget.classList
                if (classList.contains('selected')) {
                    classList.remove('selected')
                    let narray = window[`dtg_${this.nameDataTable}`].selected.filter( ({position = 0}, indice) => position != e.currentTarget._DT_RowIndex)
                    window[`dtg_${this.nameDataTable}`].selected = narray        
                    
                } else {
                    
                    classList.add('selected')
                    window[`dtg_${this.nameDataTable}`].selected = [
                        // ...window[`dtg_${this.nameDataTable}`].selected || [],
                        {
                            ...window[`dtg_${this.nameDataTable}`].row(e.currentTarget._DT_RowIndex).data(),
                            position : e.currentTarget._DT_RowIndex
                        }
                    ]
                    this.RowIndexFunction()
                    localStorage.setItem(`dtg_${this.nameDataTable}`, JSON.stringify(window[`dtg_${this.nameDataTable}`].row(e.currentTarget._DT_RowIndex).data()))
                }
            } 
        )
    }
}