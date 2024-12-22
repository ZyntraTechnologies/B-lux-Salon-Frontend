import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home-page/HomePage';
import ContactPage from '../pages/contact-page/ContactPage';
import OurWorkPage from '../pages/our-work-page/OurWorkPage';
import AboutPage from '../pages/about-page/AboutPage';

const MainNavigation = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='contact' Component={ContactPage}/>
        <Route path='/work' Component={OurWorkPage}/>
        <Route path='/about' Component={AboutPage}/>
      </Routes>
    </BrowserRouter>
  );
  
}

export default MainNavigation;