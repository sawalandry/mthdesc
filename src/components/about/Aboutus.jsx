// import React from 'react'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import img from '../../assets/image/img9.jpg';
import img1 from '../../assets/image/img4.jpg';
import img2 from '../../assets/image/gallery3.jpg';
import img3 from '../../assets/image/img10.jpg';

const Aboutus = () => {
  return (
    <>
      <div className="container-xxl py-5" id='about'>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">About Us</h6>
              <h1 className="mb-4">Welcome to <span className="text-primary text-uppercase">MTH</span> </h1>
              <p className="mb-4">
                <span className="text-primary text-uppercase">*MTH*</span> 
                means Murembwe Tourist Hotel located near murembwe river in Rumonge city on RN3, Welcome and feel a fresh air, 
                meet the high rank chef and he is good kitchen. 
                It is around 5mins from rumonge town to here.
                But remember that you will drink for your responsability.
              </p>
              <div className="row g-3 pb-4">
                {/* <div className="col-sm-4 wow fadeIn" data-wow-delay='0.1s'> */}
                <div className="col-sm-4" >
                  <div className="border rounded p-1">
                    <div className="border rounded text-center p-4">
                      <i className="ri-hotel-fill text-primary mb-2" style={{ fontSize: '40px', fontWeight: '600' }}></i>
                      <h2 className="mb-1">
                        <CountUp style={{ fontSize: '50px', fontWeight: '600' }} start={0} end={16} duration={6} />
                      </h2>
                      <p className="mb-0">Rooms</p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-sm-4 wow fadeIn" data-wow-delay='0.3s'> */}
                <div className="col-sm-4">
                  <div className="border rounded p-1">
                    <div className="border rounded text-center p-4">
                      <i className="ri-group-fill text-primary mb-2" style={{ fontSize: '40px', fontWeight: '600' }}></i>
                      <h2 className="mb-1">
                        <CountUp style={{ fontSize: '50px', fontWeight: '600' }} start={0} end={10} duration={6} />
                      </h2>
                      <p className="mb-0">Staffs</p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-sm-4 wow fadeIn" data-wow-delay='0.1s'> */}
                <div className="col-sm-4">
                  <div className="border rounded p-1">
                    <div className="border rounded text-center p-4">
                      <i className="ri-customer-service-fill text-primary mb-2" style={{ fontSize: '40px', fontWeight: '600' }}></i>
                      <h2 className="mb-1">
                        <CountUp style={{ fontSize: '50px', fontWeight: '600' }} start={0} end={2000} duration={15} />
                      </h2>
                      <p className="mb-0">Clients & More</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link to='/rooms' className='btn btn-primary py-3 px-5 mt-2'>Explore More..</Link>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  {/* <img src={img3} alt="pics1" className="img-fluid rounded w-75 wow zoomIn" data-wow-delay='0.1s' /> */}
                  <img src={img3} alt="pics1" className="img-fluid rounded w-75" />
                </div>
                <div className="col-6 text-start">
                  {/* <img src={img} alt="pic2" className="img-fluid rounded w-100 wow zoomIn" data-wow-delay='0.3s' /> */}
                  <img src={img} alt="pic2" className="img-fluid rounded w-100" />
                </div>
                <div className="col-6 text-end">
                  <img src={img1} alt="pics3" className="img-fluid rounded w-50"/>
                  {/* <img src={img1} alt="pics3" className="img-fluid rounded w-50 wow zoomIn" data-wow-delay='0.5s' /> */}
                </div>
                <div className="col-6 text-start">
                  {/* <img src={img2} alt="pics4" className="img-fluid rounded wow w-75 zoomIn" data-wow-delay='0.7s' /> */}
                  <img src={img2} alt="pics4" className="img-fluid rounded w-75" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutus
