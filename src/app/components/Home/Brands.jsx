'use client';

import { useEffect, useRef } from 'react';

const Brands = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    let swiper;

    const init = () => {
      if (typeof window === 'undefined') return false;
      if (!window.Swiper || !sliderRef.current) return false;
      if (sliderRef.current.swiper) return true; // already inited

      swiper = new window.Swiper(sliderRef.current, {
        loop: true,
        speed: 800,
        grabCursor: true,
        spaceBetween: 24,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        breakpoints: {
          0:    { slidesPerView: 2 },
          576:  { slidesPerView: 2 },
          768:  { slidesPerView: 3 },
          992:  { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
          1400: { slidesPerView: 6 },
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
    <div
      className="brand-area-1"
      style={{
        backgroundImage: 'url(/assets/img/bg/brand-bg-11.png)',  // use a real background, not data-bg-src
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="swiper th-slider" id="brand-slider-1" ref={sliderRef}>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="brand-box">
                    <a href="/about.html"><img src="/assets/img/brand/brand_1_1.svg" alt="Brand 1" /></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <a href="/about.html"><img src="/assets/img/brand/brand_1_2.svg" alt="Brand 2" /></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <a href="/about.html"><img src="/assets/img/brand/brand_1_3.svg" alt="Brand 3" /></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <a href="/about.html"><img src="/assets/img/brand/brand_1_4.svg" alt="Brand 4" /></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <a href="/about.html"><img src="/assets/img/brand/brand_1_5.svg" alt="Brand 5" /></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <a href="/about.html"><img src="/assets/img/brand/brand_1_1.svg" alt="Brand 6" /></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <a href="/about.html"><img src="/assets/img/brand/brand_1_2.svg" alt="Brand 7" /></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <a href="/about.html"><img src="/assets/img/brand/brand_1_3.svg" alt="Brand 8" /></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <a href="/about.html"><img src="/assets/img/brand/brand_1_4.svg" alt="Brand 9" /></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <a href="/about.html"><img src="/assets/img/brand/brand_1_5.svg" alt="Brand 10" /></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional tiny CSS for nicer logo sizing/centering */}
            <style jsx>{`
              .brand-box {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 16px;
              }
              .brand-box img {
                max-height: 100px;
                width: auto;
                display: block;
                opacity: 0.9;
                transition: transform .2s ease, opacity .2s ease;
              }
              .brand-box img:hover {
                transform: scale(1.03);
                opacity: 1;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
