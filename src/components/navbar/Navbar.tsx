import { useState } from "react";
import { NavbarPropsComponentProps } from "../../typescript/types/components.types";
import "./Navbar.scss";
import close from '../../assets/icons/close.png';
import menu from '../../assets/icons/menu.png';

const navbar = [
  { item: "Home" },
  { item: "Contact us" },
  { item: "Our works" },
  { item: "About us" },
];

const Navbar = (props: NavbarPropsComponentProps) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <div className="navbar">
      <div className="navbar-outer">
        <div className="navbar-inner">

          <ul className="navbar-inner-ul">
            {navbar.map((items, key) => (
              <li className="navbar-inner-li" key={key}>
                {items.item}
              </li>
            ))}
          </ul>

          <div className="navbar-inner-title">
            <h1>B'Lux</h1>
            <h1>Salon</h1>
          </div>

          <div className="navbar-inner-openstatus">
            <div className="navbar-inner-openstatus-bulb"></div>
            <div className="navbar-inner-openstatus-text">
              Opening time MON-SUN | 9.00 AM - 7.00 PM
            </div>
          </div>

          <button className="navbar-inner-button" onClick={props.handlePopup}>Make an appointment</button>

          <img src={menu} alt="menu" className="menu-img" onClick={handleOpen}/>

          {/* Mobile Navbar */}
          {
            isOpen && <div className="mobile-navbar">

            <div className="mobile-navbar-inner-title">
              <h1>B'Lux</h1>
              <h1>Salon</h1>
            </div>

            <ul className="mobile-navbar-inner-ul">
              {navbar.map((items, key) => (
                <li className="mobile-navbar-inner-li" key={key}>
                  {items.item}
                </li>
              ))}
            </ul>

            <img src={close} alt="close" className="close-img" onClick={handleOpen}/>

            <div className="mobile-navbar-inner-openstatus">
              <div className="mobile-navbar-inner-openstatus-bulb"></div>
              <div className="mobile-navbar-inner-openstatus-text">
                Opening time MON-SUN | 9.00 AM - 7.00 PM
              </div>
            </div>

            <button className="mobile-navbar-inner-button" onClick={props.handlePopup}>Make an appointment</button>

          </div>
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;
