"use client";

import Brands from "@/app/components/Home/Brands";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getServiceBySlug, servicesData } from "../../data/servicesData";

const ServiceDetails = () => {
  const params = useParams();
  const serviceSlug = params.slug;
  const service = getServiceBySlug(serviceSlug);

  // If service not found, show 404-like message
  if (!service) {
    return (
      <main>
        <div
          className="breadcumb-wrapper"
          style={{
            backgroundImage: "url(/assets/img/bg/breadcrumb-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.45))",
            }}
          />
          <div
            className="container"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div className="breadcumb-content">
              <h1 className="breadcumb-title" style={{ color: "#fff" }}>
                Service Not Found
              </h1>
              <ul className="breadcumb-menu" style={{ color: "#fff" }}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <span> / </span>
                <li>Service Not Found</li>
              </ul>
            </div>
          </div>
        </div>
        <section className="space">
          <div className="container">
            <div className="text-center">
              <h2>Service Not Found</h2>
              <p>The service you're looking for doesn't exist.</p>
              <Link href="/service" className="th-btn">
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Get other services for sidebar (exclude current service)
  const otherServices = servicesData
    .filter((s) => s.id !== service.id)
    .slice(0, 6);

  return (
    <main>
      {/* Breadcrumb */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url(/assets/img/bg/breadcrumb-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
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
              {service.title}
            </h1>
            <ul className="breadcumb-menu" style={{ color: "#fff" }}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <span> / </span>
              <li>
                <Link href="/service">Services</Link>
              </li>
              <span> / </span>
              <li>{service.title}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details Content */}
      <section className="space-top space-extra2-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="page-single mb-30">
                <div className="page-img">
                  <img src={service.image} alt={`${service.title} Service`} />
                </div>
                <div className="page-content">
                  <h2 className="sec-title page-title">{service.title}</h2>
                  <p className="mb-30">{service.fullDescription}</p>
                  <p className="mb-50">{service.secondDescription}</p>

                  <h2 className="sec-title page-title">
                    Our {service.title} Services
                  </h2>
                  <p className="mb-30">
                    We provide comprehensive {service.title.toLowerCase()}{" "}
                    services designed to meet your specific needs. Our
                    experienced attorneys ensure that every case receives
                    personalized attention and strategic planning.
                  </p>

                  <div className="checklist list-three-column mb-20">
                    <ul>
                      {service.features.map((feature, index) => (
                        <li key={index}>
                          <i className="fas fa-regular fa-check"></i> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="row mt-30 gx-40">
                    <div className="col-md-6">
                      <div className="page-img">
                        <img
                          className="w-100"
                          src={service.detailImage1}
                          alt={service.title}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p className="mb-4">
                        At Verdicta, we understand that legal matters can be
                        complex and overwhelming. Our{" "}
                        {service.title.toLowerCase()} attorneys are committed to
                        providing clear guidance and effective representation
                        throughout the entire process.
                      </p>
                      <p className="mb-0">
                        With years of experience practicing law in Alabama, our
                        team has the knowledge and expertise to handle even the
                        most challenging {service.title.toLowerCase()} cases.
                      </p>
                    </div>
                  </div>

                  <p className="mb-0 mt-30">
                    Contact Verdicta today to schedule a consultation and learn
                    how our {service.title.toLowerCase()}
                    services can help protect your interests and achieve your
                    legal goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xxl-4 col-lg-4">
              <aside className="sidebar-area">
                <div className="widget widget_categories">
                  <h3 className="widget_title">Our Legal Services</h3>
                  <ul>
                    {otherServices.map((otherService) => (
                      <li key={otherService.id}>
                        <Link href={`/service/${otherService.slug}`}>
                          {otherService.title}
                        </Link>
                        <span>
                          <i className="fas fa-sharp fa-light fa-arrow-right"></i>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="widget widget_call">
                  <div className="widget-call">
                    <h4 className="box-title text-white">Need Legal Help?</h4>
                    <p className="text-white box_text">
                      Contact Verdicta 24/7 For Legal Support
                    </p>
                    <div className="widget_call">
                      <div className="info-box">
                        <div className="info-box_icon">
                          <i className="fas fa-phone"></i>
                        </div>
                        <div>
                          <span className="info-box_subtitle">Call Us</span>
                          <p className="info-box_text">
                            <a
                              href={`tel:${service.phone}`}
                              className="info-box_link"
                            >
                              {service.phone}
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="info-box">
                        <div className="info-box_icon">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <div>
                          <span className="info-box_subtitle">Email Us</span>
                          <p className="info-box_text">
                            <a
                              href={`mailto:${service.email}`}
                              className="info-box_link"
                            >
                              {service.email}
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="info-box">
                        <div className="info-box_icon">
                          <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div>
                          <span className="info-box_subtitle">
                            Office Address
                          </span>
                          <p className="info-box_text">{service.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <Brands />
    </main>
  );
};

export default ServiceDetails;
