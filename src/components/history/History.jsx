// import React from 'react'

import { Link } from "react-router-dom"

const History = () => {
  return (
    <>
      {/* <div className="container-xxl py-5 px-0 wow zoomIn"> */}
      <div className="container-xxl py-5 px-0">
        <div className="row g-0">
          <div className="col-md-6 bg-dark d-flex justify-content-center">
            <div className="p-5">
              <h6 className="section-title text-start text-white text-uppercase mb-3">
                Place to Relax
              </h6>
              <h1 className="text-white mb-4">Discover A Brand Luxurious Hotel</h1>
              <p className="text-white mb-4">Feel free to ask any question and you will get the correct answer your enjoyment is our Goal. Be happy and smile, connect wherever you sit becouse our hotel is connected to the rest of the world. </p>
              <Link to='/' className="btn btn-primary py-md-3 px-md-5 me-3">Our Rooms</Link>
              <Link to='/' className="btn btn-light py-md-3 px-md-5">Book Now</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="video">
              <button className="btn-play">
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title">Youtube Video</h5>
              <button className="btn-close"></button>
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                <iframe src="" className="embed-responsive-item"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default History
