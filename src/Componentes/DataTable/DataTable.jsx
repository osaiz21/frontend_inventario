import { useState } from "react"
import { useDispatch } from "react-redux"
import { getUsersCecos } from "../../thunks/Users"

export const DataTableCmp = ({id = 'sin_definir'}) => {
    const dispatch = useDispatch()

    useState(() => {
       
    },[id])

    return (
        <table id={id} className="table table-bordered table-striped" style={{with:'100%'}}>
        </table>
    )
}