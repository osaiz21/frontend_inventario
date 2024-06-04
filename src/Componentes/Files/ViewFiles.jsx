import { useEffect } from "react"
import { useSelector } from "react-redux"

export const ViewFiles = () => {
  const {endpoint , files} = useSelector(state => state.files)

  useEffect(() => {
    console.log(files)
  },[])

  return (
    <div className="row">
      
         
    </div>
  )
}