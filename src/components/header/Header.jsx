// import React from 'react'

import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>  
      <div className="container-fluid bg-dark px-0">
        <div className="row gx-0">
          <div className="col-lg-3 bg-dark d-none d-lg-block">
            <Link to="/" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
              <h1 className="m-0 text-primary text-uppercase text-white">
                <i className="ri-community-fill"></i>MTH
              </h1>
            </Link>
          </div>
          <div className="col-lg-9">
            <div className="row gx-0 bg-white d-none d-lg-flex">
              <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                  <i className="ri-mail-fill text-primary me-2"></i>
                  <p className="mb-0">murethotelsupport@gmail.com</p>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-2">
                  <i className="ri-phone-fill text-primary me-2"></i>
                  <p className="mb-0">+257 79728977</p>
                </div>
              </div>
              <div className="col-lg-5 px-5 text-end">
                <div className="d-inline-flex align-items-center py-2">
                  <Link to="/" className="me-3 text-decoration-none"><i className="ri-facebook-circle-fill"></i></Link>
                  <Link to="/" className="me-3 text-decoration-none"><i className="ri-instagram-fill"></i></Link>
                  <Link to="/" className="me-3 text-decoration-none"><i className="ri-linkedin-box-fill"></i></Link>
                  <Link to="/" className="me-3 text-decoration-none"><i className="ri-twitter-fill"></i></Link>
                </div>
              </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
              <Link href="/" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 text-white text-uppercase">
                  <i className="ri-community-fill"></i>MTH
                </h1>
              </Link>
              <button className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-between">
                <div className="navbar-nav mr-auto py-0">
                  <Link to="/" className="nav-item nav-link">Home</Link>
                  <a href="#about" className="nav-item nav-link">About</a>
                  <a href="#services" className="nav-item nav-link">Services</a>
                  <Link to="/booking" className="nav-item nav-link">Booking</Link>
                  <Link to="/contact" className="nav-item nav-link">Contact</Link>
                </div>
                <Link to="/login" className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">
                  Be a member
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>

  )
}

export default Header
