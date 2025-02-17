import React from "react";
import {ArrowRight } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './portfolio.css'



const Portfolio = () => {
  return (
    <div className="container">
      <div style={{ marginTop: "60px", marginBottom: "60px" }}>
        <p className="text-secondary">PORTFOLIO</p>
        <h4 className="text-light">VISUAL PORTRY IN PIXELS</h4>
        <p className="text-secondary col-6">
          Step into a visual journey that encapsulates the essence of my lens.
          Each photograph in this portfolio is a narrative, a frozen moment in
          time, and a testament to the artistry and passion poured into every
          frame. Explore the diverse tapestry of stories I've had the privilege
          to capture and witness the world through my lens.
        </p>
        <img
          src="https://res.cloudinary.com/dvtvhonnl/image/upload/v1739783306/portfolio/Image-6_jrovsz.png"
          alt=""
          id="banner-img"
          className=""
        />
      </div>
      <hr className="text-light" />
      <div className="portraits-section pt-5 pb-5 mt-3" id="exploreSection">
        <div className="container">
          <div className="row">
            <div className="d-flex">
              <div className="col-6 text-start">
                <h2 className="text-light">PORTRAITS PHOTOGRAPHY</h2>
              </div>

              <div className="col-6 text-end align-content-end mb-4">
                <div className="border d-inline-block p-1 m-2 rounded-pill">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="#ffffff8c"
                    class="bi bi-arrow-left-circle-fill"
                    viewBox="0 0 16 16"
                    cursor="pointer"
                  >
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                  </svg>
                  &nbsp; &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="#ffffff8c"
                    className="bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                    cursor="pointer"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg>
                </div>
              </div>
              <br />
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="shadow p-3 mb-3 mt-3 h-100">
                <img
                  src="https://res.cloudinary.com/dvtvhonnl/image/upload/v1739783302/portfolio/Image-7_shcb3p.png"
                  className="w-100 rounded"
                  style={{ height: "80%" }}
                />
                <br /> <br />
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <p className="text-light">Faces of Resilience</p>
                    <p
                      style={{
                        marginTop: "-12px",
                        fontSize: "12px",
                        color: "gray",
                      }}
                    >
                      March 2022
                    </p>
                  </div>
                  <div>
                    <p className="text-end">
                      <a href="" className="text-decoration-none">
                        View All &nbsp; <ArrowRight />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="shadow p-3 mb-3 mt-3 h-100">
                <img
                  src="https://res.cloudinary.com/dvtvhonnl/image/upload/v1739783304/portfolio/Image-9_lpy4ts.png"
                  className="w-100 rounded"
                  style={{ height: "80%" }}
                />
                <br /> <br />
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <p className="text-light">Faces of Resilience</p>
                    <p
                      style={{
                        marginTop: "-12px",
                        fontSize: "12px",
                        color: "gray",
                      }}
                    >
                      March 2022
                    </p>
                  </div>
                  <div>
                    <p className="text-end">
                      <a href="" className="text-decoration-none">
                        View All &nbsp; <ArrowRight />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="shadow p-3 mb-3 mt-3 h-100">
                <img
                  src="https://res.cloudinary.com/dvtvhonnl/image/upload/v1739783303/portfolio/Image-8_qkxpih.png"
                  className="w-100 rounded"
                  style={{ height: "80%" }}
                />
                <br /> <br />
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <p className="text-light">Faces of Resilience</p>
                    <p
                      style={{
                        marginTop: "-12px",
                        fontSize: "12px",
                        color: "gray",
                      }}
                    >
                      March 2022
                    </p>
                  </div>
                  <div>
                    <p className="text-end">
                      <a href="" className="text-decoration-none">
                        View All &nbsp; <ArrowRight />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* event section */}
      <hr className="text-light" />
      <div className="events-section pt-5 pb-5 mt-3" id="exploreSection">
        <div className="container">
          <div className="row">
            <div className="d-flex">
              <div className="col-6 text-start">
                <h2 className="text-light">EVENTS PHOTOGRAPHY</h2>
                <br />
              </div>

              <div className="col-6 text-end align-content-end mb-4">
                <div className="border d-inline-block p-1 m-2 rounded-pill">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="#ffffff8c"
                    class="bi bi-arrow-left-circle-fill"
                    viewBox="0 0 16 16"
                    cursor="pointer"
                  >
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                  </svg>
                  &nbsp; &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="#ffffff8c"
                    className="bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                    cursor="pointer"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg>
                </div>
              </div>
              <br />
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="shadow p-3 mb-3 mt-3 h-100">
                <img
                  src="https://res.cloudinary.com/dvtvhonnl/image/upload/v1739783304/portfolio/Image-12_v9awfd.png"
                  className="w-100 rounded"
                  style={{ height: "80%" }}
                />
                <br /> <br />
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <p className="text-light">Faces of Resilience</p>
                    <p
                      style={{
                        marginTop: "-12px",
                        fontSize: "12px",
                        color: "gray",
                      }}
                    >
                      March 2022
                    </p>
                  </div>
                  <div>
                    <p className="text-end">
                      <a href="" className="text-decoration-none">
                        View All &nbsp; <ArrowRight />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="shadow p-3 mb-3 mt-3 h-100">
                <img
                  src="https://res.cloudinary.com/dvtvhonnl/image/upload/v1739783303/portfolio/Image-11_wfu3s5.png"
                  className="w-100 rounded"
                  style={{ height: "80%" }}
                />
                <br /> <br />
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <p className="text-light">Faces of Resilience</p>
                    <p
                      style={{
                        marginTop: "-12px",
                        fontSize: "12px",
                        color: "gray",
                      }}
                    >
                      March 2022
                    </p>
                  </div>
                  <div>
                    <p className="text-end">
                      <a href="" className="text-decoration-none">
                        View All &nbsp; <ArrowRight />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="shadow p-3 mb-3 mt-3 h-100">
                <img
                  src="https://res.cloudinary.com/dvtvhonnl/image/upload/v1739783313/portfolio/Image-10_s2vars.png"
                  className="w-100 rounded"
                  style={{ height: "80%" }}
                />
                <br /> <br />
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <p className="text-light">Faces of Resilience</p>
                    <p
                      style={{
                        marginTop: "-12px",
                        fontSize: "12px",
                        color: "gray",
                      }}
                    >
                      March 2022
                    </p>
                  </div>
                  <div>
                    <p className="text-end">
                      <a href="" className="text-decoration-none">
                        View All &nbsp; <ArrowRight />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* commerical section */}
      <div className="commercial-section pt-5 pb-5 mt-3" id="exploreSection">
        <div className="container">
          <hr className="text-light" />
          <div className="row">
            <div className="d-flex">
              <div className="col-6 text-start">
                <h2 className="text-light">COMMERCIAL PHOTOGRAPHY.</h2>
                <br />
              </div>

              <div className="col-6 text-end align-content-end mb-4">
                <div className="border d-inline-block p-1 m-2 rounded-pill">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="#ffffff8c"
                    class="bi bi-arrow-left-circle-fill"
                    viewBox="0 0 16 16"
                    cursor="pointer"
                  >
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                  </svg>
                  &nbsp; &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="#ffffff8c"
                    className="bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                    cursor="pointer"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg>
                </div>
              </div>
              <br />
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="shadow p-3 mb-3 mt-3 h-100">
                <img
                  src="https://res.cloudinary.com/dvtvhonnl/image/upload/v1739783307/portfolio/Image-15_qzxpox.png"
                  className="w-100 rounded"
                  style={{ height: "80%" }}
                />
                <br /> <br />
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <p className="text-light">Faces of Resilience</p>
                    <p
                      style={{
                        marginTop: "-12px",
                        fontSize: "12px",
                        color: "gray",
                      }}
                    >
                      March 2022
                    </p>
                  </div>
                  <div>
                    <p className="text-end">
                      <a href="" className="text-decoration-none">
                        View All &nbsp; <ArrowRight />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="shadow p-3 mb-3 mt-3 h-100">
                <img
                  src="https://res.cloudinary.com/dvtvhonnl/image/upload/v1739783311/portfolio/Image-14_w47c0d.png"
                  className="w-100 rounded"
                  style={{ height: "80%" }}
                />
                <br /> <br />
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <p className="text-light">Faces of Resilience</p>
                    <p
                      style={{
                        marginTop: "-12px",
                        fontSize: "12px",
                        color: "gray",
                      }}
                    >
                      March 2022
                    </p>
                  </div>
                  <div>
                    <p className="text-end">
                      <a href="" className="text-decoration-none">
                        View All &nbsp; <ArrowRight />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="shadow p-3 mb-3 mt-3 h-100">
                <img
                  src="https://res.cloudinary.com/dvtvhonnl/image/upload/v1739783309/portfolio/Image-13_iauxj4.png"
                  className="w-100 rounded"
                  style={{ height: "80%" }}
                />
                <br /> <br />
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <p className="text-light">Faces of Resilience</p>
                    <p
                      style={{
                        marginTop: "-12px",
                        fontSize: "12px",
                        color: "gray",
                      }}
                    >
                      March 2022
                    </p>
                  </div>
                  <div>
                    <p className="text-end">
                      <a href="" className="text-decoration-none">
                        View All &nbsp; <ArrowRight />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* faq section */}
      <div className="faq-section mb-4 mt-4">
        <hr className="text-light" />
        <div className="mb-4">
          <p className="text-secondary">FAQ'S</p>
          <h2 className="text-light">FREQENTLY ASKED QUESTIONS</h2>
        </div>
        <div className="faq-body-section d-flex col-12 justify-content-evenly">
          <div className="left-section col-6 col-md-6 col-lg-6  text-center">
            <details className="border p-3 border-secondary">
              <summary className="text-light">
                What type of photography do you specialize in?
              </summary>
              <p className="text-secondary">
                I specialize in [Portrait, Landscape, Event, etc.] photography,
                capturing moments that tell unique stories
              </p>
            </details>
            <details className="border p-3 border-secondary">
              <summary className="text-light">
                How can I book a photography session with you?
              </summary>
              <p className="text-secondary">
                I specialize in [Portrait, Landscape, Event, etc.] photography,
                capturing moments that tell unique stories
              </p>
            </details>
            <details className="border p-3 border-secondary">
              <summary className="text-light">
                What equipment do you use for your photography?
              </summary>
              <p className="text-secondary">
                I specialize in [Portrait, Landscape, Event, etc.] photography,
                capturing moments that tell unique stories
              </p>
            </details>
            <details className="border p-3 border-secondary">
              <summary className="text-light">
                Can I request a specific location for a
              </summary>
              <p className="text-secondary">
                I specialize in [Portrait, Landscape, Event, etc.] photography,
                capturing moments that tell unique stories
              </p>
            </details>
            <details className="border p-3 border-secondary">
              <summary className="text-light">
                What is your editing process like?
              </summary>
              <p className="text-secondary">
                I specialize in [Portrait, Landscape, Event, etc.] photography,
                capturing moments that tell unique stories
              </p>
            </details>
          </div>
          <div className="right-section col-6 col-md-6 col-lg-6  text-center">
            <details className="border p-3 border-secondary">
              <summary className="text-light">
                Are digital files included in photography packages?
              </summary>
              <p className="text-secondary">
                I specialize in [Portrait, Landscape, Event, etc.] photography,
                capturing moments that tell unique stories
              </p>
            </details>
            <details className="border p-3 border-secondary">
              <summary className="text-light">
                Do you offer prints of your photographs?
              </summary>
              <p className="text-secondary">
                I specialize in [Portrait, Landscape, Event, etc.] photography,
                capturing moments that tell unique stories
              </p>
            </details>
            <details className="border p-3 border-secondary">
              <summary className="text-light">
                How long does it take the edited photos session?
              </summary>
              <p className="text-secondary">
                I specialize in [Portrait, Landscape, Event, etc.] photography,
                capturing moments that tell unique stories
              </p>
            </details>
            <details className="border p-3 border-secondary">
              <summary className="text-light">
                What type of photography do you specialize in?
              </summary>
              <p className="text-secondary">
                I specialize in [Portrait, Landscape, Event, etc.] photography,
                capturing moments that tell unique stories
              </p>
            </details>
            <details className="border p-3 border-secondary">
              <summary className="text-light">
                How can I book a photography session with you?
              </summary>
              <p className="text-secondary">
                I specialize in [Portrait, Landscape, Event, etc.] photography,
                capturing moments that tell unique stories
              </p>
            </details>
          </div>
        </div>
      </div>

      {/* review section */}

      <div className="review-section">
        <div className="container">
          <div className="row">
            <div className="d-flex">
              <div className="col-6 text-start">
                <small className="text-secondary mb-1">TESTIMONALS</small>
                <h3 className="text-light mb-1">WHAT MY CLIENTS SAY</h3>
                <small className="text-secondary mb-1">Total Reviews</small>
                <h4 className="text-light">323</h4>
              </div>
              <div className="col-6 text-end align-content-end mb-4">
                <div className="border d-inline-block p-2 rounded-pill">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="#ffffff8c"
                    class="bi bi-arrow-left-circle-fill"
                    viewBox="0 0 16 16"
                    cursor="pointer"
                  >
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                  </svg>
                  &nbsp; &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="#ffffff8c"
                    className="bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                    cursor="pointer"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg>
                </div>
                &nbsp; &nbsp;
                <Button className="bg-secondary border-0">
                  View All Testimonials <ArrowRight />
                </Button>
              </div>
            </div>
            <hr className="text-light" />

            <div className="col-12 col-md-6 col-lg-6 mb-2 d-flex justify-content-between">
              <div className="shadow p-3 mb-3 mt-3 h-100">
                <Card className="p-2">
                  <div className="d-flex">
                    <div className="col-8">
                      <h5 className="font-weight-lighter mb-0">
                        Emily Johnson
                      </h5>
                      <small>Emily Johnson USA, California</small>
                    </div>
                    <div className="col-4 border bg-dark rounded-pill align-items-center m-1 d-flex justify-content-center">
                      <a href="https://www.facebook.com/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="white"
                          class="bi bi-facebook"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg>
                      </a>
                      &nbsp; &nbsp;
                      <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D&mx=2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="white"
                          class="bi bi-twitter"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                        </svg>
                      </a>
                      &nbsp; &nbsp;
                      <a href="https://in.linkedin.com/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="white"
                          class="bi bi-linkedin"
                          viewBox="0 0 16 16"
                          type="button"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <Card.Body>
                    <span class="fa fa-star checked"></span> &nbsp;
                    <span class="fa fa-star checked"></span> &nbsp;
                    <span class="fa fa-star checked"></span>&nbsp;
                    <span class="fa fa-star  checked"></span> &nbsp;
                    <span class="fa fa-star"></span>&nbsp;
                    <Card.Text>
                      Damiens photography doesn t just capture moments; it
                      captures emotions. Hes work is simply mesmerizing
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mb-2 d-flex justify-content-between">
              <div className="shadow p-3 mb-3 mt-3 h-100">
                <Card className="p-2">
                  <div className="d-flex">
                    <div className="col-8">
                      <h5 className="font-weight-lighter mb-0">
                        Emily Johnson
                      </h5>
                      <small>Emily Johnson USA, California</small>
                    </div>
                    <div className="col-4 border bg-dark rounded-pill align-items-center m-1 d-flex justify-content-center">
                      <a href="https://www.facebook.com/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="white"
                          class="bi bi-facebook"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg>
                      </a>
                      &nbsp; &nbsp;
                      <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D&mx=2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="white"
                          class="bi bi-twitter"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                        </svg>
                      </a>
                      &nbsp; &nbsp;
                      <a href="https://in.linkedin.com/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="white"
                          class="bi bi-linkedin"
                          viewBox="0 0 16 16"
                          type="button"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <Card.Body>
                    <span class="fa fa-star checked"></span> &nbsp;
                    <span class="fa fa-star checked"></span> &nbsp;
                    <span class="fa fa-star checked"></span>&nbsp;
                    <span class="fa fa-star  checked"></span> &nbsp;
                    <span class="fa fa-star"></span>&nbsp;
                    <Card.Text>
                      Damiens photography doesn t just capture moments; it
                      captures emotions. Hes work is simply mesmerizing
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mb-2 d-flex justify-content-between">
              <div className="shadow p-3 mb-3 mt-3 h-100">
                <Card className="p-2">
                  <div className="d-flex">
                    <div className="col-8">
                      <h5 className="font-weight-lighter mb-0">
                        Emily Johnson
                      </h5>
                      <small>Emily Johnson USA, California</small>
                    </div>
                    <div className="col-4 border bg-dark rounded-pill align-items-center m-1 d-flex justify-content-center">
                      <a href="https://www.facebook.com/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="white"
                          class="bi bi-facebook"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg>
                      </a>
                      &nbsp; &nbsp;
                      <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D&mx=2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="white"
                          class="bi bi-twitter"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                        </svg>
                      </a>
                      &nbsp; &nbsp;
                      <a href="https://in.linkedin.com/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="white"
                          class="bi bi-linkedin"
                          viewBox="0 0 16 16"
                          type="button"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <Card.Body>
                    <span class="fa fa-star checked"></span> &nbsp;
                    <span class="fa fa-star checked"></span> &nbsp;
                    <span class="fa fa-star checked"></span>&nbsp;
                    <span class="fa fa-star  checked"></span> &nbsp;
                    <span class="fa fa-star"></span>&nbsp;
                    <Card.Text>
                      Damiens photography doesn t just capture moments; it
                      captures emotions. Hes work is simply mesmerizing
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mb-2 d-flex justify-content-between">
              <div className="shadow p-3 mb-3 mt-3 h-100">
                <Card className="p-2">
                  <div className="d-flex">
                    <div className="col-8">
                      <h5 className="font-weight-lighter mb-0">
                        Emily Johnson
                      </h5>
                      <small>Emily Johnson USA, California</small>
                    </div>
                    <div className="col-4 border bg-dark rounded-pill align-items-center m-1 d-flex justify-content-center">
                      <a href="https://www.facebook.com/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="white"
                          class="bi bi-facebook"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg>
                      </a>
                      &nbsp; &nbsp;
                      <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D&mx=2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="white"
                          class="bi bi-twitter"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                        </svg>
                      </a>
                      &nbsp; &nbsp;
                      <a href="https://in.linkedin.com/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="white"
                          class="bi bi-linkedin"
                          viewBox="0 0 16 16"
                          type="button"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <Card.Body>
                    <span class="fa fa-star checked"></span> &nbsp;
                    <span class="fa fa-star checked"></span> &nbsp;
                    <span class="fa fa-star checked"></span>&nbsp;
                    <span class="fa fa-star  checked"></span> &nbsp;
                    <span class="fa fa-star"></span>&nbsp;
                    <Card.Text>
                      Damiens photography doesn t just capture moments; it
                      captures emotions. Hes work is simply mesmerizing
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
