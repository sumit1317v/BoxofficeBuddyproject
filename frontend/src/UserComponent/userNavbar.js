import { Link } from "react-router-dom";

export default function UserNavbar(){

  return (
  <div>
    <nav className="navbar navbar-expand-sm bg-light mb-3">
        <div className="container-fluid">
          <ul className="navbar-nav hello">
            <li className="nav-item">
              <Link  className="navbar-brand">
                Box Office Buddy
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user" className="nav-link px-3">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user/seating" className="nav-link px-3">
                 Seating Arrangement
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user/booking" className="nav-link px-3">
                Booking
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
  </div>
  );
}