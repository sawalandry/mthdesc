// import React from 'react'

import { Link } from "react-router-dom"
import Newsletter from "../newsletter/Newsletter"

const Footer = () => {
  return (
    <>
      <Newsletter />
      {/* <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay='0.1s'> */}
      <div className="container-fluid bg-dark text-light footer" >
        <div className="container pb-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              <div className="bg-primary rounded p-4">
                <Link to='/'>
                  <h1 className="text-white text-uppercase mb-3">
                    <i className="ri-community-fill"></i>MTH
                  </h1>
                </Link>
                <p className="text-white mb-0">
                  Booking <Link className="text-dark fw-medium text-decoration-none" to='/'>MTH Premium Version</Link>, stay safe on proffesion website fro our Hotel business and be attation of new visitors upon our site{'\''}s  launch 
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6 className="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
              <p className="mb-2"><i className="ri-map-pin-2-fill me-3"></i>RN3 street, Rumonge, Bdi</p>
              <p className="mb-2"><i className="ri-phone-fill me-3"></i>+257 79728977</p>
              <p className="mb-2"><i className="ri-mail-fill me-3"></i>murethotelsupport@gmail.com</p>
              <div className="d-flex pt-2">
                <Link to="/" className="me-3 text-decoration-none"><i className="ri-facebook-circle-fill text-white"></i></Link>
                <Link to="/" className="me-3 text-decoration-none"><i className="ri-instagram-fill text-white"></i></Link>
                <Link to="/" className="me-3 text-decoration-none"><i className="ri-linkedin-box-fill text-white"></i></Link>
                <Link to="/" className="me-3 text-decoration-none"><i className="ri-twitter-fill text-white"></i></Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="row gy-5 g-4">
                <div className="col-md-6">
                  <h6 className="section-title text-start text-primary text-uppercase mb-4">Company</h6>
                  <Link className="btn btn-link text-decoration-none" to='/about'>About Us</Link>
                  <Link className="btn btn-link text-decoration-none" to='/contact'>Contact Us</Link>
                  <Link className="btn btn-link text-decoration-none" to='/'>Support</Link>
                  <Link className="btn btn-link text-decoration-none" to='/'>Terms & Condition</Link>
                </div>
                <div className="col-md-6">
                  <h6 className="section-title text-start text-primary text-uppercase mb-4">Services</h6>
                  <Link className="btn btn-link text-decoration-none" to='/'>Bar & Restaurant</Link>
                  <Link className="btn btn-link text-decoration-none" to='/'>Event & Party</Link>
                  <Link className="btn btn-link text-decoration-none" to='/'>Safari</Link>
                  <Link className="btn btn-link text-decoration-none" to='/'>Rooms</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <Link to='/' className="border-bottom text-decoration-none">Ink Hackers</Link>, All Right Reserved.

                Design By <Link to='/' className="border-bottom text-decoration-none">Barnasawa Community</Link>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <Link to='/' className="text-decoration-none">Home</Link>
                  <Link to='/' className="text-decoration-none">Cookies</Link>
                  <Link to='/' className="text-decoration-none">Help</Link>
                  <Link to='/' className="text-decoration-none">FQAs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
