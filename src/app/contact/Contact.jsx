"use client";

export default function Contact() {
  return (
    <main>
      {/* Breadcrumb with inline background */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url(/assets/img/bg/breadcrumb-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* simple title overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.45))",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="breadcumb-content">
            <h1 className="breadcumb-title" style={{ color: "#fff" }}>
              Contact
            </h1>
            <ul className="breadcumb-menu" style={{ color: "#fff" }}>
              <li>
                <a href="/">Home</a>
              </li>
              <span>/ </span>
              <li> Contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact info */}
      <div className="contact-area-2 space-top" id="contact-sec">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="contact-icon-wrap">
              <div className="info-box">
                <div className="info-box_icon">
                  <img
                    src="/assets/img/icon/contact-icon-1.svg"
                    alt="Location"
                  />
                </div>
                <div className="info-contnt">
                  <h4 className="footer-info-title">Location</h4>
                  <p className="info-box_text">
                    2121 8th Avenue North, Birmingham, AL 35203
                  </p>
                </div>
              </div>
              <div className="info-box">
                <div className="info-box_icon">
                  <img src="/assets/img/icon/contact-icon-2.svg" alt="Phone" />
                </div>
                <div className="info-contnt">
                  <h4 className="footer-info-title">Phone</h4>
                  <p className="info-box_text">
                    <a href="tel:+12055551234" className="info-box_link">
                      + (205) 555-1234
                    </a>{" "}
                    <a href="tel:+12055552468" className="info-box_link">
                      + (205) 555-2468
                    </a>
                  </p>
                </div>
              </div>
              <div className="info-box">
                <div className="info-box_icon">
                  <img src="/assets/img/icon/contact-icon-3.svg" alt="Email" />
                </div>
                <div className="info-contnt">
                  <h4 className="footer-info-title">Email</h4>
                  <p className="info-box_text">
                    <a
                      href="mailto:info@verdictalegal.com"
                      className="info-box_link"
                    >
                      info@verdictalegal.com
                    </a>{" "}
                    <a
                      href="mailto:contact@verdictalegal.com"
                      className="info-box_link"
                    >
                      contact@verdictalegal.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="info-box">
                <div className="info-box_icon">
                  <img
                    src="/assets/img/icon/contact-icon-4.svg"
                    alt="Questions"
                  />
                </div>
                <div className="info-contnt">
                  <h4 className="footer-info-title">Free Consultation</h4>
                  <p className="info-box_text">
                    Schedule your free legal consultation with Verdicta's
                    experienced attorneys
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form + image */}
      <div className="space-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-7">
              <form action="#" method="POST" className="contact-form style-4">
                <h3 className="form-title text-start">Get Legal Help Today</h3>
                <div className="row">
                  <div
                    className="form-group col-md-6"
                    style={{ position: "relative" }}
                  >
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                    {/* inline icon fallback */}
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        right: 20,
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24">
                        <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z" />
                      </svg>
                    </span>
                  </div>
                  <div
                    className="form-group col-md-6"
                    style={{ position: "relative" }}
                  >
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        right: 25,
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24">
                        <path
                          d="M2 5h20v14H2z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="m3 6 9 7 9-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                  </div>
                  <div
                    className="form-group col-12"
                    style={{ position: "relative" }}
                  >
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="3"
                      className="form-control"
                      placeholder="Your Message"
                    ></textarea>
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", right: 25, top: 10 }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24">
                        <path
                          d="m3 12 18-9-9 18-2-7z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="form-btn col-12">
                    <button type="submit" className="th-btn style2">
                      Send Message{" "}
                      <span style={{ display: "inline-flex", marginLeft: 8 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24">
                          <path
                            d="M5 12h14M13 5l7 7-7 7"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <p className="form-messages mb-0 mt-3"></p>
              </form>
            </div>
            <div className="col-lg-5">
              <div className="contact-page-thumb">
                <img
                  src="/assets/img/contact/contact-right.png"
                  alt="Contact"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="space">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="contact-map"
                style={{ position: "relative", paddingTop: "56.25%" }}
              >
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
                  loading="lazy"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
