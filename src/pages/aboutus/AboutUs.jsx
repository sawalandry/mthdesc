// import React from 'react'

import { Link } from "react-router-dom"
import Book from "../../components/hero/Book"
import { Aboutus, Packages } from "../../components"

const AboutUs = () => {
  return (
    <>
        <div className="container-fluid page-header mb-5 p-0 bg-dark" style={{ backgroundImage: "url(../../assets/image/notes/mth18.jpg)" }}>
            <div className="container-fluid page-fluid-inner py-5">
                <div className="container text-center pb-5">
                    <h1 className="display-3 text-white mb-3 aniamted slideInDown">About Us</h1>
                    <nav aria-label='breadcrumb'>
                        <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><a href="/" className='text-decoration-none'>Home</a> </li>
                        <li className="breadcrumb-item"><Link to="/contact" className='text-decoration-none'>Contact</Link> </li>
                        <li className="breadcrumb-item text-white active">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <Book />
        <Aboutus />
        <Packages />
    </>
  )
}

export default AboutUs
