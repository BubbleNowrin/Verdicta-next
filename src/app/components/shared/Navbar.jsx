'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('th-body-visible');
    } else {
      document.body.classList.remove('th-body-visible');
    }

    return () => {
      document.body.classList.remove('th-body-visible');
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Side Menu */}
      <div className={`sidemenu-wrapper sidemenu-info d-none d-lg-block ${isSideMenuOpen ? 'show' : ''}`}>
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls" onClick={closeSideMenu}>
            <i className="fas fa-times"></i>
          </button>
          <div className="widget">
            <div className="th-widget-about">
              <div className="about-logo">
                <Link href="/">
                  <Image src="/assets/img/logo.svg" alt="Ensaf-html" width={150} height={50} />
                </Link>
              </div>
              <p className="about-text">
                We provide specialized winterization services to safeguard your pool during
                the off-season, and when spring arrives, we handle the thorough opening process.
              </p>
              <div className="th-social">
                <Link href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="https://www.twitter.com/">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link href="https://www.whatsapp.com/">
                  <i className="fab fa-whatsapp"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="widget">
            <h3 className="widget_title">Recent Posts</h3>
            <div className="recent-post-wrap">
              <div className="recent-post">
                <div className="media-img">
                  <Link href="/blog-details">
                    <Image 
                      src="/assets/img/blog/recent-post-1-1.jpg" 
                      alt="Blog Image" 
                      width={80} 
                      height={80} 
                    />
                  </Link>
                </div>
                <div className="media-body">
                  <h4 className="post-title">
                    <Link className="text-inherit" href="/blog-details">
                      Steps to Pursue a Career as a Legal Project Manager.
                    </Link>
                  </h4>
                  <div className="recent-post-meta">
                    <Link href="/blog">6 Sep, 2025</Link>
                  </div>
                </div>
              </div>
              <div className="recent-post">
                <div className="media-img">
                  <Link href="/blog-details">
                    <Image 
                      src="/assets/img/blog/recent-post-1-2.jpg" 
                      alt="Blog Image" 
                      width={80} 
                      height={80} 
                    />
                  </Link>
                </div>
                <div className="media-body">
                  <h4 className="post-title">
                    <Link className="text-inherit" href="/blog-details">
                      The advantages of choosing a public defender.
                    </Link>
                  </h4>
                  <div className="recent-post-meta">
                    <Link href="/blog">6 Sep, 2025</Link>
                  </div>
                </div>
              </div>
              <div className="recent-post">
                <div className="media-img">
                  <Link href="/blog-details">
                    <Image 
                      src="/assets/img/blog/recent-post-1-3.jpg" 
                      alt="Blog Image" 
                      width={80} 
                      height={80} 
                    />
                  </Link>
                </div>
                <div className="media-body">
                  <h4 className="post-title">
                    <Link className="text-inherit" href="/blog-details">
                      Technology is revolutionizing the legal sector.
                    </Link>
                  </h4>
                  <div className="recent-post-meta">
                    <Link href="/blog">6 Sep, 2025</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="widget newsletter-widget">
            <h3 className="widget_title">Newsletter</h3>
            <p className="footer-text">Sign up to get update news about us</p>
            <form className="newsletter-form">
              <input className="form-control" type="email" placeholder="Enter Email" required />
              <button type="submit" className="th-btn style2">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Search Box */}
      <div className={`popup-search-box d-none d-lg-block ${isSearchOpen ? 'show' : ''}`}>
        <button className="searchClose" onClick={closeSearch}>
          <i className="fas fa-times"></i>
        </button>
        <form action="#">
          <input type="text" placeholder="What are you looking for?" />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>

      {/* Mobile Menu */}
      <div className={`th-menu-wrapper ${isMenuOpen ? 'th-body-visible' : ''}`}>
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle" onClick={toggleMenu}>
            <i className="fas fa-times"></i>
          </button>
          <div className="mobile-logo">
            <Link href="/">
              <Image src="/assets/img/logo.svg" alt="Ensaf-html" width={150} height={50} />
            </Link>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li className="menu-item-has-children">
                <Link href="/">Home</Link>
                <ul className="sub-menu">
                  <li className="menu-item-has-children">
                    <Link href="#">Multipage</Link>
                    <ul className="sub-menu">
                      <li><Link href="/">Home Law Agency</Link></li>
                      <li><Link href="/home-2">Home Lawyer</Link></li>
                      <li><Link href="/home-3">Home Legal Consultant</Link></li>
                      <li><Link href="/home-4">Home Legal Advisore</Link></li>
                      <li><Link href="/home-5">Home Law Consultant</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link href="#">About Us</Link>
                <ul className="sub-menu">
                  <li><Link href="/about">About Us Style 1</Link></li>
                  <li><Link href="/about2">About Us Style 2</Link></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link href="#">Service</Link>
                <ul className="sub-menu">
                  <li><Link href="/service">Service</Link></li>
                  <li><Link href="/service-details">Service Details</Link></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link href="#">Pages</Link>
                <ul className="sub-menu">
                  <li><Link href="/team">Our Attorney</Link></li>
                  <li><Link href="/team-details">Attorney Details</Link></li>
                  <li><Link href="/pricing">Pricing Plan</Link></li>
                  <li><Link href="/testimonials">Testimonials</Link></li>
                  <li><Link href="/faq">Faq Page</Link></li>
                  <li><Link href="/case-studies">Case Studies</Link></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link href="#">Blog</Link>
                <ul className="sub-menu">
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/blog-details">Blog Details</Link></li>
                </ul>
              </li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="th-header header-layout1">
        {/* Header Top */}
        <div className="header-top">
          <div className="container header-1-container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="fas fa-phone"></i>
                      <Link href="tel:+152-6485-5467">+ 152-6485-5467</Link>
                    </li>
                    <li>
                      <i className="fas fa-envelope"></i>
                      <Link href="mailto:info@ensaf.com">info@ensaf.com</Link>
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      <Link href="https://www.google.com/maps">371 7th Ave, New York, NY 10001</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-links">
                  <div className="social-links">
                    <Link href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="https://www.twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="https://www.youtube.com/">
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                    <Link href="https://www.linkedin.com/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container header-1-container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <div className="logo-bg">
                        <Link href="/">
                      <Image src="/assets/img/logo.svg" alt="Ensaf-html" width={150} height={50} />
                    </Link>
                    </div>
                  </div>
                </div>
                <div className="col-auto me-xl-auto">
                  <nav className="main-menu main-menu d-none d-lg-inline-block">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="#">About Us</Link>
                      </li>
                      <li>
                        <Link href="#">Service</Link>
                       
                      </li>
                      <li><Link href="/contact">Contact</Link></li>
                    </ul>
                  </nav>
                  <button 
                    type="button" 
                    className="th-menu-toggle d-block d-lg-none"
                    onClick={toggleMenu}
                  >
                    <i className="fas fa-bars"></i>
                  </button>
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <button 
                      type="button" 
                      className="icon-btn searchBoxToggler"
                      onClick={toggleSearch}
                    >
                      <i className="fas fa-search"></i>
                    </button>
                    <Link href="/contact" className="th-btn style4">
                      Free consultation <i className="fas fa-arrow-right"></i>
                    </Link>
                    <button 
                      type="button" 
                      className="icon-btn sideMenuInfo"
                      onClick={toggleSideMenu}
                    >
                      <i className="fa-solid fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;