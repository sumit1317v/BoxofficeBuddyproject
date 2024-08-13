
import { Link, Outlet } from "react-router-dom";
export default function Admin() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light mb-3">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="navbar-brand">
                Box Office Buddy
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/admin" className="nav-link px-3">
                Dashboard
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/admin/addmovies" className="nav-link px-3">
                Add Movies
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/admin/manageMovies" className="nav-link px-3">
                Manage Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/activeOwner" className="nav-link px-3">
                Activate Theatre Owner
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/logout" className="nav-link">
                <button className="btn btn-primary btn-sm">Logout</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div  className="mainDiv">
        <Outlet />
      </div>
    </div>
  );
}
