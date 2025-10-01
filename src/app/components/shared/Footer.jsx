

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
                <h3 className="widget_title">Legal Services</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><a href="service-details.html">Criminal Defense</a></li>
                    <li><a href="service-details.html">Personal Injury</a></li>
                    <li><a href="service-details.html">Business Law</a></li>
                    <li><a href="service-details.html">Family Law</a></li>
                    <li><a href="service-details.html">Real Estate Law</a></li>
                    <li><a href="service-details.html">Estate Planning</a></li>
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
                    Verdicta is Alabama's premier law firm established in Birmingham. We provide 
                    comprehensive legal services including criminal defense, personal injury, 
                    business law, and family law throughout Alabama.
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
                      <p className="info-box_text">2121 8th Avenue North, Birmingham, AL 35203</p>
                    </div>
                  </div>

                  <div className="info-box">
                    <div className="info-box_icon"><i className="fas fa-regular fa-phone"></i></div>
                    <div className="info-contnt">
                      <h4 className="footer-info-title">Phone</h4>
                      <p className="info-box_text">
                        <a href="tel:+12055551234" className="info-box_link">+ (205) 555-1234</a>
                        {" "}
                        <a href="tel:+12055552468" className="info-box_link">+ (205) 555-2468</a>
                      </p>
                    </div>
                  </div>

                  <div className="info-box">
                    <div className="info-box_icon"><i className="fa-regular fa-envelope"></i></div>
                    <div className="info-contnt">
                      <h4 className="footer-info-title">Email</h4>
                      <p className="info-box_text">
                        <a href="mailto:info@verdictalegal.com" className="info-box_link">info@verdictalegal.com</a>
                        {" "}
                        <a href="mailto:contact@verdictalegal.com" className="info-box_link">contact@verdictalegal.com</a>
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
