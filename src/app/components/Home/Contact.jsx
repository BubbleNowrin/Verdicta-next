const Contact = () => {
  return (
    <section className="space overflow-hidden" id="contact-sec">
      <div className="shape-mockup jump d-none d-xl-block" data-top="15%" data-right="3%">
        <img src="/assets/img/shape/contact-1-top.png" alt="shape img" />
      </div>
      <div className="shape-mockup jump-reverse d-none d-xl-block" data-bottom="17%" data-left="3%">
        <img src="/assets/img/shape/about1-right-top.png" alt="shape img" />
      </div>

      <div className="container">
        <div className="contact-from-1-wrap">
          <div className="row gx-60 gy-40">
            {/* Left: form */}
            <div className="col-xl-6">
              <div className="contact-form">
                <div className="title-area mb-35">
                  <span className="sub-title justify-content-center text-white">Have Any Questions?</span>
                  <h4 className="sec-title text-white">Get in Touch with Us</h4>
                </div>
                <form action="mail.php" method="POST" className="quote-form ajax-contact">
                  <div className="row">
                    <div className="form-group col-md-12">
                      <input type="text" className="form-control" name="name" id="name" placeholder="Name" />{" "}
                      <i className="fas fa-user"></i>
                    </div>
                    <div className="form-group col-md-6">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Email" />{" "}
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="form-group col-md-6">
                      <input type="tel" className="form-control" name="number" id="number" placeholder="Number" />{" "}
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="form-group col-12">
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={3}
                        className="form-control"
                        placeholder="Your Message"
                      ></textarea>{" "}
                      <i className="fas fa-pencil"></i>
                    </div>
                    <div className="form-btn col-12 mt-2">
                      <button className="th-btn bg-theme w-100" type="submit">
                        Send Now <i className="fas fa-regular fa-arrow-right-long"></i>
                      </button>
                    </div>
                  </div>
                  <p className="form-messages mb-0 mt-3"></p>
                </form>
              </div>
            </div>

            {/* Right: info + images */}
            <div className="col-xl-6" style={{ position: "relative" }}>
              <div className="contact-icon-box-wrap">
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
                      <a href="tel:+15264855467" className="info-box_link">+ 152-6485-5467</a>{" "}
                      <a href="tel:+15264855467" className="info-box_link">+ 152-6485-5467</a>
                    </p>
                  </div>
                </div>
                <div className="info-box">
                  <div className="info-box_icon"><i className="fa-regular fa-envelope"></i></div>
                  <div className="info-contnt">
                    <h4 className="footer-info-title">Email</h4>
                    <p className="info-box_text">
                      <a href="mailto:info@ensaf.com" className="info-box_link">info@ensaf.com</a>{" "}
                      <a href="mailto:info@ensaf.com" className="info-box_link">info@ensaf.com</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Base image */}
              <div className="contact-img">
                <img src="/assets/img/contact/contact_1.jpg" alt="vector" />
              </div>

              {/* Overlay shape (the “man”) */}
              <div
                className="shape-mockup contact_1-man"
                data-right="0"
                data-bottom="0"
                style={{ position: "absolute", right: 0, bottom: 0, zIndex: 2 }}
              >
                <img src="/assets/img/contact/contact_1-man.png" alt="vector" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
