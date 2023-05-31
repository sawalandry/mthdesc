// import React from 'react'

import Slider from 'react-slick';
import img1 from '../../assets/image/testimonial-1.jpg';
import img2 from '../../assets/image/testimonial-2.jpg';
import img3 from '../../assets/image/testimonial-3.jpg';
import img4 from '../../assets/image/testimonial-4.jpg';

const testimonialData = [
  {
    desc: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos',
    imgUrl: img1,
    name: 'Client name1',
    title: 'Professional',
  },
  {
    desc: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos',
    imgUrl: img2,
    name: 'Client name2',
    title: 'Professional',
  },
  {
    desc: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos',
    imgUrl: img3,
    name: 'Client name3',
    title: 'Professional',
  },
  {
    desc: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos',
    imgUrl: img4,
    name: 'Client name4',
    title: 'Professional',
  },
]

const Testimonials = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <>
      {/* <div className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn" data-wow-delay='0.1s'> */}
      <div className="container-xxl testimonial my-5 py-5 bg-dark" >
        <div className="container">
          <div className="owl-carousel testimonial-carousel py-5">
            <Slider {...settings}>
              {
                testimonialData.map((item, index) => (
                  <div className="testimonial-item position-relative bg-white rounded overflow-hidden" key={index}>
                    <p>{item.desc}</p>
                    <div className="d-flex align-items-center">
                      <img src={item.imgUrl} alt="" className="img-fluid flex-shrink-0 rounded" style={{width: '45px', height: '45px'}} />
                      <div className="ps-3">
                        <h6 className="fw-bold mb-1">{item.name}</h6>
                        <small>{item.title}</small>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials