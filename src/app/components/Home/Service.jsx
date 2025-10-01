import Link from "next/link";
import { servicesData } from "../../data/servicesData";

const Service = () => {
  return (
    <section className="th-service-1 overflow-hidden space" id="service-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-7 col-md-8">
            <div className="title-area text-center">
              <span className="sub-title justify-content-center">
                Verdicta's Practice Areas
              </span>
              <h2 className="sec-title">Comprehensive Legal Solutions</h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          {servicesData.map((service, index) => (
            <div key={service.id} className="col-xl-4 col-md-6">
              <div className="service-card">
                <div className="shape-mockup service_card-bg-1">
                  <img
                    src={`/assets/img/bg/service_card-bg-1_${index + 1}.png`}
                    alt="shape img"
                  />
                </div>
                <div className="box-icon">
                  <img src={service.icon} alt="Icon" />
                </div>
                <div className="box-content">
                  <h3 className="box-title">
                    <Link href={`/service/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>
                  <p className="box-text">{service.shortDescription}</p>
                </div>
                <Link href={`/service/${service.slug}`} className="link-btn">
                  Read More{" "}
                  <i className="fas fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
