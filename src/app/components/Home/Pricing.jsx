const Pricing = () => {
  return (
    <section
      className="price-sec-1 space overflow-hidden"
      data-bg-src="/assets/img/bg/pricing-plan-1-bg.png"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-9 col-xl-10">
            <div className="title-area text-center">
              <span className="sub-title justify-content-center style-theme">
                Legal Services Pricing
              </span>
              <h2 className="sec-title text-white">
                Transparent Fees for Quality Legal Service
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          <div className="col-xl-4 col-md-6">
            <div className="price-card">
              <div className="price-card_top">
                <h3 className="price-card_title">Consultation Package</h3>
                <p className="box-text">
                  Initial legal consultation and basic document review services.
                </p>
                <h4 className="price-card_price">
                  <sup>$</sup>250 <span className="duration">/ Session</span>
                </h4>
              </div>
              <a href="pricing.html" className="th-btn w-100">
                Get Started{" "}
                <i className="fas fa-regular fa-arrow-right ms-2"></i>
              </a>
              <div className="price-card_content">
                <div className="checklist style7">
                  <ul>
                    <li>
                      <i className="fas fa-circle-check"></i>1-hour legal
                      consultation
                    </li>
                    <li>
                      <i className="fas fa-circle-check"></i>Case evaluation and
                      strategy overview
                    </li>
                    <li className="unavailable">
                      <i className="fas fa-circle-check"></i>Ongoing
                      representation
                    </li>
                    <li className="unavailable">
                      <i className="fas fa-circle-check"></i>Court appearances
                      included
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className="price-card active">
              <div className="price-card_top">
                <h3 className="price-card_title">Ongoing Representation</h3>
                <p className="box-text">
                  Comprehensive legal representation for ongoing cases and
                  matters.
                </p>
                <h4 className="price-card_price">
                  <sup>$</sup>385 <span className="duration">/ Hour</span>
                </h4>
              </div>
              <a href="pricing.html" className="th-btn w-100">
                Get Started{" "}
                <i className="fas fa-regular fa-arrow-right ms-2"></i>
              </a>
              <div className="price-card_content">
                <div className="checklist style7">
                  <ul>
                    <li>
                      <i className="fas fa-circle-check"></i>Criminal Defense
                      with junior lawyer
                    </li>
                    <li>
                      <i className="fas fa-circle-check"></i>Domestic Violence
                      with junior lawyer
                    </li>
                    <li>
                      <i className="fas fa-circle-check"></i>Family violence
                      dispuited case
                    </li>
                    <li className="unavailable">
                      <i className="fas fa-circle-check"></i> Personal injury
                      law deffense
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className="price-card">
              <div className="price-card_top">
                <h3 className="price-card_title">Full Service Legal Support</h3>
                <p className="box-text">
                  Complete legal services including court representation and
                  case management.
                </p>
                <h4 className="price-card_price">
                  <sup>$</sup>450 <span className="duration">/ Hour</span>
                </h4>
              </div>
              <a href="pricing.html" className="th-btn w-100">
                Get Started{" "}
                <i className="fas fa-regular fa-arrow-right ms-2"></i>
              </a>
              <div className="price-card_content">
                <div className="checklist style7">
                  <ul>
                    <li>
                      <i className="fas fa-circle-check"></i>Criminal Defense
                      with junior lawyer
                    </li>
                    <li>
                      <i className="fas fa-circle-check"></i>Domestic Violence
                      with junior lawyer
                    </li>
                    <li>
                      <i className="fas fa-circle-check"></i>Family violence
                      dispuited case
                    </li>
                    <li>
                      <i className="fas fa-circle-check"></i> Personal injury
                      law deffense
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
