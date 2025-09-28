const Process = () => {
    return ( <section className="space" id="process-sec">
        <div className="shape-mockup jump" data-right="0" data-bottom="0">
          <img src="assets/img/shape/process-1-shape.png" alt="image" />
        </div>
        <div className="container">
          <div className="row gy-40 gx-50 align-items-center">
            <div className="col-xl-6 mb-xl-0">
              <div className="process-thumb">
                <div className="img-box1">
                  <div className="process-play-btn-wrap">
                    <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="play-btn style2 popup-video">
                      <i className="fa-sharp fa-solid fa-play"></i>
                    </a>
                  </div>
                  <img src="assets/img/process/process-1.jpg" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area">
                <span className="sub-title before-none">Work Process</span>
                <h2 className="sec-title">Navigating the Law: Your Assurance of Peace</h2>
              </div>
              <div className="process-bottom">
                <div className="process-bottom-item">
                  <div className="process-bottom-item__icon"><img src="assets/img/icon/process-1-icon-1.svg" alt="img" /></div>
                  <div className="process-bottom-item__content">
                    <h5 className="box-title">Initial Consultation</h5>
                    <p>Our experienced lawyers thoroughly analyze the facts of each case. They then apply the relevant laws to provide clear.</p>
                  </div>
                </div>
                <div className="process-bottom-item">
                  <div className="process-bottom-item__icon"><img src="assets/img/icon/process-1-icon-2.svg" alt="img" /></div>
                  <div className="process-bottom-item__content">
                    <h5 className="box-title">Case Evaluation</h5>
                    <p>We prioritize understanding your concerns and aligning with your goals. Your satisfaction is our top priority.</p>
                  </div>
                </div>
                <div className="process-bottom-item">
                  <div className="process-bottom-item__icon"><img src="assets/img/icon/process-1-icon-3.svg" alt="img" /></div>
                  <div className="process-bottom-item__content">
                    <h5 className="box-title">Legal Strategy</h5>
                    <p>We develop a customized plan to protect your rights and achieve the best possible outcome.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>);
}

export default Process;