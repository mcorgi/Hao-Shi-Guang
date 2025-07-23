import Link from "next/link";
import { useEffect, useState } from "react";
import { stickyNav } from "../utils";

const Header = () => {
  useEffect(() => {
    stickyNav();
  }, []);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (document.querySelector("header").className.includes("animated")) {
      setTimeout(() => {
        document.querySelector("header").classList.add("opened", "show");
      }, 800);
    }
  }, [toggle]);

  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };

  return (
    <header className={`kf-header ${toggle ? "animated" : ""}`}>
      {/* topline */}
      <div className="kf-topline">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            {/* hours */}
            <div className="kf-h-group">
              <i className="far fa-clock" /> <em>opening hours :</em> 11:30AM-9PM
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-center">
            {/* social */}
            <div className="kf-h-social">
              
              
              <a href="https://www.instagram.com/haoshiguang_boston/" target="blank">
                <i className="fab fa-instagram" />
              </a>
              
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-right">
            {/* location */}
            <div className="kf-h-group">
              <i className="fas fa-map-marker-alt" /> <em>Location :</em> 48 Harvard Ave, Allston, MA
            </div>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div className="kf-navbar">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            {/* logo */}
            <div className="kf-logo">
              <Link href="/">
                <img src="images/logo.jpg" alt="Hao Shi Guang" style={{ width: "120px", height: "auto" }}/>
              </Link>
              <div className="kf-logo d-flex align-items-center gap-2">

            </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 align-center">
            {/* main menu */}
            <div className="kf-main-menu">
              <ul>
                <li>
                  <Link href="/">
                    Home
                  </Link>
                  
                </li>
                <li>
                  <Link href="about">
                    About
                    <i className="las la-angle-down" />
                  </Link>
                  <ul>
                    <li>
                      <Link href="about">About Us</Link>
                    </li>
                    {/*
                    <li>
                      <Link href="history">History</Link>
                    </li>
                    */}
                    <li>
                      <Link href="team">Our Chefs</Link>
                    </li>
                    {/*
                    <li>
                      <Link href="gallery">Gallery</Link>
                    </li>
                    */}
                  </ul>
                </li>
                <li>
                  <Link href="https://order.toasttab.com/online/haoshiguang">
                    Menu
                    
                  </Link>
                
                    
                  
                </li>

                <li>
                  <Link href="jointeam">Join Our Team</Link>
                </li>
                
                <li>
                  <Link href="contacts">Contact</Link>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 align-right">
            {/* menu btn */}
            <a
              href="#"
              className={`kf-menu-btn ${toggle ? "active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span />
            </a>
            {/* btn */}
            <Link href="https://order.toasttab.com/online/haoshiguang" className="kf-btn h-btn">
              <span>Order Online</span>
            </Link>
          </div>
        </div>
      </div>
      {/* mobile navbar */}
      <div className="kf-navbar-mobile">
        {/* mobile menu */}
        <div className="kf-main-menu">
          <ul>
            <li className="has-children">
              <Link href="/">Home</Link>
              <i
                className="las la-angle-down"
                onClick={() => activeMenuSet("home")}
              />
              <ul style={activeLi("home")}>
                <li>
                  <Link href="/">Coffee House</Link>
                </li>
                <li>
                  <Link href="index-2">Restaurant</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="about">About</Link>
            </li>
            <li className="has-children">
              <Link href="menu-coffee">Menu</Link>
              <i
                className="las la-angle-down"
                onClick={() => activeMenuSet("Menu")}
              />
              <ul style={activeLi("Menu")}>
                <li>
                  <Link href="menu-coffee">Menu Coffee</Link>
                </li>
                <li>
                  <Link href="menu-restaurant">Menu Restaurant</Link>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#">Pages</a>
              <i
                className="las la-angle-down"
                onClick={() => activeMenuSet("Pages")}
              />
              <ul style={activeLi("Pages")}>
                <li>
                  <Link href="services">Service</Link>
                </li>
                <li>
                  <Link href="reservation">Reservation</Link>
                </li>
                <li>
                  <Link href="history">History</Link>
                </li>
                <li>
                  <Link href="team">Our Chefs</Link>
                </li>
                <li>
                  <Link href="gallery">Gallery</Link>
                </li>
                <li>
                  <Link href="faq">FAQ</Link>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#">Blog</a>
              <i
                className="las la-angle-down"
                onClick={() => activeMenuSet("Blog")}
              />
              <ul style={activeLi("Blog")}>
                <li>
                  <Link href="blog-grid">Blog Grid</Link>
                </li>
                <li>
                  <Link href="blog">Blog Standard</Link>
                </li>
                <li>
                  <Link href="blog-single">Blog Single</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="contacts">Contacts</Link>
            </li>
          </ul>
        </div>
        {/* mobile topline */}
        <div className="kf-topline">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* mobile btn */}
              <Link href="https://tables.toasttab.com/restaurants/93a7c5b8-22cf-45d6-8742-259e7bc967d8/findTime" className="kf-btn h-btn">
                <span>Book a table</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* social */}
              <div className="kf-h-social">
                <a href="facebook.com" target="blank">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="twitter.com" target="blank">
                  <i className="fab fa-twitter" />
                </a>
                <a href="instagram.com" target="blank">
                  <i className="fab fa-instagram" />
                </a>
                <a href="youtube.com" target="blank">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* hours */}
              <div className="kf-h-group">
                <i className="far fa-clock" /> <em>opening hours :</em> 08:00 am
                - 09:00 pm
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* location */}
              <div className="kf-h-group">
                <i className="fas fa-map-marker-alt" /> <em>Location :</em> 55
                main street, new york
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
