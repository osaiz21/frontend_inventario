import { useEffect } from "react"
import { useSelector } from "react-redux"

export const ViewFiles = () => {
  const {endpoint , files} = useSelector(state => state.files)

  useEffect(() => {
    console.log(files)
  },[])

  return (
    <div className='card card-primary'>
      <div className="card-body">
        <div className="row">
          {files.map(({path}, indice) => {
            return (
              <div className="col-sm-6" key={`img_${indice}`}>
                <img src={`${endpoint}${path}`} alt="img" className="img-fluid mb-2" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}