// import React from 'react'

import { Link } from "react-router-dom"
import Book from "../../components/hero/Book"
import { Services } from "../../components"
import Testimonials from "../../components/testimonial/Testimonials"

const RoomsB = () => {
  return (
    <>
        <div className="container-fluid page-header mb-5 p-0 bg-dark" style={{ backgroundImage: "url(../../assets/image/notes/mth18.jpg)" }}>
            <div className="container-fluid page-fluid-inner py-5">
                <div className="container text-center pb-5">
                    <h1 className="display-3 text-white mb-3 aniamted slideInDown">Rooms</h1>
                    <nav aria-label='breadcrumb'>
                        <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><a href="/" className='text-decoration-none'>Home</a> </li>
                        <li className="breadcrumb-item"><Link to="/booking" className='text-decoration-none'>Booking</Link> </li>
                        <li className="breadcrumb-item text-white active">Rooms</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <Book />
        <Services />
        <Testimonials />
    </>
  )
}

export default RoomsB
