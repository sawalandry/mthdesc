// import React from 'react'
import img1 from '../../assets/image/img8.jpg';
import img2 from '../../assets/image/img9.jpg';
import img3 from '../../assets/image/img10.jpg';
import Slider from "react-slick";
import Book from './Book';
import { Link } from 'react-router-dom';

const carouselData = [
  {
    imgUrl: img2,
    title: 'Amazing Rooms ',
    desc: 'Discover A Luxurious Hotel',
  },
  {
    imgUrl: img3,
    title: 'Luxury Living',
    desc: 'Stay Safe in Quiet Place',
  },
  {
    imgUrl: img1,
    title: 'Delucious Drink',
    desc: 'Relax and Enjoy our Fresh drinks',
  },
]

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <>
      <div className="container-fluid p-0 mb-5">
        <div className="carousel slide" id="header-carousel">
          <div className="carousel-inner">
            <Slider {...settings} >
              {
                carouselData.map((item, index) => {
                  return(
                    <div className="carousel-item" key={index}>
                      <img src={item.imgUrl} alt="carousel-1" className="w-100" />
                      <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth:'900px'}}>
                          <h6 className="section-title text-white text-uppecase mb-3 animated slideInDown">{item.title}</h6>
                          <h1 className="display-3 text-white mb-4 animated slideInDown">{item.desc}</h1>
                          <Link to="/rooms" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</Link>
                          <Link to="/booking" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Room</Link>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>
      </div>
      <Book />
    </>
  )
}


export default Hero
