import { useEffect } from "react"
import { useSelector } from "react-redux"

export const ViewFiles = () => {
  const {endpoint , files} = useSelector(state => state.files)

  useEffect(() => {
  },[])

  return (
    <div className="row">
      <div className="col-md-12 col-lg-6 col-xl-4">
        <div className="card mb-2">
        <img className="card-img-top" src="../dist/img/photo2.png" alt="Dist Photo 2"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
        <h5 className="card-title text-white mt-5 pt-2">Card Title</h5>
        {/* <p className="card-text pb-2 pt-1 text-white">
        Lorem ipsum dolor sit amet, <br>
        consectetur adipisicing elit <br>
        sed do eiusmod tempor.
        </p> */}
        {/* <a href="#" className="text-white">Last update 15 hours ago</a> */}
        </div>
      </div>
      </div>
    </div>
  )
}