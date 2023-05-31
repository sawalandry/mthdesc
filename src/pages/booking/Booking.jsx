// import React from 'react'
import img from '../../assets/image/img9.jpg';
import img1 from '../../assets/image/img4.jpg';
import img2 from '../../assets/image/gallery3.jpg';
import img3 from '../../assets/image/img10.jpg';
// import bgImage from '../../assets/image/notes/mth18.jpg';
import Book from '../../components/hero/Book';
import { Link } from 'react-router-dom';


const Booking = () => {
  return (
    <>
     <div className="container-fluid page-header mb-5 p-0 bg-dark" style={{ backgroundImage: "url(../../assets/image/notes/mth18.jpg)" }}>
      <div className="container-fluid page-fluid-inner py-5">
        <div className="container text-center pb-5">
          <h1 className="display-3 text-white mb-3 aniamted slideInDown">Booking</h1>
          <nav aria-label='breadcrumb'>
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item"><a href="/" className='text-decoration-none'>Home</a> </li>
              <li className="breadcrumb-item"><Link to="/rooms" className='text-decoration-none'>Rooms</Link> </li>
              <li className="breadcrumb-item text-white active">Booking</li>
            </ol>
          </nav>
        </div>
      </div>
     </div>
     <Book />
     <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay='0.1s'>
          <h6 className="section-title text-center text-primary text-uppercase">Room Booking</h6>
          <h1 className="mb-5">Book A <span className="text-primary text-uppercase">Luxury Room</span> </h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-end">
                <img src={img3} alt="pics1" className="img-fluid rounded w-75 wow zoomIn" data-wow-delay='0.1s' />
              </div>
              <div className="col-6 text-start">
                <img src={img} alt="pic2" className="img-fluid rounded w-100 wow zoomIn" data-wow-delay='0.3s' />
              </div>
              <div className="col-6 text-end">
                <img src={img1} alt="pics3" className="img-fluid rounded w-50 wow zoomIn" data-wow-delay='0.5s' />
              </div>
              <div className="col-6 text-start">
                <img src={img2} alt="pics4" className="img-fluid rounded wow w-75 zoomIn" data-wow-delay='0.7s' />
              </div>
            </div>
          </div>
          <div className="col-lg 6">
            <div className="wow fadeInUp" data-wow-delay='0.2s'>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" id='name' placeholder='Enter your Name' className="form-control" />
                      <label>Enter Your Name:</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" id='email' placeholder='Enter your Email' className="form-control" />
                      <label>Enter Your Email:</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating date3">
                      <input type="date" id='checkin' placeholder='Check In' className="form-control datetimepicker-input" />
                      <label>Check In:</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating  date4">
                      <input type="date" id='checkout' placeholder='Check Out' className="form-control datetimepicker-input" />
                      <label>Check Out:</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select name="" id="select1" className="form-select">
                        <option value="1">Adult</option>
                        <option value="1">Adult 1</option>
                        <option value="2">Adult 2</option>
                        <option value="3">Adult 3</option>
                        <option value="4">Adult 4</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select name="" id="select2" className="form-select">
                        <option value="1">Kid</option>
                        <option value="1">Kid 1</option>
                        <option value="2">Kid 2</option>
                        <option value="3">Kid 3</option>
                        <option value="4">Kid 4</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <select className="form-select" id="select3">
                        <option value="1">Room 1</option>
                        <option value="2">Room 2</option>
                        <option value="3">Room 3</option>
                      </select>
                      <label>Select A Room</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea name="message" id="message" placeholder='Special Request' style={{height: '100px'}} className="form-control"></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type='submit'>Book Now</button>
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

export default Booking
