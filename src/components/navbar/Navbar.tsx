import "./Navbar.scss";

const navbar = [
  { item: "Home" },
  { item: "Contact us" },
  { item: "Our works" },
  { item: "About us" },
];

const Navbar = () => {
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
          <button className="navbar-inner-button">Make an appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
