import About from '../../components/about/About';
import Designers from '../../components/designers/Designers';
import Footer from '../../components/footer/Footer';
import HomeHero from '../../components/home-hero/HomeHero';
import Navbar from '../../components/navbar/Navbar';
import Services from '../../components/services/Services';
import './HomePage.scss';
import usePopup from '../../hooks/usePopup';
import Popup from '../../components/Popup/Popup';

const HomePage = () => {

  const { isPopupOpen, handlePopup } = usePopup();

  return (
    <>
      {
        isPopupOpen &&  <Popup 
                          handlePopup={handlePopup} 
                          isPopupOpen={isPopupOpen}
                        />
      }
      <Navbar 
        isPopupOpen={isPopupOpen} 
        handlePopup={handlePopup}
      />
      <HomeHero />
      <Designers />
      <Services />
      <About />
      <Footer />
    </>
  );
  
}

export default HomePage;
