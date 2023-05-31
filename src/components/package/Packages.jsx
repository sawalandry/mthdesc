// import React from 'react'

import { Link } from "react-router-dom"

const servicesData =[
  {
    icond: 'ri-hotel-fill text-primary',
    title: 'Rooms & Appartment',
    desc: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet',
  },
  {
    icond: 'ri-restaurant-fill text-primary',
    title: 'Resto & Bar',
    desc: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet',
  },
  {
    icond: 'ri-goblet-fill text-primary',
    title: 'Event & Party',
    desc: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet',
  },
]

const Packages = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp">
            <h6 className="section-title text-center text-primary text-uppercase">Our services</h6>
            <h1 className="mb-5">Explore our <span className="text-primary text-uppercase">Services</span> </h1>
          </div>
          <div className="row g-4">
            {
              servicesData.map((item, index) => (
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay='0.1s' key={index}>
                  <Link className="service-item rounded text-decoration-none" to='/'>
                    <div className="service-icon bg-transparent border rounded p-1">
                      <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                        <i className={item.icond} style={{ fontSize: '24px', fontWeight: 'Bold' }}></i>
                      </div>
                    </div>
                    <h5 className="mb-3">{item.title}</h5>
                    <p className="text-body mb-0">{item.desc}</p>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Packages
