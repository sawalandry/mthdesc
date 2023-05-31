// import React from 'react';
import room1 from '../../assets/image/room-1.jpg';
import room2 from '../../assets/image/room-2.jpg';
import room3 from '../../assets/image/room-3.jpg';
import { Link } from 'react-router-dom';


const roomData = [
  {
    title: 'Junior Suite',
    desc: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
    price: '5$/Night',
    imgUrl: room1,
    dataWow: '0.1s'
  },
  {
    title: 'Executive Suite',
    desc: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
    price: '10$/Night',
    imgUrl: room2,
    dataWow: '0.3s'
  },
  {
    title: 'Super Deluxe',
    desc: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.',
    price: '20$/Night',
    imgUrl: room3,
    dataWow: '0.6s'
  },
]

const Services = () => {
  return (
    <>
      <div className="container-xxl py-5" id='services'>
        <div className="container">
          {/* <div className="text-center wow fadeInUp" data-wow-delay='0.1s'> */}
          <div className="text-center" >
            <h6 className="section-title text-center text-primary teext-uppercase">Our Rooms</h6>
            <h1 className="mb-5">
              Explore Our {' '}
              <span className="text-primary text-uppercase">Rooms</span>
            </h1>
          </div>
          <div className="row g-4">
            {
              roomData.map((item, index)=> (
                // <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={item.dataWow} key={index}>
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="room-item shadow rounded overflow-hidden">
                    <div className="position-relative">
                      <img src={item.imgUrl} alt="room-1" className="img-fluid" />
                      <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">{item.price}</small>
                    </div>
                    <div className="p-4 mt-2">
                      <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0">{item.title}</h5>
                        <div className="ps-2">
                          <small className="ri-star-s-fill text-primary"></small>
                          <small className="ri-star-s-fill text-primary"></small>
                          <small className="ri-star-s-fill text-primary"></small>
                          <small className="ri-star-s-fill text-primary"></small>
                          <small className="ri-star-s-fill text-primary"></small>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <small className='border-end me-3 pe-3'>
                          <i className="ri-hotel-bed-fill text-primary me-2"></i>1 Bed
                        </small>
                        <small className="border-end me-3 pe-3">
                          Bath
                        </small>
                        <small className="border-end me-3 pe-3">
                          <i className="ri-wifi-fill text-primary me-2"></i> Wifi
                        </small>
                      </div>
                      <p className="text-body mb-3">
                        {item.desc}
                      </p>
                      <div className="d-flex justify-content-between">
                        <Link to='/view' className="btn btn-sm btn-primary rounded py-2 px-4">View Detail</Link>
                        <Link to='/booking' className="btn btn-sm btn-dark rounded py-2 px-4">Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
