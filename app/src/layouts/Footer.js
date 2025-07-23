const Footer = () => {
  return (
    <div className="kf-footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* logo */}
            <div
              className="kf-logo element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a href="index.html">
                <img src="images/logo.jpg" alt="image" />
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* hours */}
            <div
              className="kf-f-hours element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Working Hours</h5>
              <ul>
                <li>
                  Monday - Thursday
                  <em>11:30AM - 9:00PM</em>
                </li>
                <li>
                  Friday - Sunday
                  <em>11:30AM - 10:00PM</em>
                </li>
                {/*}
                <li>
                  <strong>Saturday Close</strong>
                </li>
                */}
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* contact */}
            <div
              className="kf-f-contact element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Contact Us</h5>
              <ul>
                <li>
                  <i className="las la-map-marker" />
                  <em>Location :</em>
                  48 Harvard Ave, Allston, MA
                </li>
                {/*}
                <li>
                  <i className="las la-envelope-open-text" />
                  <em>Email Address :</em>
                  kaffendev@gmail.com
                </li>
                */}
                <li>
                  <i className="las la-phone" />
                  <em>Phone Number :</em>
                  (617) 903-3327
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* gallery */}
            <div
              className="kf-f-gallery element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Gallery</h5>
              <ul>
                <li>
                  <a
                    href="images/placeholder-img.png"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/placeholder-img.png" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/placeholder-img.png"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/placeholder-img.png" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/placeholder-img.png"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/placeholder-img.png" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/placeholder-img.png"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/placeholder-img.png" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/placeholder-img.png"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/placeholder-img.png" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/placeholder-img.png"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/placeholder-img.png" alt="image" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
            {/* copyright */}
            <div
              className="kf-copyright element-anim-1 scroll-animate"
              data-animate="active"
            >
              Copyright © 2025 Haoshiguang. 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
