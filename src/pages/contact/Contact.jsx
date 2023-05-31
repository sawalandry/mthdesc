// import React from 'react'

import { Link } from "react-router-dom"
import Book from "../../components/hero/Book"

const Contact = () => {
  return (
    <>
        <div className="container-fluid page-header mb-5 p-0 bg-dark" style={{ backgroundImage: "url(../../assets/image/notes/mth18.jpg)" }}>
            <div className="container-fluid page-fluid-inner py-5">
                <div className="container text-center pb-5">
                    <h1 className="display-3 text-white mb-3 aniamted slideInDown">Contact Us</h1>
                    <nav aria-label='breadcrumb'>
                        <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><a href="/" className='text-decoration-none'>Home</a> </li>
                        <li className="breadcrumb-item"><Link to="/rooms" className='text-decoration-none'>Rooms</Link> </li>
                        <li className="breadcrumb-item text-white active">Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <Book />
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp">
                    <h6 className="section-title text-center text-primary text-uppercase">Contact Us</h6>
                    <h1 className="mb-5"> <span className="text-primary text-uppercase">Contact</span> For Any Query </h1>
                </div>
                <div className="row g-4">
                    <div className="col-12">
                        <div className="row gy-4">
                            <div className="col-md-4">
                                <h6 className="section-title text-start text-primary text-uppercase">Booking</h6>
                                <p><i className="ri-mail-fill text-primary me-2"></i>murethotelsupport@gmail.com</p>
                            </div>
                            <div className="col-md-4">
                                <h6 className="section-title text-start text-primary text-uppercase">General</h6>
                                <p><i className="ri-mail-fill text-primary me-2"></i>managersupport@gmail.com</p>
                            </div>
                            <div className="col-md-4">
                                <h6 className="section-title text-start text-primary text-uppercase">CEO</h6>
                                <p><i className="ri-mail-fill text-primary me-2"></i>ceosupport@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeIn">
                    {/* <iframe className="position-relative rounded w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                            frameBorder="0" style="min-height: 350px; border:0;" allowfullscreen="" aria-hidden="false"
                            tabIndex="0"></iframe> */}
                    </div>
                    <div className="col-md-6">
                        <div className="wow fadeInUp">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" id="name" placeholder="Your Name" className="form-control" />
                                            <label htmlFor="name">Enter Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" id="email" placeholder="Your Email" className="form-control" />
                                            <label htmlFor="email">Enter Your email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" id="subject" placeholder="Your Subject" className="form-control" />
                                            <label htmlFor="subject">Enter Your Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea type="text" id="message" placeholder="Your message" className="form-control" style={{height: '100px'}} />
                                            <label htmlFor="message">Leave A Message Here</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact
