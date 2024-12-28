import About from '../../components/about/About';
import Designers from '../../components/designers/Designers';
import Footer from '../../components/footer/Footer';
import HomeHero from '../../components/home-hero/HomeHero';
import Navbar from '../../components/navbar/Navbar';
import Services from '../../components/services/Services';
import './HomePage.scss';

const HomePage = () => {

  return (
    <>
      <Navbar />
      <HomeHero />
      {/* <Designers />
      <Services />
      <About />
      <Footer /> */}
    </>
  );
  
}

export default HomePage;
