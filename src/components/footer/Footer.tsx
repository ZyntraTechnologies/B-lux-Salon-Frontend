import './Footer.scss';
import footerLogo from '../../assets/images/B’Lux Saloon.png';

const Footer = () => {

  return (
    <div className='footer'>
      <div className="footer-inner">
        <div className="logo">
            <img src={footerLogo} alt="footerlogo" className='footer-logo'/>
            <a href="#" className='backtoTop'>Back to top</a>
          </div>
        

          <div className="footer-details">
              <div className="main-details">
                <div className="footer-details-address">
                  <h3 className='title'>Address</h3>
                  <p className="location">location details</p>
                  <p className="email">Email - Email@gmail.com</p>
                  <p className="tel">Tel - 086 888 888</p>
                </div>
                <div className="footer-details-quick-links">
                  <h3 className='title'>Quick links</h3>
                  <a href="#" className="links">Sitemap</a>
                  <a href="#" className="links">About us</a>
                  <a href="#" className="links">Contact us</a>
                  <a href="#" className="links">Our works</a>
                  <a href="#" className="links">View more</a>
                </div>
              </div>
              <div className="footer-details-appointment">
                <a href="#" className="button">Make an Appointment</a>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.54314844524757!2d79.98042626805339!3d6.9275643000000064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2570e0883a279%3A0xef38921dd99571b3!2zQuKAmUxVWCBTQUxPTg!5e0!3m2!1sen!2slk!4v1735397640783!5m2!1sen!2slk"
                width="600"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
                ></iframe>
              </div>
          </div>
          <div className="footer-credits">
            <div className="copyrights">2024 Copyrights © All right reserved to <span>B’luxsaloon</span></div>
            <div className="site-link">Designed by <a href="https://zyntratechnologies.com/" className="company">Zyntra Technologies</a></div>
          </div>
         
      </div>
      
    </div>
  );

}

export default Footer;
