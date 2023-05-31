// import React from 'react'

import { Link } from "react-router-dom"

const ViewsDetails = () => {
  return (
    <>
        <div className="container-fluid page-header mb-5 p-0 bg-dark" style={{ backgroundImage: "url(../../assets/image/notes/mth18.jpg)" }}>
            <div className="container-fluid page-fluid-inner py-5">
                <div className="container text-center pb-5">
                <h1 className="display-3 text-white mb-3 aniamted slideInDown">Is coming soon...</h1>
                <nav aria-label='breadcrumb'>
                    <ol className="breadcrumb justify-content-center text-uppercase">
                    <li className="breadcrumb-item"><Link href="/" className='text-decoration-none'>Home</Link> </li>
                    <li className="breadcrumb-item"><Link to="/rooms" className='text-decoration-none'>Rooms</Link> </li>
                    <li className="breadcrumb-item text-white active">Coming</li>
                    </ol>
                </nav>
                </div>
            </div>
        </div>
    </>
  )
}

export default ViewsDetails
