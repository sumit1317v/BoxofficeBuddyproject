import { Link, Outlet } from "react-router-dom";
import './theaterow.css'
import AdminNavbar from '../TheatreOwner/ownerNavbar';


export default function TheaterOwner(){

  return (
    <div>
      <AdminNavbar />
      <div  className="mainDiv">
        <Outlet />
      </div>

    </div>
  )
}