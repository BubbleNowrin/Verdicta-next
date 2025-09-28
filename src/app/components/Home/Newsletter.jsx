const Newsletter = () => {
  return (
    <div
      className="news-letter-1-wrapper"
      // Inline background + layout
      style={{
        backgroundImage: 'url(/assets/img/bg/footer-1-top-right.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative shape (kept non-interactive so it won't block the input) */}
      <div
        className="shape-mockup jump d-none d-xxl-block z-index-3"
        style={{
          position: 'absolute',
          top: '10%',
          left: 0,
          zIndex: 3,
          pointerEvents: 'none',
        }}
      >
        <img src="/assets/img/icon/footer-1-top.png" alt="shape" />
      </div>

      <div className="container">
        {/* Keep box above shapes */}
        <div
          className="subscribe-box newsletter-fix-wrap"
          style={{
            position: 'relative',
            zIndex: 5,
            padding: '40px 24px',
            borderRadius: 16,
          }}
        >
          <div className="row gy-40 gx-60 align-items-center justify-content-center">
            <div className="col-xl-6">
              <p
                className="subscribe-box_text"
                style={{ marginBottom: 8, color: 'rgba(0,0,0,0.8)' }}
              >
                Newsletter
              </p>
              <h4
                className="subscribe-box_title"
                style={{ margin: 0, fontWeight: 700 }}
              >
                Sign Up to get latest Update
              </h4>
            </div>

            <div className="col-xl-6 col-lg-8">
              <form
                className="newsletter-form newsletter-fix"
                style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'stretch',
                  marginTop: 16,
                }}
              >
                <div className="form-group" style={{ flex: '1 1 auto' }}>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter your email"
                    required
                    aria-label="Email address"
                    style={{
                      display: 'block',
                      width: '100%',
                      minHeight: 56,
                      padding: '0 16px',
                      borderRadius: 8,
                      border: '1px solid rgba(0,0,0,0.12)',
                      background: '#fff',
                      color: '#111',
                      outline: 'none',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="th-btn theme-bg"
                  style={{
                    height: 56,
                    lineHeight: '56px',
                    padding: '0 20px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    whiteSpace: 'nowrap',
                    borderRadius: 8,
                  }}
                >
                  Subscribe Now <i className="fas fa-regular fa-arrow-right-long"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
