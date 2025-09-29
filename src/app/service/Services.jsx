"use client";

import { useEffect, useRef } from "react";

import Brands from "../components/Home/Brands";
import Pricing from "../components/Home/Pricing";
import Service from "../components/Home/Service";
import Testimonial from "../components/Home/Testimonial";

const Services = () => {
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
        root.querySelectorAll("[data-left], [data-right], [data-top], [data-bottom]").forEach((el) => {
          const left = el.getAttribute("data-left");
          const right = el.getAttribute("data-right");
          const top = el.getAttribute("data-top");
          const bottom = el.getAttribute("data-bottom");
          
          if (left !== null) el.style.left = left.includes('%') || left.includes('px') ? left : `${left}px`;
          if (right !== null) el.style.right = right.includes('%') || right.includes('px') ? right : `${right}px`;
          if (top !== null) el.style.top = top.includes('%') || top.includes('px') ? top : `${top}px`;
          if (bottom !== null) el.style.bottom = bottom.includes('%') || bottom.includes('px') ? bottom : `${bottom}px`;
        });
    
        const swipers = [];
        const listeners= [];
    
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
                  1200: { slidesPerView: 4, spaceBetween: 30 }
                },
                autoHeight: true,
                autoplay: {
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                },
                loop: true,
                speed: 800
              };
            }
    
            const merged = {
              speed: 900,
              watchOverflow: true,
              ...opts,
            };
    
            // @ts-ignore
            const swiper = new (window).Swiper(el, merged);
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
            <h1 className="breadcumb-title">Our Services</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="/">Home</a>
              </li>
               <span> / </span>
              <li>Our Services</li>
            </ul>
          </div>
        </div>
      </div>
      <Service />
      <Pricing />
      <Testimonial/>
      <Brands/>
      </main>
    );
};

export default Services;