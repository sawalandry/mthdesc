import AOS from "aos";
import { useEffect } from 'react';
import { Hero, Aboutus, Services, History, Photogallery, Packages} from '../index'


const Home = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
      <>
        <Hero />
        <Aboutus />
        <Services />
        <History />
        <Packages />
        <Photogallery />
      </>
  )
}

export default Home
