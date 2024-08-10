import React from 'react'
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom"

const Navbar = (user) => {
   return (
      <>
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
               <Link className="navbar-brand" to="/">{user.navMessage}</Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                     <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                     <Link className="nav-link" to="#">About Us</Link>
                  </div>
               </div>
            </div>
         </nav>
      </>
   )
}
Navbar.defaultProps ={
   navMessage : "Online Examination Portal"
}

export default Navbar