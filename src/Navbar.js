import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-11 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><strong>Techloset</strong></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link activeClassName="menu_active" className="nav-link active ch" aria-current="page" to="contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active ch" aria-current="page" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active ch" aria-current="page" to="service">Services</Link>
        </li>
        
        
        
      </ul>
      
    </div>
  </div>
</nav>
                    </div>
                </div>
            </div>

































        // <div classNameName="container">
        //   <Link to="/">Thapa</Link>
        //   <Link to="/contact">Contact</Link>
        //   <Link to="/service">Service</Link>
        //   <Link to="/about">About</Link>  
        // </div>
    )
}
