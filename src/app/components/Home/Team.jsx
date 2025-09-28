"use client";

import { useEffect, useRef } from "react";

const Team = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    let swiper;
    const el = sliderRef.current;

    const init = () => {
      if (typeof window === "undefined" || !window.Swiper || !el) return false;
      if (el.swiper) return true; // already inited

      swiper = new window.Swiper(el, {
        loop: true,
        speed: 900,
        grabCursor: true,
        watchOverflow: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        spaceBetween: 20,
        breakpoints: {
          0:    { slidesPerView: 1,   spaceBetween: 10 },
          576:  { slidesPerView: 2,   spaceBetween: 15 },
          768:  { slidesPerView: 2,   spaceBetween: 20 },
          992:  { slidesPerView: 3,   spaceBetween: 20 },
          1200: { slidesPerView: 3.5, spaceBetween: 25 }, // 3½ cards
        },
        navigation: {
          nextEl: '[data-slider-next="#teamSlider1"]',
          prevEl: '[data-slider-prev="#teamSlider1"]',
        },
      });

      // manual wiring (kept in case your theme uses data attributes instead of Swiper's navigation option)
      const prev = document.querySelector('[data-slider-prev="#teamSlider1"]');
      const next = document.querySelector('[data-slider-next="#teamSlider1"]');
      const onPrev = (e) => { e.preventDefault(); swiper?.slidePrev(); };
      const onNext = (e) => { e.preventDefault(); swiper?.slideNext(); };
      prev?.addEventListener("click", onPrev);
      next?.addEventListener("click", onNext);

      return () => {
        prev?.removeEventListener("click", onPrev);
        next?.removeEventListener("click", onNext);
        swiper?.destroy(true, true);
      };
    };

    const cleanup = init();
    if (!cleanup) {
      const iv = setInterval(() => { if (init()) clearInterval(iv); }, 80);
      setTimeout(() => clearInterval(iv), 5000);
    }
    return () => { if (typeof cleanup === "function") cleanup(); };
  }, []);

  return (
    <section
      className="team-area-1 space overflow-hidden"
      id="team-sec"
      data-overlay="title"
      data-opacity="8"
      style={{
        backgroundImage: 'url(/assets/img/bg/team-1-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}
    >
      <div className="container">
        <div className="row gx-60">
          <div className="col-xl-4">
            <div className="team-1-sec-title">
              <div className="title-area">
                <span className="sub-title">Our Attorneys</span>
                <h2 className="sec-title text-white">Dedicated Lawyers, Proven Results</h2>
                <div className="button-wrapper">
                  <a href="team.html" className="th-btn star-btn">
                    More Attorney <i className="fas fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="team-1-card-wrap" style={{ position: "relative" }}>
              <div
                className="swiper th-slider"
                id="teamSlider1"
                ref={sliderRef}
                style={{ 
                  overflow: "visible", 
                  paddingRight: "50px",
                  paddingBottom: "20px"
                }}
              >
                <div className="swiper-wrapper">
                  {/* Slide 1 */}
                  <div className="swiper-slide">
                    <div className="team-card">
                      <div className="team-img"><img src="/assets/img/team/team_1_1.jpg" alt="Team" /></div>
                      <div className="team-content">
                        <h3 className="box-title"><a href="team-details.html">Michel phelops</a></h3>
                        <span className="team-desig">Chief Justice</span>
                      </div>
                      <div className="team-content-hover-wrap">
                        <div className="team-content-hover">
                          <div className="team-img"><img src="/assets/img/team/team_1_1.jpg" alt="Team" /></div>
                          <div className="hover-inner">
                            <h3 className="box-title"><a href="team-details.html">Michel phelops</a></h3>
                            <span className="team-desig">Chief Justice</span>
                            <div className="team-social">
                              <div className="th-social">
                                <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>{" "}
                                <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>{" "}
                                <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>{" "}
                                <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2 */}
                  <div className="swiper-slide">
                    <div className="team-card">
                      <div className="team-img">
                        <img src="/assets/img/team/team_1_2.jpg" alt="Team" />
                      </div>
                      <div className="team-content">
                        <h3 className="box-title">
                          <a href="team-details.html">Sarah Rahman</a>
                        </h3>
                        <span className="team-desig">Attorney</span>
                      </div>
                      <div className="team-content-hover-wrap">
                        <div className="team-content-hover">
                          <div className="team-img">
                            <img src="/assets/img/team/team_1_2.jpg" alt="Team" />
                          </div>
                          <div className="hover-inner">
                            <h3 className="box-title">
                              <a href="team-details.html">Sarah Rahman</a>
                            </h3>
                            <span className="team-desig">Attorney</span>
                            <div className="team-social">
                              <div className="th-social">
                                <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a>{" "}
                                <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a>{" "}
                                <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a>{" "}
                                <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 3 */}
                  <div className="swiper-slide">
                    <div className="team-card">
                      <div className="team-img">
                        <img src="/assets/img/team/team_1_3.jpg" alt="Team" />
                      </div>
                      <div className="team-content">
                        <h3 className="box-title">
                          <a href="team-details.html">Smith Miller</a>
                        </h3>
                        <span className="team-desig">Attorney</span>
                      </div>
                      <div className="team-content-hover-wrap">
                        <div className="team-content-hover">
                          <div className="team-img">
                            <img src="/assets/img/team/team_1_3.jpg" alt="Team" />
                          </div>
                          <div className="hover-inner">
                            <h3 className="box-title">
                              <a href="team-details.html">Smith Miller</a>
                            </h3>
                            <span className="team-desig">Attorney</span>
                            <div className="team-social">
                              <div className="th-social">
                                <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a>{" "}
                                <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a>{" "}
                                <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a>{" "}
                                <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 4 */}
                  <div className="swiper-slide">
                    <div className="team-card">
                      <div className="team-img">
                        <img src="/assets/img/team/team_1_4.jpg" alt="Team" />
                      </div>
                      <div className="team-content">
                        <h3 className="box-title">
                          <a href="team-details.html">Samira Dsuza</a>
                        </h3>
                        <span className="team-desig">Attorney</span>
                      </div>
                      <div className="team-content-hover-wrap">
                        <div className="team-content-hover">
                          <div className="team-img">
                            <img src="/assets/img/team/team_1_4.jpg" alt="Team" />
                          </div>
                          <div className="hover-inner">
                            <h3 className="box-title">
                              <a href="team-details.html">Samira Dsuza</a>
                            </h3>
                            <span className="team-desig">Attorney</span>
                            <div className="team-social">
                              <div className="th-social">
                                <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a>{" "}
                                <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a>{" "}
                                <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a>{" "}
                                <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 5 */}
                  <div className="swiper-slide">
                    <div className="team-card">
                      <div className="team-img">
                        <img src="/assets/img/team/team_1_5.jpg" alt="Team" />
                      </div>
                      <div className="team-content">
                        <h3 className="box-title">
                          <a href="team-details.html">Poppy Linda</a>
                        </h3>
                        <span className="team-desig">Attorney</span>
                      </div>
                      <div className="team-content-hover-wrap">
                        <div className="team-content-hover">
                          <div className="team-img">
                            <img src="/assets/img/team/team_1_5.jpg" alt="Team" />
                          </div>
                          <div className="hover-inner">
                            <h3 className="box-title">
                              <a href="team-details.html">Poppy Linda</a>
                            </h3>
                            <span className="team-desig">Attorney</span>
                            <div className="team-social">
                              <div className="th-social">
                                <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a>{" "}
                                <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a>{" "}
                                <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a>{" "}
                                <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 6 */}
                  <div className="swiper-slide">
                    <div className="team-card">
                      <div className="team-img">
                        <img src="/assets/img/team/team_1_6.jpg" alt="Team" />
                      </div>
                      <div className="team-content">
                        <h3 className="box-title">
                          <a href="team-details.html">Sarah Rahman</a>
                        </h3>
                        <span className="team-desig">Attorney</span>
                      </div>
                      <div className="team-content-hover-wrap">
                        <div className="team-content-hover">
                          <div className="team-img">
                            <img src="/assets/img/team/team_1_6.jpg" alt="Team" />
                          </div>
                          <div className="hover-inner">
                            <h3 className="box-title">
                              <a href="team-details.html">Sarah Rahman</a>
                            </h3>
                            <span className="team-desig">Attorney</span>
                            <div className="team-social">
                              <div className="th-social">
                                <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a>{" "}
                                <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a>{" "}
                                <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a>{" "}
                                <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 7 */}
                  <div className="swiper-slide">
                    <div className="team-card">
                      <div className="team-img">
                        <img src="/assets/img/team/team_1_7.jpg" alt="Team" />
                      </div>
                      <div className="team-content">
                        <h3 className="box-title">
                          <a href="team-details.html">Smith Miller</a>
                        </h3>
                        <span className="team-desig">Attorney</span>
                      </div>
                      <div className="team-content-hover-wrap">
                        <div className="team-content-hover">
                          <div className="team-img">
                            <img src="/assets/img/team/team_1_7.jpg" alt="Team" />
                          </div>
                          <div className="hover-inner">
                            <h3 className="box-title">
                              <a href="team-details.html">Smith Miller</a>
                            </h3>
                            <span className="team-desig">Attorney</span>
                            <div className="team-social">
                              <div className="th-social">
                                <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a>{" "}
                                <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a>{" "}
                                <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a>{" "}
                                <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 8 */}
                  <div className="swiper-slide">
                    <div className="team-card">
                      <div className="team-img">
                        <img src="/assets/img/team/team_1_8.jpg" alt="Team" />
                      </div>
                      <div className="team-content">
                        <h3 className="box-title">
                          <a href="team-details.html">Samira Dsuza</a>
                        </h3>
                        <span className="team-desig">Attorney</span>
                      </div>
                      <div className="team-content-hover-wrap">
                        <div className="team-content-hover">
                          <div className="team-img">
                            <img src="/assets/img/team/team_1_8.jpg" alt="Team" />
                          </div>
                          <div className="hover-inner">
                            <h3 className="box-title">
                              <a href="team-details.html">Samira Dsuza</a>
                            </h3>
                            <span className="team-desig">Attorney</span>
                            <div className="team-social">
                              <div className="th-social">
                                <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a>{" "}
                                <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a>{" "}
                                <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a>{" "}
                                <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* arrows */}
              <button 
                data-slider-prev="#teamSlider1" 
                className="slider-arrow slider-prev"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '-25px',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  backgroundColor: 'var(--theme-color)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="fas fa-arrow-left"></i>
              </button>
              <button 
                data-slider-next="#teamSlider1" 
                className="slider-arrow slider-next"
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '-25px',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  backgroundColor: 'var(--theme-color)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced styles for better layout */}
      <style jsx>{`
        #teamSlider1 { 
          overflow: visible; 
          margin: 0 25px;
        }
        #teamSlider1 .swiper-slide { 
          height: auto; 
          transition: transform 0.3s ease;
        }
        #teamSlider1 .swiper-slide:hover {
          transform: translateY(-5px);
        }
        #teamSlider1 img { 
          display: block; 
          width: 100%; 
          height: auto; 
          border-radius: 8px 8px 0 0;
        }
        .team-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          margin-bottom: 20px;
        }
        .team-card:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        .team-content {
          padding: 20px;
          text-align: center;
        }
        .team-content h3 {
          margin-bottom: 8px;
          font-size: 1.2rem;
        }
        .team-desig {
          color: var(--theme-color);
          font-weight: 500;
        }
        .slider-arrow:hover {
          background-color: var(--theme-color2) !important;
          transform: translateY(-50%) scale(1.1);
        }
        @media (max-width: 991px) {
          #teamSlider1 {
            margin: 0 15px;
          }
          .slider-arrow {
            width: 40px !important;
            height: 40px !important;
            font-size: 14px;
          }
        }
        @media (max-width: 576px) {
          #teamSlider1 {
            margin: 0 10px;
          }
          .slider-arrow {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;
