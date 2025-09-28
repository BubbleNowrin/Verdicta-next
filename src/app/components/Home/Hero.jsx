'use client';

import { useEffect, useRef } from 'react';

const Hero = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    let swiper;

    const init = () => {
      if (typeof window === 'undefined') return false;
      if (!window.Swiper || !sliderRef.current) return false;
      if (sliderRef.current.swiper) return true; // already inited

      const paginationEl = sliderRef.current.querySelector('.slider-pagination');

      swiper = new window.Swiper(sliderRef.current, {
        loop: true,
        effect: 'fade',
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
      if (sliderRef.current?.swiper) sliderRef.current.swiper.destroy(true, true);
    };
  }, []);

  return (
    <>
      <div className="th-hero-wrapper hero-1" id="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* floating badge (kept as-is) */}
        <div className="shape-mockup hero-img-shape-1">
          <div className="logo-icon-wrap">
            <div className="logo-icon"><img src="/assets/img/icon/logo-icon.png" alt="img" /></div>
            <div className="logo-icon-wrap__text"><span className="logo-animation">Best Lawyer For You</span></div>
          </div>
        </div>

        {/* background (inline, not data-bg-src) */}
        <div
          className="th-hero-bg"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/assets/img/bg/hero_bg_1_1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          }}
        >
          {/* overlay image */}
          <img
            src="/assets/img/bg/hero1-overlay.png"
            alt="Hero overlay"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 1 }}
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
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div className="swiper-wrapper">
            {/* Slide 1 */}
            <div className="swiper-slide">
              <div className="hero-inner hero-style1">
                <div className="container">
                  <div className="row gy-4 align-items-center">
                    <div className="col-xl-7 col-lg-7">
                      <span className="sub-title" data-ani="slideinup" data-ani-delay="0.2s">Your Legal Shield</span>
                      <div data-ani="slideinup" data-ani-delay="0.4s">
                        <h1 className="hero-title">Experienced Lawyers, Proven</h1>
                        <div className="hero-title">
                          Results{" "}
                          <span className="client-group-wrap">
                            <span className="thumb">
                              <img src="/assets/img/icon/hero-1-title-1.png" alt="img" />{" "}
                            </span>
                            <span className="client-group-wrap__content">
                              <span className="client-group-wrap__box-title">
                                We have to{" "}
                                <span><span className="counter-number">2</span>k+</span> Happy Client
                              </span>
                              <span className="client-group-wrap__box-review">
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <span>
                                  4.5/5(<span className="counter-number">35</span>k<span className="plus">+</span> Reviews)
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="btn-group justify-content-center" data-ani="slideinup" data-ani-delay="0.6s">
                        <a href="contact.html" className="th-btn">Contact us <i className="fas fa-regular fa-arrow-right-long"></i></a>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                      <div className="hero-img">
                        <div className="img-main" data-ani="slideinrighthero" data-ani-delay="0.8s">
                          <img src="/assets/img/hero/hero_1_1.png" alt="Image" />
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
                      <span className="sub-title" data-ani="slideinup" data-ani-delay="0.2s">Your Guardian in Law</span>
                      <div data-ani="slideinup" data-ani-delay="0.4s">
                        <h1 className="hero-title">Experienced Attorneys, Trusted</h1>
                        <div className="hero-title">
                          Results{" "}
                          <span className="client-group-wrap">
                            <span className="thumb">
                              <img src="/assets/img/icon/hero-1-title-1.png" alt="img" />{" "}
                            </span>
                            <span className="client-group-wrap__content">
                              <span className="client-group-wrap__box-title">
                                We have to{" "}
                                <span><span className="counter-number">2</span>k+</span> Happy Client
                              </span>
                              <span className="client-group-wrap__box-review">
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <span>
                                  4.5/5(<span className="counter-number">35</span>k<span className="plus">+</span> Reviews)
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="btn-group justify-content-center" data-ani="slideinup" data-ani-delay="0.6s">
                        <a href="contact.html" className="th-btn">Contact us <i className="fa-regular fa-arrow-right-long"></i></a>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                      <div className="hero-img">
                        <div className="img-main" data-ani="slideinrighthero" data-ani-delay="0.8s">
                          <img src="/assets/img/hero/hero_1_2.png" alt="Image" />
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
                      <span className="sub-title" data-ani="slideinup" data-ani-delay="0.2s">Secure With Experience</span>
                      <div data-ani="slideinup" data-ani-delay="0.4s">
                        <h1 className="hero-title">Committed Lawyers, Proven</h1>
                        <div className="hero-title">
                          Results{" "}
                          <span className="client-group-wrap">
                            <span className="thumb">
                              <img src="/assets/img/icon/hero-1-title-1.png" alt="img" />{" "}
                            </span>
                            <span className="client-group-wrap__content">
                              <span className="client-group-wrap__box-title">
                                We have to{" "}
                                <span><span className="counter-number">2</span>k+</span> Happy Client
                              </span>
                              <span className="client-group-wrap__box-review">
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <i className="fa-sharp fa-solid fa-star"></i>{" "}
                                <span>
                                  4.5/5(<span className="counter-number">35</span>k<span className="plus">+</span> Reviews)
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="btn-group justify-content-center" data-ani="slideinup" data-ani-delay="0.6s">
                        <a href="contact.html" className="th-btn">Contact us <i className="fa-regular fa-arrow-right-long"></i></a>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                      <div className="hero-img">
                        <div className="img-main" data-ani="slideinrighthero" data-ani-delay="0.8s">
                          <img src="/assets/img/hero/hero_1_3.png" alt="Image" />
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
