"use client";

import { useEffect, useRef } from "react";

const Testimonial = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    let isDestroyed = false;
    let swiper;

    function onPrev(e) {
      e.preventDefault();
      if (swiper) swiper.slidePrev();
    }
    function onNext(e) {
      e.preventDefault();
      if (swiper) swiper.slideNext();
    }

    const init = () => {
      if (typeof window === "undefined" || !window.Swiper || !sliderRef.current) {
        if (!isDestroyed) setTimeout(init, 100);
        return;
      }

      swiper = new window.Swiper(sliderRef.current, {
        loop: true,
        speed: 800,
        spaceBetween: 24,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        breakpoints: {
          0:    { slidesPerView: 1, spaceBetween: 14 },
          576:  { slidesPerView: 1, spaceBetween: 16 },
          768:  { slidesPerView: 1, spaceBetween: 18 },
          992:  { slidesPerView: 2, spaceBetween: 22 },
          1200: { slidesPerView: 2, spaceBetween: 24 },
        },
      });

      const prevBtns = document.querySelectorAll('[data-slider-prev="#testiSlide11"]');
      const nextBtns = document.querySelectorAll('[data-slider-next="#testiSlide11"]');
      prevBtns.forEach((b) => b.addEventListener("click", onPrev));
      nextBtns.forEach((b) => b.addEventListener("click", onNext));
    };

    init();

    return () => {
      isDestroyed = true;
      const prevBtns = document.querySelectorAll('[data-slider-prev="#testiSlide11"]');
      const nextBtns = document.querySelectorAll('[data-slider-next="#testiSlide11"]');
      prevBtns.forEach((b) => b.removeEventListener("click", onPrev));
      nextBtns.forEach((b) => b.removeEventListener("click", onNext));
      if (sliderRef.current?.swiper) sliderRef.current.swiper.destroy(true, true);
    };
  }, []);

  return (
    <section
      className="testi-card-area-1 overflow-hidden space"
      id="testi-sec"
      // set real background here (instead of data-bg-src)
      style={{
        backgroundImage: 'url(/assets/img/bg/testi-bg-1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-end">
          <div className="col-lg">
            <div className="title-area text-center text-lg-start">
              <span className="sub-title before-none">Client Testimonials</span>
              <h2 className="sec-title">What Our Clients Say</h2>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="sec-btn">
              <div className="icon-box d-flex justify-content-center gap-3">
                <button data-slider-prev="#testiSlide11" className="slider-arrow default">
                  <i className="fas fa-arrow-left" />
                </button>
                <button data-slider-next="#testiSlide11" className="slider-arrow default">
                  <i className="fas fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="testi-card-slide">
          <div className="swiper has-shadow th-slider" id="testiSlide11" ref={sliderRef}>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testi-block" dir="ltr">
                  <div className="testi-icon-1-top">
                    <img src="/assets/img/icon/testi-icon-1-top.svg" alt="icon" />
                  </div>
                  <div className="testi-block-top">
                    <div className="box-img">
                      <img src="/assets/img/testimonial/testi_1_1.jpg" alt="avatar" />
                    </div>
                    <div className="content">
                      <h3 className="box-title">Monica D’suza</h3>
                      <p className="box-desig">Ui/Ux Designer</p>
                      <div className="box-review">
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                      </div>
                    </div>
                  </div>
                  <p className="box-text">
                    &quot;I was struggling with family law for months before I found abc.
                                    They not only provided me with the solution I needed, but they also educated me on
                                    how to prevent the issue from happening again. Their team is incredibly
                                    knowledgeable and patient, and they always go the extra mile to ensure customer
                                    satisfaction. I am so grateful for their help and would recommend them to anyone.&quot;
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testi-block" dir="ltr">
                  <div className="testi-icon-1-top">
                    <img src="/assets/img/icon/testi-icon-1-top.svg" alt="icon" />
                  </div>
                  <div className="testi-block-top">
                    <div className="box-img">
                      <img src="/assets/img/testimonial/testi_1_2.jpg" alt="avatar" />
                    </div>
                    <div className="content">
                      <h3 className="box-title">Teresa Hamilton</h3>
                      <p className="box-desig">Ui/Ux Designer</p>
                      <div className="box-review">
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                      </div>
                    </div>
                  </div>
                  <p className="box-text">
                    &quot;I had been facing challenges with family law for months until I
                                    discovered abc. They not only resolved my issues effectively but also guided me on
                                    how to avoid similar problems in the future. Their team is highly skilled, patient,
                                    and always prioritizes customer satisfaction. I truly appreciate their support okay
                                    this is right for it and would highly recommend them to others.&quot;
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testi-block" dir="ltr">
                  <div className="testi-icon-1-top">
                    <img src="/assets/img/icon/testi-icon-1-top.svg" alt="icon" />
                  </div>
                  <div className="testi-block-top">
                    <div className="box-img">
                      <img src="/assets/img/testimonial/testi_1_3.jpg" alt="avatar" />
                    </div>
                    <div className="content">
                      <h3 className="box-title">Monks Millar</h3>
                      <p className="box-desig">Ui/Ux Designer</p>
                      <div className="box-review">
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                      </div>
                    </div>
                  </div>
                  <p className="box-text">
                    &quot;I was struggling with family law for months before I found abc.
                                    They not only provided me with the solution I needed, but they also educated me on
                                    how to prevent the issue from happening again. Their team is incredibly
                                    knowledgeable and patient, and they always go the extra mile to ensure customer
                                    satisfaction. I am so grateful for their help and would recommend them to anyone.&quot;
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testi-block" dir="ltr">
                  <div className="testi-icon-1-top">
                    <img src="/assets/img/icon/testi-icon-1-top.svg" alt="icon" />
                  </div>
                  <div className="testi-block-top">
                    <div className="box-img">
                      <img src="/assets/img/testimonial/testi_1_4.jpg" alt="avatar" />
                    </div>
                    <div className="content">
                      <h3 className="box-title">William Hazelip</h3>
                      <p className="box-desig">Ui/Ux Designer</p>
                      <div className="box-review">
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                      </div>
                    </div>
                  </div>
                  <p className="box-text">
                    &quot;Navigating family law issues was overwhelming for months until I
                                    came across abc. They didn’t just solve how to prevent the issue from happening
                                    again my problem—they empowered me with knowledge to manage such situations better.
                                    Their expertise and dedication to client satisfaction left okay no problem a lasting
                                    impression. I’m forever grateful and highly endorse their services.&quot;
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* optional: guarantee images are responsive */}
      <style jsx>{`
        #testiSlide11 .swiper-slide img {
          display: block;
          width: 100%;
          height: auto;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
