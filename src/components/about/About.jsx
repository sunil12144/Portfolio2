import React from "react";
import { ArrowRight } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <div className="bg-black text-white">
      <section className="container py-5 text-start">
        <h5 className="text-secondary">ABOUT</h5>
        <h2 className="fw-bold ">About Vijay Sharma</h2>
        <div className="row g-4  ">
          <div className="col-md-2 bg-black text-light shadow text-center fw-bold p-3 rounded">
            15+
            <br /> <p className="text-secondary ">Years in Business</p>
          </div>
          <div className="col-md-2 bg-dark shadow text-light text-center fw-bold p-3 rounded">
            500+
            <br /> <p className="text-secondary ">Happy Clients</p>
          </div>
          <div className="col-md-2 bg-black shadow text-light text-center fw-bold p-3 rounded">
            10+
            <br /> <p className="text-secondary "> Photography Awards</p>
          </div>
          <div className="col-md-2 bg-dark shadow text-light text-center fw-bold p-3 rounded">
            05+
            <br /> <p className="text-secondary ">International Shoots</p>
          </div>
          <div className="col-md-2 bg-black shadow text-light text-center fw-bold p-3 rounded">
            10,000+
            <br /> <p className="text-secondary ">Social Media Followers</p>
          </div>
          <div className="col-md-2 shadow bg-dark shadow text-light fw-bold text-center p-3 rounded">
            90% +<br />
            <p className="text-secondary ">Client Retention Rate</p>
          </div>
        </div>
        <div className="d-flex justify-content-center my-4">
          <img
            src="https://res.cloudinary.com/dvtvhonnl/image/upload/v1739783976/portfolio/pexels-photo-462162_msyem2.jpg"
            alt="Vijay Sharma"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "750px" }}
          />
        </div>
      </section>

      <section className="container py-5 bg-black text-start">
        <h3 className="fw-bold">My Biography</h3>
        <p className="text-secondary shadow">
          My Biography 90% Client Retention Rate Scroll Down To See My Journey
          Hello! My name is Vijay Sharma, and photography has been my passion
          for as long as I can remember. Ever since I was a child, I’ve been
          fascinated by the magic of freezing moments in time. I still vividly
          recall the excitement of holding a camera for the first time—it felt
          like I had found my purpose. As I grew up, my curiosity turned into a
          deep love for the art of storytelling through photographs. Whether it
          was capturing the vibrant colors of nature, the emotions on a person’s
          face, or the chaos of a bustling street, I found joy in seeing the
          world from different angles and perspectives. Over the years, I’ve
          honed my skills, experimenting with various styles like portraits,
          landscapes, and candid photography. Every photo I take reflects a part
          of my soul and my belief in finding beauty in even the simplest
          moments. For me, photography isn’t just a profession; it’s a way of
          life. It’s how I connect with the world, express my creativity, and
          leave a lasting impact. My journey has been one of constant learning
          and growth, and I look forward to continuing to capture stories that
          inspire and resonate with others
        </p>
      </section>

      <section className="container  py-5 text-start">
        <h3 className="fw-bold">Vijay’s Journey - A Timeline</h3>
        <div className="row g-3">
          <div className="col-md-4 shadow-lg">
            <div className="bg-dark text-secondary p-3 rounded text-start">
              <h5 className="fw-bold">2005</h5>
              <p>Vijay acquired her first camera...</p>
            </div>
          </div>
          <div className="col-md-4 shadow-lg">
            <div className="bg-black text-secondary p-3 rounded text-center">
              <h5 className="fw-bold">2010</h5>
              <p>Vijay pursued a degree in Fine Arts...</p>
            </div>
          </div>

          <div className="col-md-4 shadow-lg">
            <div className="bg-dark text-secondary p-3 rounded text-center">
              <h5 className="fw-bold">2020</h5>
              <p>Vijay’s dedication earned her awards...</p>
            </div>
          </div>
          <div className="col-md-4 shadow-lg">
            <div className="bg-black  text-secondary p-3 rounded text-start">
              <h5 className="fw-bold">2005</h5>
              <p>Vijay acquired her first camera...</p>
            </div>
          </div>
          <div className="col-md-4 shadow-lg">
            <div className="bg-dark text-secondary p-3 rounded text-center">
              <h5 className="fw-bold">2010</h5>
              <p>Vijay pursued a degree in Fine Arts...</p>
            </div>
          </div>

          <div className="col-md-4 shadow-lg">
            <div className="bg-black text-secondary p-3 rounded text-center">
              <h5 className="fw-bold">2020</h5>
              <p>Vijay’s dedication earned her awards...</p>
            </div>
          </div>
        </div>
      </section>

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

export default About;



