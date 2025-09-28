const Pricing = () => {
    return (
         <section className="price-sec-1 space overflow-hidden" data-bg-src="assets/img/bg/pricing-plan-1-bg.png">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-9 col-xl-10">
              <div className="title-area text-center">
                <span className="sub-title justify-content-center style-theme">Pricing Plan</span>
                <h2 className="sec-title text-white">Customized Plans Just for You</h2>
              </div>
            </div>
          </div>
          <div className="row gy-4 justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="price-card">
                <div className="price-card_top">
                  <h3 className="price-card_title">Basic Plan</h3>
                  <p className="box-text">Consultation with a lawyer for your person al solution with basic plan.</p>
                  <h4 className="price-card_price"><sup>$</sup>355 <span className="duration">/ Month</span></h4>
                </div>
                <a href="pricing.html" className="th-btn w-100">Get Started <i className="fas fa-regular fa-arrow-right ms-2"></i></a>
                <div className="price-card_content">
                  <div className="checklist style7">
                    <ul>
                      <li><i className="fas fa-circle-check"></i>Criminal Defense with junior lawyer</li>
                      <li><i className="fas fa-circle-check"></i>Domestic Violence with junior lawyer</li>
                      <li className="unavailable"><i className="fas fa-circle-check"></i>Family violence dispuited case</li>
                      <li className="unavailable"><i className="fas fa-circle-check"></i>Personal injury law deffense</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="price-card active">
                <div className="price-card_top">
                  <h3 className="price-card_title">Standard Plan</h3>
                  <p className="box-text">Consultation with a lawyer for your person al solution with Standard Plan.</p>
                  <h4 className="price-card_price"><sup>$</sup>455 <span className="duration">/ Month</span></h4>
                </div>
                <a href="pricing.html" className="th-btn w-100">Get Started <i className="fas fa-regular fa-arrow-right ms-2"></i></a>
                <div className="price-card_content">
                  <div className="checklist style7">
                    <ul>
                      <li><i className="fas fa-circle-check"></i>Criminal Defense with junior lawyer</li>
                      <li><i className="fas fa-circle-check"></i>Domestic Violence with junior lawyer</li>
                      <li><i className="fas fa-circle-check"></i>Family violence dispuited case</li>
                      <li className="unavailable"><i className="fas fa-circle-check"></i> Personal injury law deffense</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="price-card">
                <div className="price-card_top">
                  <h3 className="price-card_title">Premium Plan</h3>
                  <p className="box-text">Consultation with a lawyer for your person al solution with Premium Plan.</p>
                  <h4 className="price-card_price"><sup>$</sup>555 <span className="duration">/ Month</span></h4>
                </div>
                <a href="pricing.html" className="th-btn w-100">Get Started <i className="fas fa-regular fa-arrow-right ms-2"></i></a>
                <div className="price-card_content">
                  <div className="checklist style7">
                    <ul>
                      <li><i className="fas fa-circle-check"></i>Criminal Defense with junior lawyer</li>
                      <li><i className="fas fa-circle-check"></i>Domestic Violence with junior lawyer</li>
                      <li><i className="fas fa-circle-check"></i>Family violence dispuited case</li>
                      <li><i className="fas fa-circle-check"></i> Personal injury law deffense</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
}

export default Pricing;