import {useState, useEffect} from 'react'

const BackupButton = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
    
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    

  return (
    <>
       <a href="#" className={isVisible ? 'back-to-top show' : 'back-to-top hide'} onClick={handleClick}>
       <i className="ri-arrow-up-fill d-flex"></i>
       </a>
    </>
  )
}

export default BackupButton
