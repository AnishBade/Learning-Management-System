import React from 'react'
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>Learn Online</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to=''>Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to=''>Teachers</Link>
            </li>
            <li class="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" id="navbarFropdown" aria-expanded="false">
                User
              </Link>
              <ul className="dropdown-menu" aria-labelledby='navbarDropdown'>
                <li>
                  <Link className="dropdown-item" to='/user-register'>User Register</Link>
                </li>
                <li><Link className="dropdown-item" to='/user-register'>User Register</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
