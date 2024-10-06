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
        window['axiosp'] = this
    }
}

export class DataTableGeneral {
    constructor(
        name, 
        data,
        columns, 
        addfuncion = () => { }
    ) {
        this.nameDataTable = name;
        this.data = data
        this.columns = columns
        this.selected = []
        this.id = 0
        this.dataTable = null
        this.urlEndpoint = import.meta.env.VITE_ENDPOINT || ''
        this.RowIndexFunction = addfuncion
       
        //window[`dt_${name}`] = name
        // window[`dt_${name}`] = new DataTable(`#${name}`)
    }
    createDataTable = (name = '') => {
        // this.addEventListener('click', () => { console.log('oswald')} , false)
        window[`${this.nameDataTable}`] = new DataTable(`#${this.nameDataTable}`, 
            {
                dom: 'Bfrtip',
                buttons: [
                    {
                        extend:'excel',
                        title: 'Excel'
                    },
                    {
                        extend:'pdf',
                        title: 'Pdf'
                    },
                    {
                        extend:'print',
                        title: 'Print'
                    },
                    {
                        extend:'csv',
                        title: 'Csv'
                    }
                ],    
                processing: true,
                searching: false,
                // serverSide: true,
                ScrollXInner: "100%",
                autoWidth: false,
                responsive:false,
                columns: this.columns,              
                data: this.data,
                destroy: true,
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
                },
                fnInitComplete: function (oSettings, json) {
                    //console.log('finish' + this.nameDataTable + name)
                    // $(`#${name}`).DataTable().columns.adjust().draw()
                }
            }
        )
       

        //Asignar
        // console.log(this.dataTable)
        // this.dataTable = new DataTable(`#${this.nameDataTable}`, 
        //     {
        //         processing: true,
        //         // serverSide: true,
        //         autoWidth: false,
        //         columns: this.columns,              
        //         data: this.data,
        //         destroy: true,
        //         searching: false,
        //         scrollX: true,
        //         sScrollXInner: "100%",
        //         select: true,
        //         responsive: true, 
        //         lengthChange: false, 
        //         autoWidth: false,
        //         rowCallback: ( row, data, displayIndex ) => {
        //             if ( $.inArray(data.id, this.selected) !== -1 ) {
        //                 $(row).addClass('selected')
        //             }
        //         },
        //         select: {
        //             style: 'os',
        //             selector: 'td:first-child'
        //         }
        //     }
        // )

        
        window[`${this.nameDataTable}`].on('click', 'tbody tr',  (e) => {
                let classList = e.currentTarget.classList
                if (classList.contains('selected')) {
                    classList.remove('selected')
                    let narray = window[`${this.nameDataTable}`].selected.filter( ({position = 0}, indice) => position != e.currentTarget._DT_RowIndex)
                    window[`${this.nameDataTable}`].selected = narray        
                    
                } else {
                    
                    classList.add('selected')
                    window[`${this.nameDataTable}`].selected = [
                        // ...window[`dtg_${this.nameDataTable}`].selected || [],
                        {
                            ...window[`${this.nameDataTable}`].row(e.currentTarget._DT_RowIndex).data(),
                            position : e.currentTarget._DT_RowIndex
                        }
                    ]
                    this.RowIndexFunction()
                    localStorage.setItem(`dtg_${this.nameDataTable}`, JSON.stringify(window[`${this.nameDataTable}`].row(e.currentTarget._DT_RowIndex).data()))
                }
            } 
        )
       
        window[`${this.nameDataTable}`].on('click', 'td.dt-control',  (e) => {
            let tr = e.target.closest('tr')
            let row = window[`${this.nameDataTable}`].row(tr)
            
            if (row.child.isShown()) {
                // This row is already open - close it
                row.child.hide();
            } else {
                // Open this row
                row.child(
                    (( ) => {
                        const data   = row.data()?.fotos || ''
                        const images  = JSON.parse(data)
                        return `
                            <div class="card card-success">
                                <div class="card-body">
                                    <div class="row">
                                        ${ images.map(({path , originalname}) => (
                                            `<div class="col-sm-2">
                                                <div class="card mb-2 bg-gradient-dark">
                                                    <img class="img-thumbnail" src=${ this.urlEndpoint }/${path} alt=${originalname}>
                                                    <div class="card-img-overlay d-flex flex-column justify-content-end">
                                                        <h5 class="card-title text-primary text-white">${originalname}</h5>
                                                        <p class="card-text text-white pb-2 pt-1"></p>
                                                    </div>
                                                </div>
                                            </div>`
                                        ))}
                                    </div>
                                </div>
                            </div>`
                    })()
                ).show()
            }
        })

        
        
        window[`${this.nameDataTable}`].columns.adjust().draw()
    }
}


