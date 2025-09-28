

export default function Footer() {
  return (
    <footer className="footer-wrapper footer-layout1">
      <div className="widget-area bg-footer-color">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-auto footer-border-right">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Pages</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="blog.html">Our Blog</a></li>
                    <li><a href="team.html">Our Team</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="pricing.html">Pricing Plans</a></li>
                    <li><a href="testimonials.html">Testimonials</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-auto footer-border-right">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Our Services</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><a href="service-details.html">Real Estate Law</a></li>
                    <li><a href="service-details.html">Personal Injury</a></li>
                    <li><a href="service-details.html">Corporate Law</a></li>
                    <li><a href="service-details.html">Criminal Law</a></li>
                    <li><a href="service-details.html">Health Care</a></li>
                    <li><a href="service-details.html">Family Law</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-4 footer-border-right">
              <div className="widget footer-widget text-xl-center text-start">
                <div className="th-widget-about">
                 <div
  className="about-logo"
  style={{
    maxWidth: '140px',
    margin: '0 auto',        // centers the whole block in its parent
    textAlign: 'center',     // keeps inner content centered
  }}
>
  <a href="index.html" style={{ display: 'inline-block' }}>
    <img
      src="/assets/img/footer-round-logo.svg"
      alt="Verdicta logo"
      style={{
        width: 'clamp(96px, 12vw, 140px)',
        height: 'auto',
        display: 'block',
        margin: '0 auto',    // centers the image inside the anchor
      }}
    />
  </a>
</div>

                  <p className="about-text">
                    Verdicta is a Saudi Arabian law firm founded in 1982. They offer a
                    wide range of legal services, including corporate law, commercial law.
                  </p>
                  <div className="th-social">
                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://www.whatsapp.com/"><i className="fab fa-whatsapp"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-auto footer-border-right">
              <div className="widget footer-widget">
                <div className="th-widget-contact">
                  <div className="info-box">
                    <div className="info-box_icon"><i className="fas fa-regular fa-location-dot"></i></div>
                    <div className="info-contnt">
                      <h4 className="footer-info-title">Location</h4>
                      <p className="info-box_text">371 7th Ave, New York, NY 10001</p>
                    </div>
                  </div>

                  <div className="info-box">
                    <div className="info-box_icon"><i className="fas fa-regular fa-phone"></i></div>
                    <div className="info-contnt">
                      <h4 className="footer-info-title">Phone</h4>
                      <p className="info-box_text">
                        <a href="tel:+15264855467" className="info-box_link">+ 152-6485-5467</a>
                        {" "}
                        <a href="tel:+15264855467" className="info-box_link">+ 152-6485-5467</a>
                      </p>
                    </div>
                  </div>

                  <div className="info-box">
                    <div className="info-box_icon"><i className="fa-regular fa-envelope"></i></div>
                    <div className="info-contnt">
                      <h4 className="footer-info-title">Email</h4>
                      <p className="info-box_text">
                        <a href="mailto:info@kleanix.com" className="info-box_link">info@Verdicta.com</a>
                        {" "}
                        <a href="mailto:info@kleanix.com" className="info-box_link">info@Verdicta.com</a>
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-2 align-items-center">
            <div className="col-md-12">
              <p className="copyright-text text-center">
                Copyright <i className="fas fa-copyright"></i> 2025{" "}
                <a href="index.html">Verdicta</a>. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
