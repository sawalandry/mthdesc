// import { useEffect } from 'react'
import './App.css'
import "aos/dist/aos.css";
import Home from './components/home/Home';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Booking from './pages/booking/Booking';
import RoomsB from './pages/rooms/RoomsB';
import Contact from './pages/contact/Contact';
import AboutUs from './pages/aboutus/AboutUs';
import ViewsDetails from './pages/viewsDetails/ViewsDetails';
// import BackupButton from './components/button/BackupButton';

const Layout = () => {
  return (
    <div className="container-xxl bg-white p-0">
      <Header />
      <Outlet />
      {/* <BackupButton /> */}
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:'/',
        element:<Home />
      },
      {
        path: '/booking',
        element: <Booking />
      },
      {
        path: '/rooms',
        element: <RoomsB />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/view',
        element: <ViewsDetails/>
      },
    ]
  },
  
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/signup',
    element:<SignUp />
  }
])



function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App




{/* <div className='text-center'>
      <h1 data-aos="fade-up"  
              data-aos-offset='200' 
              data-aos-delay='30' 
              data-aos-duration='1000' 
              data-aos-mirror='true' 
              data-aos-once='true' 
              data-aos-anchor-placement='top-center' 
              // data-aos-anchor-easing='ease-in-out'
            >
              Murembwe Tourist Hotel
          </h1>
    </div>  */}