"use client";

import { useEffect, useRef } from "react";
import Brands from "../components/Home/Brands";
import Testimonial from "../components/Home/Testimonial";

const AboutUs = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const fixPath = (p) => (!p ? p : p.startsWith("/") ? p : `/${p}`);

    // Apply data-bg-src backgrounds (scoped to this page)
    root.querySelectorAll("[data-bg-src]").forEach((el) => {
      const raw = el.getAttribute("data-bg-src");
      const src = fixPath(raw);
      if (src) {
        el.style.backgroundImage = `url(${src})`;
        el.classList.add("background-image");
      }
    });

    // Apply positioning data attributes (data-left, data-right, data-top, data-bottom)
    root
      .querySelectorAll("[data-left], [data-right], [data-top], [data-bottom]")
      .forEach((el) => {
        const left = el.getAttribute("data-left");
        const right = el.getAttribute("data-right");
        const top = el.getAttribute("data-top");
        const bottom = el.getAttribute("data-bottom");

        if (left !== null)
          el.style.left =
            left.includes("%") || left.includes("px") ? left : `${left}px`;
        if (right !== null)
          el.style.right =
            right.includes("%") || right.includes("px") ? right : `${right}px`;
        if (top !== null)
          el.style.top =
            top.includes("%") || top.includes("px") ? top : `${top}px`;
        if (bottom !== null)
          el.style.bottom =
            bottom.includes("%") || bottom.includes("px")
              ? bottom
              : `${bottom}px`;
      });

    const swipers = [];
    const listeners = [];

    const initSliders = () => {
      if (typeof window === "undefined" || !("Swiper" in window)) return false;

      root.querySelectorAll(".th-slider").forEach((el) => {
        // don't double-init
        // @ts-ignore
        if (el.swiper) return;

        let opts = {};
        try {
          opts = JSON.parse(el.getAttribute("data-slider-options") || "{}");
        } catch {
          opts = {};
        }

        // Special handling for services slider
        const sliderId = el.getAttribute("id");
        if (sliderId === "serviceSlider2") {
          opts = {
            breakpoints: {
              0: { slidesPerView: 1, spaceBetween: 15 },
              576: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              992: { slidesPerView: 3, spaceBetween: 30 },
              1200: { slidesPerView: 4, spaceBetween: 30 },
            },
            autoHeight: true,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            },
            loop: true,
            speed: 800,
          };
        }

        const merged = {
          speed: 900,
          watchOverflow: true,
          ...opts,
        };

        // @ts-ignore
        const swiper = new window.Swiper(el, merged);
        swipers.push(swiper);

        const id = el.getAttribute("id");
        if (id) {
          const prev = root.querySelector(`[data-slider-prev="#${id}"]`);
          const next = root.querySelector(`[data-slider-next="#${id}"]`);

          if (prev) {
            const fn = (e) => {
              e.preventDefault();
              swiper.slidePrev();
            };
            prev.addEventListener("click", fn);
            listeners.push([prev, fn]);
          }
          if (next) {
            const fn = (e) => {
              e.preventDefault();
              swiper.slideNext();
            };
            next.addEventListener("click", fn);
            listeners.push([next, fn]);
          }
        }
      });

      return true;
    };

    const ok = initSliders();
    let iv = null;
    if (!ok) {
      iv = window.setInterval(() => {
        if (initSliders()) {
          if (iv) window.clearInterval(iv);
          iv = null;
        }
      }, 100);
      window.setTimeout(() => {
        if (iv) window.clearInterval(iv);
        iv = null;
      }, 5000);
    }

    return () => {
      if (iv) window.clearInterval(iv);
      listeners.forEach(([el, fn]) => el.removeEventListener("click", fn));
      swipers.forEach((s) => s && s.destroy(true, true));
    };
  }, []);

  return (
    <main ref={rootRef}>
      {/* Breadcrumb */}
      <div
        className="breadcumb-wrapper"
        data-bg-src="/assets/img/bg/breadcrumb-bg.jpg"
        data-overlay="title"
        data-opacity="8"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">About Us</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <span> / </span>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* About */}
      <div
        className="about-1-wrapper space bg-smoke2"
        id="about-sec"
        style={{ position: "relative" }} // key for absolutely positioned shapes
      >
        {/* left/bottom shape */}
        <div
          className="shape-mockup jump"
          style={{
            position: "absolute",
            left: "0%",
            bottom: "0%",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <img
            src="/assets/img/shape/about1-left-shape.png"
            alt="image"
            style={{ display: "block", maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* top/right shape */}
        <div
          className="shape-mockup jump"
          style={{
            position: "absolute",
            top: "11%",
            right: "4%",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <img
            src="/assets/img/shape/about1-right-top.png"
            alt="image"
            style={{ display: "block", maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* bottom/right shape (hidden on < md like your original) */}
        <div
          className="shape-mockup jump-reverse d-none d-md-block"
          style={{
            position: "absolute",
            right: 0,
            bottom: "4%",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <img
            src="/assets/img/shape/about1-right-bottom.png"
            alt="image"
            style={{ display: "block", maxWidth: "100%", height: "auto" }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row gy-40 gx-60 align-items-center">
            <div className="col-xl-7 mb-xl-0">
              <div className="img-box1 about-1">
                {/* logo shape */}
                <div
                  className="shape-mockup logo-shape"
                  style={{ position: "absolute", zIndex: 2 }}
                >
                  <div className="logo-icon-wrap">
                    <h4 className="logo-icon" style={{ margin: 0 }}>
                      <img
                        src="/assets/img/icon/logo-icon-white.png"
                        alt="img"
                        style={{ display: "block", height: "auto" }}
                      />
                    </h4>
                    <div className="logo-icon-wrap__text bg-theme2">
                      <span className="logo-animation">
                        Verdicta Legal Excellence
                      </span>
                    </div>
                  </div>
                </div>

                {/* main images */}
                <div className="img1">
                  <img
                    className="tilt-active"
                    src="/assets/img/about/about-1-left.jpg"
                    alt="Image"
                    style={{ display: "block", width: "100%", height: "auto" }}
                  />
                </div>
                <div className="img2">
                  <div className="img2-top">
                    <img
                      className="tilt-active"
                      src="/assets/img/about/about-1-right.jpg"
                      alt="Image"
                      style={{
                        display: "block",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="img2-bottom">
                    <img
                      className="tilt-active"
                      src="/assets/img/about/about-1-right-2.jpg"
                      alt="Image"
                      style={{
                        display: "block",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-5">
              <div className="title-area mb-25">
                <span className="sub-title before-none">About Verdicta</span>
                <h2 className="sec-title">Alabama's Premier Legal Authority</h2>
                <p className="sec-text">
                  Founded in Birmingham, Alabama, Verdicta has built a
                  reputation for delivering exceptional legal services across
                  the state. Our experienced attorneys provide comprehensive
                  representation in criminal defense, personal injury, family
                  law, business litigation, and estate planning with a
                  commitment to client success.
                </p>
              </div>

              {/* If Font Awesome isn’t loaded, swap <i> for inline SVG checks */}
              <div className="checklist style2 mb-40">
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    "Over 25 years of combined legal experience in Alabama.",
                    "Proven track record with 95% client satisfaction rate.",
                    "Personalized legal strategies for each unique case.",
                    "Available 24/7 for urgent legal matters and consultations.",
                  ].map((t) => (
                    <li
                      key={t}
                      style={{
                        display: "flex",
                        gap: 10,
                        alignItems: "center",
                        marginBottom: 10,
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a href="/about.html" className="th-btn style4">
                  More About
                  {/* inline arrow if FA isn’t available */}
                  <span style={{ display: "inline-flex", marginLeft: 8 }}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counters */}
      <div
        className="counter-sec1 space-bottom"
        data-pos-for=".about-1-wrapper"
        data-sec-pos="top-half"
      >
        <div className="container">
          <div className="counter-card-wrap">
            <div className="counter-card">
              <div className="box-icon">
                <img src="/assets/img/icon/counter_1_1.svg" alt="Icon" />
              </div>
              <div className="media-body">
                <h4 className="box-number">
                  <span className="counter-number">8 </span>k{" "}
                  <span className="plus-simple">+</span>
                </h4>
                <p className="box-text">Cases Won</p>
              </div>
            </div>
            <div className="divider" />
            <div className="counter-card">
              <div className="box-icon">
                <img src="/assets/img/icon/counter_1_2.svg" alt="Icon" />
              </div>
              <div className="media-body">
                <h4 className="box-number">
                  <span className="counter-number">25 </span>{" "}
                  <span className="plus-simple">+</span>
                </h4>
                <p className="box-text">Expert Attorneys</p>
              </div>
            </div>
            <div className="divider" />
            <div className="counter-card">
              <div className="box-icon">
                <img src="/assets/img/icon/counter_1_3.svg" alt="Icon" />
              </div>
              <div className="media-body">
                <h4 className="box-number">
                  <span className="counter-number">3 </span>k{" "}
                  <span className="plus-simple">+</span>
                </h4>
                <p className="box-text">Satisfied Clients</p>
              </div>
            </div>
            <div className="divider" />
            <div className="counter-card">
              <div className="box-icon">
                <img src="/assets/img/icon/counter_1_4.svg" alt="Icon" />
              </div>
              <div className="media-body">
                <h4 className="box-number">
                  <span className="counter-number">15 </span>{" "}
                  <span className="plus-simple">+</span>
                </h4>
                <p className="box-text">Awards Won</p>
              </div>
            </div>
            <div className="divider" />
          </div>
        </div>
      </div>

      {/* Services slider */}
      <section
        className="th-service-2 bg-smoke overflow-hidden space bg-smoke2"
        id="service-sec"
      >
        <div
          className="shape-mockup jump d-none d-xl-block"
          data-left="0"
          data-bottom="0"
        >
          <img src="/assets/img/shape/service-inner-left.png" alt="shape img" />
        </div>
        <div
          className="shape-mockup jump-reverse d-none d-xl-block"
          data-right="0"
          data-bottom="0"
        >
          <img
            src="/assets/img/shape/service-inner-right.png"
            alt="shape img"
          />
        </div>
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-end">
            <div className="col-lg-7 col-md-8">
              <div className="title-area text-center text-lg-start">
                <span className="sub-title">Verdicta's Practice Areas</span>
                <h2 className="sec-title">
                  Comprehensive Legal Services in Alabama
                </h2>
              </div>
            </div>
            <div className="col-lg-auto d-none d-lg-block">
              <div className="sec-btn">
                <div className="icon-box">
                  <button
                    data-slider-prev="#serviceSlider2"
                    className="slider-arrow default show-all"
                  >
                    <i className="fas fa-arrow-left" />
                  </button>
                  <button
                    data-slider-next="#serviceSlider2"
                    className="slider-arrow default show-all"
                  >
                    <i className="fas fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row gy-30 justify-content-center">
            <div className="slider-area">
              <div
                className="swiper th-slider has-shadow"
                id="serviceSlider2"
                data-slider-options='{"breakpoints":{"0":{"slidesPerView":1,"spaceBetween":15},"576":{"slidesPerView":"1","spaceBetween":20},"768":{"slidesPerView":"2","spaceBetween":25},"992":{"slidesPerView":"3","spaceBetween":30},"1200":{"slidesPerView":"4","spaceBetween":30}},"autoHeight":true,"autoplay":{"delay":3000,"disableOnInteraction":false,"pauseOnMouseEnter":true},"loop":true,"speed":800}'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="service-card style-2 bg-white">
                      <div className="box-icon">
                        <img
                          src="/assets/img/icon/service_card_1_1.svg"
                          alt="Icon"
                        />
                      </div>
                      <div className="box-content">
                        <h3 className="box-title">
                          <a href="/service-details.html">Criminal Law</a>
                        </h3>
                        <p className="box-text">
                          Defense representations for more various criminal
                          charges. Investigations and evidence analysis..
                        </p>
                      </div>
                      <a href="/service-details.html" className="link-btn">
                        Read More <i className="fas fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="service-card style-2 bg-white">
                      <div className="box-icon">
                        <img
                          src="/assets/img/icon/service_card_1_2.svg"
                          alt="Icon"
                        />
                      </div>
                      <div className="box-content">
                        <h3 className="box-title">
                          <a href="/service-details.html">Corporate Law</a>
                        </h3>
                        <p className="box-text">
                          Divorce, child custody, child support, and alimony.
                          Prenuptial agreements and postnuptial agreements
                        </p>
                      </div>
                      <a href="/service-details.html" className="link-btn">
                        Read More <i className="fas fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="service-card style-2 bg-white">
                      <div className="box-icon">
                        <img
                          src="/assets/img/icon/service_card_1_3.svg"
                          alt="Icon"
                        />
                      </div>
                      <div className="box-content">
                        <h3 className="box-title">
                          <a href="/service-details.html">Family Law</a>
                        </h3>
                        <p className="box-text">
                          Examining policies related to private and public
                          health insurance, Medicare, Medicaid, and the
                          Affordable.
                        </p>
                      </div>
                      <a href="/service-details.html" className="link-btn">
                        Read More <i className="fas fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="service-card style-2 bg-white">
                      <div className="box-icon">
                        <img
                          src="/assets/img/icon/service_card_1_4.svg"
                          alt="Icon"
                        />
                      </div>
                      <div className="box-content">
                        <h3 className="box-title">
                          <a href="/service-details.html">Real Estate Law</a>
                        </h3>
                        <p className="box-text">
                          Divorce, child custody, child support, and alimony.
                          Prenuptial agreements and postnuptial agreements
                        </p>
                      </div>
                      <a href="/service-details.html" className="link-btn">
                        Read More <i className="fas fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="service-card style-2 bg-white">
                      <div className="box-icon">
                        <img
                          src="/assets/img/icon/service_card_1_5.svg"
                          alt="Icon"
                        />
                      </div>
                      <div className="box-content">
                        <h3 className="box-title">
                          <a href="/service-details.html">
                            Personal Injury Law
                          </a>
                        </h3>
                        <p className="box-text">
                          Property transactions, leases, and zoning issues. Real
                          estate disputes and litigation. Property title
                          searches.
                        </p>
                      </div>
                      <a href="/service-details.html" className="link-btn">
                        Read More <i className="fas fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="service-card style-2 bg-white">
                      <div className="box-icon">
                        <img
                          src="/assets/img/icon/service_card_1_6.svg"
                          alt="Icon"
                        />
                      </div>
                      <div className="box-content">
                        <h3 className="box-title">
                          <a href="/service-details.html">Health Care Policy</a>
                        </h3>
                        <p className="box-text">
                          Divorce, child custody, child support, and alimony.
                          Prenuptial agreements and postnuptial agreements
                        </p>
                      </div>
                      <a href="/service-details.html" className="link-btn">
                        Read More <i className="fas fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="space" id="process-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 about-bottom-box-wrapcol-lg-10 text-center">
              <div className="title-area process-3-title-box">
                <span className="sub-title justify-content-center justify-content-xl-start">
                  Schedule Consultation
                </span>
                <h2 className="sec-title mb-2">Schedule A Free Consultation</h2>
                <p className="box-text">
                  Our team of seasoned attorneys is dedicated to carefully
                  listening to your concerns, ensuring a deep understanding of
                  your unique situation.
                </p>
              </div>
            </div>
          </div>
          <div className="row gy-40 justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="process-box style-2">
                <div className="box-icon">
                  <span className="number">01</span>{" "}
                  <img
                    src="/assets/img/icon/process-2-icon-1.svg"
                    alt="image"
                  />
                </div>
                <h3 className="box-title">Schedule A Time</h3>
                <p className="box-text">
                  Choose a convenient date and time that works best for you. Our
                  experienced lawyers are available to discuss.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="process-box style-2">
                <div className="box-icon">
                  <span className="number">02</span>{" "}
                  <img
                    src="/assets/img/icon/process-2-icon-2.svg"
                    alt="image"
                  />
                </div>
                <h3 className="box-title">Meet with a Consultation</h3>
                <p className="box-text">
                  During your consultation, you&apos;ll have the opportunity to
                  discuss your case with a qualified attorney.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="process-box style-2">
                <div className="box-icon">
                  <span className="number">03</span>{" "}
                  <img
                    src="/assets/img/icon/process-2-icon-3.svg"
                    alt="image"
                  />
                </div>
                <h3 className="box-title">Plan for Success</h3>
                <p className="box-text">
                  Based on the information gathered during your consultation,
                  we&apos;ll develop a tailored legal strategy to help you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section
        className="space"
        id="team-sec"
        data-bg-src="/assets/img/bg/team-2-shape-bg.png"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-9">
              <div className="title-area text-center">
                <span className="sub-title justify-content-center">
                  &nbsp;Our Attorney
                </span>
                <h2 className="sec-title">Meet Our Experienced Attorneys</h2>
              </div>
            </div>
            <div />
          </div>
          <div className="row gy-4">
            {[
              { img: 1, name: "Michel phelops", role: "Chief Justice" },
              { img: 2, name: "Sarah Rahman", role: "Attorney" },
              { img: 3, name: "Smith Miller", role: "Attorney" },
              { img: 4, name: "Samira Dsuza", role: "Attorney" },
              { img: 5, name: "Poppy Linda", role: "Attorney" },
              { img: 6, name: "Oscar Rhys", role: "Attorney" },
            ].map((m) => (
              <div className="col-xl-4 col-lg-4 col-sm-6" key={m.img}>
                <div className="team-card style-2">
                  <div className="team-img">
                    <img
                      src={`/assets/img/team/team_2_${m.img}.jpg`}
                      alt="Team"
                    />
                  </div>
                  <div className="team-content">
                    <h3 className="box-title">
                      <a href="/team-details.html">{m.name}</a>
                    </h3>
                    <span className="team-desig">{m.role}</span>
                    <div className="team-social">
                      <div className="th-social">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://facebook.com/"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://twitter.com/"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://instagram.com/"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://linkedin.com/"
                        >
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand slider */}
      <Brands />

      {/* Testimonials slider */}
      <Testimonial />
    </main>
  );
};

export default AboutUs;
