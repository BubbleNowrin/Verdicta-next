const Process = () => {
  return (
    <section className="space" id="process-sec">
      <div className="shape-mockup jump" data-right="0" data-bottom="0">
        <img src="/assets/img/shape/process-1-shape.png" alt="image" />
      </div>
      <div className="container">
        <div className="row gy-40 gx-50 align-items-center">
          <div className="col-xl-6 mb-xl-0">
            <div className="process-thumb">
              <div className="img-box1">
                <div className="process-play-btn-wrap">
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="play-btn style2 popup-video"
                  >
                    <i className="fa-sharp fa-solid fa-play"></i>
                  </a>
                </div>
                <img src="/assets/img/process/process-1.jpg" alt="image" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area">
              <span className="sub-title before-none">Verdicta's Approach</span>
              <h2 className="sec-title">
                Your Path to Legal Success in Alabama
              </h2>
            </div>
            <div className="process-bottom">
              <div className="process-bottom-item">
                <div className="process-bottom-item__icon">
                  <img src="/assets/img/icon/process-1-icon-1.svg" alt="img" />
                </div>
                <div className="process-bottom-item__content">
                  <h5 className="box-title">Free Consultation</h5>
                  <p>
                    Meet with our Alabama attorneys to discuss your case. We
                    listen carefully and provide honest assessment of your legal
                    options.
                  </p>
                </div>
              </div>
              <div className="process-bottom-item">
                <div className="process-bottom-item__icon">
                  <img src="/assets/img/icon/process-1-icon-2.svg" alt="img" />
                </div>
                <div className="process-bottom-item__content">
                  <h5 className="box-title">Thorough Investigation</h5>
                  <p>
                    Our team conducts comprehensive research and gathers
                    evidence to build the strongest possible case for your
                    situation.
                  </p>
                </div>
              </div>
              <div className="process-bottom-item">
                <div className="process-bottom-item__icon">
                  <img src="/assets/img/icon/process-1-icon-3.svg" alt="img" />
                </div>
                <div className="process-bottom-item__content">
                  <h5 className="box-title">Strategic Execution</h5>
                  <p>
                    We implement a tailored legal strategy designed to protect
                    your interests and maximize your chances of success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
