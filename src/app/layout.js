/* eslint-disable @next/next/no-css-tags */
import { Poppins, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400","500","600","700","800","900"],
  display: "swap",
});

export const metadata = {
  title: "Verdicta - Law Agency & Legal Services",
  description: "Professional legal services and consultation for all your legal needs",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon-180x180.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="no-js">
      <head>
        {/* Google Fonts (Optional — next/font already handles fonts.
            If you keep this, it won’t break, just redundant.) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />


        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        {/* CSS CDNs */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/jquery.counterup/1.0/jquery.counterup.css"
        />
      </head>

      <body className={`${poppins.variable} ${playfairDisplay.variable} antialiased`}>
        {/* Preloader */}
        <div className="preloader">
          <button className="th-btn preloaderCls">Cancel Preloader</button>
          <div className="preloader-inner">
            <div className="loader"></div>
          </div>
        </div>

        

        <Navbar />
        {children}
        <Footer />

        {/* Scroll to top */}
        <div className="scroll-top">
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              style={{
                transition: "stroke-dashoffset 10ms linear 0s",
                strokeDasharray: "307.919, 307.919",
                strokeDashoffset: "307.919",
              }}
            />
          </svg>
        </div>

        {/* JS CDNs */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.1/tilt.jquery.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/lettering.js/0.7.0/jquery.lettering.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-countdown/2.2.0/jquery.countdown.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js" strategy="afterInteractive" />
        


        {/* Init */}
        <Script id="init-plugins" strategy="afterInteractive">
          {`
            $(function() {
              // Preloader
              $('.preloader').fadeOut();
              $('.preloaderCls').on('click', function(e) { e.preventDefault(); $('.preloader').hide(); });

              // WOW
              if (typeof WOW !== 'undefined') { new WOW().init(); }

              // AOS
              if (typeof AOS !== 'undefined') { AOS.init({ duration: 1000, once: true, offset: 100 }); }

              // GSAP
              if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
                gsap.registerPlugin(ScrollTrigger);
              }

              // CounterUp
              if ($.fn.counterUp) { $('.counter-number').counterUp({ delay: 10, time: 1000 }); }

              // Nice Select
              if ($.fn.niceSelect) { $('select').niceSelect(); }

              // Magnific Popup
              if ($.fn.magnificPopup) {
                $('.popup-image').magnificPopup({ type: 'image', mainClass: 'mfp-zoom-in', removalDelay: 260, gallery: { enabled: true } });
                $('.popup-video').magnificPopup({ type: 'iframe' });
                $('.popup-content').magnificPopup({ type: 'inline', midClick: true });
              }

            

              // Isotope
              if ($.fn.isotope) {
                $('.filter-active').imagesLoaded(function() {
                  var $grid = $('.filter-active').isotope({ itemSelector: '.filter-item', filter: '*' });
                  $('.filter-menu-active').on('click', 'button', function() {
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({ filter: filterValue });
                    $(this).addClass('active').siblings().removeClass('active');
                  });
                });
              }

              // Tilt
              if ($.fn.tilt) { $('.tilt-active').tilt({ maxTilt: 7, perspective: 1000 }); }

              // Sticky Header
              $(window).on('scroll', function() {
                if ($(this).scrollTop() > 500) $('.sticky-wrapper').addClass('sticky');
                else $('.sticky-wrapper').removeClass('sticky');
              });

              // Scroll to Top + progress ring
              var $btn = $('.scroll-top');
              var $path = $('.scroll-top path');
              if ($path.length) {
                var path = $path.get(0);
                var length = path.getTotalLength();
                $path.css({ transition: 'none', strokeDasharray: length + ' ' + length, strokeDashoffset: length });
                path.getBoundingClientRect();
                $path.css({ transition: 'stroke-dashoffset 10ms linear' });
                var update = function() {
                  var scroll = $(window).scrollTop();
                  var height = $(document).height() - $(window).height();
                  var progress = length - (scroll * length / height);
                  $path.css('stroke-dashoffset', progress);
                };
                update();
                $(window).on('scroll', update);
              }
              $(window).on('scroll', function() { $(this).scrollTop() > 50 ? $btn.addClass('show') : $btn.removeClass('show'); });
              $btn.on('click', function(e) { e.preventDefault(); $('html, body').animate({ scrollTop: 0 }, 750); });

              // Color Switcher
              $('.color-switch-btns button').on('click', function() {
                $(':root').css('--theme-color', $(this).data('color'));
              });
              $('.secondary-color-switch-btns button').on('click', function() {
                $(':root').css('--theme-color2', $(this).data('secondary-color'));
              });
              $(document).on('click', '.switchIcon', function() { $('.color-scheme-wrap').toggleClass('active'); });

              // Background helpers
              $('[data-bg-src]').each(function() { $(this).css('background-image', 'url(' + $(this).attr('data-bg-src') + ')').removeAttr('data-bg-src').addClass('background-image'); });
              $('[data-bg-color]').each(function() { $(this).css('background-color', $(this).attr('data-bg-color')).removeAttr('data-bg-color'); });

              // Quantity
              $('.quantity-plus').on('click', function(e){ e.preventDefault(); var $i=$(this).siblings('.qty-input'); var v=parseInt($i.val(),10); if(!isNaN(v)) $i.val(v+1); });
              $('.quantity-minus').on('click', function(e){ e.preventDefault(); var $i=$(this).siblings('.qty-input'); var v=parseInt($i.val(),10); if(!isNaN(v)&&v>1) $i.val(v-1); });

              // Smooth anchor
              $('a[href^="#"]').on('click', function(e){
                var target=$(this.getAttribute('href'));
                if(target.length){ e.preventDefault(); $('html, body').stop().animate({ scrollTop: target.offset().top - 100 }, 1000); }
              });
            });
          `}
        </Script>
      </body>
    </html>
  );
}
