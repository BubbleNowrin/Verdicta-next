"use client";

import { useEffect, useRef } from "react";

const Hero = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    let swiper;

    const init = () => {
      if (typeof window === "undefined") return false;
      if (!window.Swiper || !sliderRef.current) return false;
      if (sliderRef.current.swiper) return true; // already inited

      const paginationEl =
        sliderRef.current.querySelector(".slider-pagination");

      swiper = new window.Swiper(sliderRef.current, {
        loop: true,
        effect: "fade",
        fadeEffect: { crossFade: true },
        autoHeight: true,
        speed: 900,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        pagination: {
          el: paginationEl,
          clickable: true,
        },
      });

      return true;
    };

    if (!init()) {
      const iv = setInterval(() => init() && clearInterval(iv), 50);
      setTimeout(() => clearInterval(iv), 5000);
    }

    return () => {
      if (sliderRef.current?.swiper)
        sliderRef.current.swiper.destroy(true, true);
    };
  }, []);

  return (
    <>
      <div
        className="th-hero-wrapper hero-1"
        id="hero"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* floating badge (kept as-is) */}
        <div className="shape-mockup hero-img-shape-1">
          <div className="logo-icon-wrap">
            <div className="logo-icon">
              <img src="/assets/img/icon/logo-icon.png" alt="img" />
            </div>
            <div className="logo-icon-wrap__text">
              <span className="logo-animation">Verdicta Legal Solutions</span>
            </div>
          </div>
        </div>

        {/* background (inline, not data-bg-src) */}
        <div
          className="th-hero-bg"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/assets/img/bg/hero_bg_1_1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        >
          {/* overlay image */}
          <img
            src="/assets/img/bg/hero1-overlay.png"
            alt="Hero overlay"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              opacity: 1,
            }}
          />
        </div>

        {/* scroll cue */}
        {/* <div className="hero-1-scroll-icon-bg-shape scroll-down" style={{ position: 'absolute', left: 0, right: 0, bottom: 24, zIndex: 2 }}>
          <div className="hero-1-scroll-icon-wrap" style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="#about-sec">
              <div className="shape-thumb">
                <div className="icon-btn"><i className="fa-sharp fa-solid fa-arrow-down"></i></div>
                <img src="/assets/img/shape/hero-1-scroll-icon.png" alt="Image" />
              </div>
            </a>
          </div>
        </div> */}

        {/* HERO SLIDER */}
        <div
          className="swiper th-slider"
          id="heroSlidee1"
          ref={sliderRef}
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="swiper-wrapper">
            {/* Slide 1 */}
            <div className="swiper-slide">
              <div className="hero-inner hero-style1">
                <div className="container">
                  <div className="row gy-4 align-items-center">
                    <div className="col-xl-7 col-lg-7">
                      <span
                        className="sub-title"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                      >
                        Alabama's Premier Legal Firm
                      </span>
                      <div data-ani="slideinup" data-ani-delay="0.4s">
                        <h1 className="hero-title">
                          Expert Legal Counsel, Exceptional
                        </h1>
                        <div className="hero-title">
                          Outcomes{" "}
                          <span className="client-group-wrap">
                            <span className="thumb">
                              <img
                                src="/assets/img/icon/hero-1-title-1.png"
                                alt="img"
                              />{" "}
                            </span>
                            <span className="client-group-wrap__content">
                              <span className="client-group-wrap__box-title">
                                Over{" "}
                                <span>
                                  <span className="counter-number">3</span>k+
                                </span>{" "}
                                Satisfied Clients
                              </span>
                              <span className="client-group-wrap__box-review">
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <span>
                                  4.9/5(
                                  <span className="counter-number">42</span>k
                                  <span className="plus">+</span> Reviews)
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="btn-group justify-content-center"
                        data-ani="slideinup"
                        data-ani-delay="0.6s"
                      >
                        <a href="contact.html" className="th-btn">
                          Contact us{" "}
                          <i className="fas fa-regular fa-arrow-right-long"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                      <div className="hero-img">
                        <div
                          className="img-main"
                          data-ani="slideinrighthero"
                          data-ani-delay="0.8s"
                        >
                          <img
                            src="/assets/img/hero/hero_1_1.png"
                            alt="Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="swiper-slide">
              <div className="hero-inner hero-style1">
                <div className="container">
                  <div className="row gy-4 align-items-center">
                    <div className="col-xl-7 col-lg-7">
                      <span
                        className="sub-title"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                      >
                        Trusted Legal Partners in Alabama
                      </span>
                      <div data-ani="slideinup" data-ani-delay="0.4s">
                        <h1 className="hero-title">
                          Dedicated Advocates, Winning
                        </h1>
                        <div className="hero-title">
                          Strategies{" "}
                          <span className="client-group-wrap">
                            <span className="thumb">
                              <img
                                src="/assets/img/icon/hero-1-title-1.png"
                                alt="img"
                              />{" "}
                            </span>
                            <span className="client-group-wrap__content">
                              <span className="client-group-wrap__box-title">
                                Over{" "}
                                <span>
                                  <span className="counter-number">3</span>k+
                                </span>{" "}
                                Satisfied Clients
                              </span>
                              <span className="client-group-wrap__box-review">
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <span>
                                  4.9/5(
                                  <span className="counter-number">42</span>k
                                  <span className="plus">+</span> Reviews)
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="btn-group justify-content-center"
                        data-ani="slideinup"
                        data-ani-delay="0.6s"
                      >
                        <a href="contact.html" className="th-btn">
                          Contact us{" "}
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                      <div className="hero-img">
                        <div
                          className="img-main"
                          data-ani="slideinrighthero"
                          data-ani-delay="0.8s"
                        >
                          <img
                            src="/assets/img/hero/hero_1_2.png"
                            alt="Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="swiper-slide">
              <div className="hero-inner hero-style1">
                <div className="container">
                  <div className="row gy-4 align-items-center">
                    <div className="col-xl-7 col-lg-7">
                      <span
                        className="sub-title"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                      >
                        Verdicta - Your Legal Advantage
                      </span>
                      <div data-ani="slideinup" data-ani-delay="0.4s">
                        <h1 className="hero-title">
                          Strategic Counsel, Successful
                        </h1>
                        <div className="hero-title">
                          Verdicts{" "}
                          <span className="client-group-wrap">
                            <span className="thumb">
                              <img
                                src="/assets/img/icon/hero-1-title-1.png"
                                alt="img"
                              />{" "}
                            </span>
                            <span className="client-group-wrap__content">
                              <span className="client-group-wrap__box-title">
                                Over{" "}
                                <span>
                                  <span className="counter-number">3</span>k+
                                </span>{" "}
                                Satisfied Clients
                              </span>
                              <span className="client-group-wrap__box-review">
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <span>
                                  4.9/5(
                                  <span className="counter-number">42</span>k
                                  <span className="plus">+</span> Reviews)
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="btn-group justify-content-center"
                        data-ani="slideinup"
                        data-ani-delay="0.6s"
                      >
                        <a href="contact.html" className="th-btn">
                          Contact us{" "}
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                      <div className="hero-img">
                        <div
                          className="img-main"
                          data-ani="slideinrighthero"
                          data-ani-delay="0.8s"
                        >
                          <img
                            src="/assets/img/hero/hero_1_3.png"
                            alt="Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination inside the slider root so we can target it directly */}
          <div className="slider-pagination"></div>
        </div>
      </div>
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
                <h2 className="sec-title">Alabama's Trusted Legal Authority</h2>
                <p className="sec-text">
                  Based in Birmingham, Alabama, Verdicta brings decades of
                  combined legal expertise to serve individuals and businesses
                  across the state. Our comprehensive practice areas include
                  corporate law, personal injury, criminal defense, and family
                  law.
                </p>
              </div>

              {/* If Font Awesome isn’t loaded, swap <i> for inline SVG checks */}
              <div className="checklist style2 mb-40">
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    "Unwavering commitment to client success and justice.",
                    "Transparent communication throughout every legal process.",
                    "Proven track record with 95% case success rate.",
                    "Personalized legal strategies tailored to your needs.",
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

      {/* a tiny local style to guarantee the hero has height */}
      <style jsx>{`
        #hero {
          min-height: 100vh;
          display: flex;
          align-items: stretch;
        }
        #hero .swiper,
        #hero .swiper-wrapper,
        #hero .swiper-slide {
          height: 100%;
        }
      `}</style>
    </>
  );
};

export default Hero;
