import React from "react";
import singer from '../../assets/Images/pop-singer.png'
import whiteshirt from '../../assets/Images/Image.png'
import rich from '../../assets/Images/Image-4.png'
import blackgirl from '../../assets/Images/Image-3.png'
import image1 from '../../assets/Images/Images container.png'
import goldplate from '../../assets/Images/Image-5.png'
import { ArrowUpRight, ArrowRight } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import resume from '../../../public/resume-example.pdf'

import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import "./home.css"; 


const Home = () => {
  return (
    <div className="main-section">
      <div className="top-title-section">
        <div className="left-title">
          <p
            style={{
              color: "gray",
              marginBottom: "5px",
              fontSize: "10px",
            }}
          >
            STUNNING PHOTOGRAPHYBY
          </p>
          <h2 className="text-light mt-2">VIJAY SHARMA</h2>
        </div>
        <div className="right-title">
          <h2 style={{ color: "white" }}>
            Let's &nbsp;
            <Button
              variant="primary"
              style={{ width: "40px", borderRadius: "15px" }}
            >
              <ArrowUpRight />
            </Button>
            <br />
            WORK TOGETHER
          </h2>
        </div>
      </div>
      {/* banner section */}
      <div className="banner-section mb-4">
        <div className="container mt-5">
          <Carousel data-bs-theme="dark" touch>
            <Carousel.Item interval={2500}>
              <img
                className="d-block w-100 h-100"
                src={image1}
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* about section */}
      <div className="container mb-4">
        <div className="about-section">
          <div className="d-flex">
            <div className="col-6 text-start">
              <p
                id="portfolio"
                style={{
                  marginTop: "-12px",
                  fontSize: "12px",
                  color: "gray",
                  marginBottom: "10px",
                }}
              >
                PORTFOLIO
              </p>
              <h2 className="text-light">EXPLORE MY PHOTOGRAPHY WORK.</h2>
              <br />
            </div>

            <div className="col-6 text-end align-content-between mb-4">
              <a href="/about">
                <Button className="bg-secondary border-0">
                  View All Works <ArrowRight />
                </Button>
              </a>
            </div>
            <br />
            <hr className="text-light" />
          </div>
          <div className="d-flex flex-wrap justify-content-between m-2">
            <div className="col-12 col-lg-6 col-md-6 h-full text-center mt-4">
              <img
                src={whiteshirt}
                alt=""
                style={{ height: "90%", width: "80%" }}
              />
            </div>

            <div className="left col-12 col-lg-6 col-md-6">
              <h5 className="text-light">✨ Introduction</h5>
              <p className="text-secondary">
                My journey as a photographer has been a lifelong Based in the
                enchanting landscapes of the USA, I find inspiration in every
                corner of this diverse and vibrant country. Join me as we embark
                on a visual odyssey, where each photograph tells a story, and
                every frame is a piece of my heart.
              </p>
              <h4 className="text-light"> ✨ Contact Information</h4>
              <div className="d-flex justify-content-evenly m-4">
                <div>
                  <p className="text-white">Email</p>
                  <p className="text-secondary">vijay@gmail.com</p>
                </div>
                <div>
                  <p className="text-white">Phone Number</p>
                  <p className="text-secondary">2798+9826768</p>
                </div>
              </div>
              <div className="d-flex justify-content-evenly m-4">
                <button className="btn btn-secondary">Let's Write</button>
                <a href={resume}>
                  <button className="btn btn-secondary">Download CV</button>
                </a>
              </div>
              <br />
              <div className="text-center">
                <a href="https://www.facebook.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="white"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </a>
                &nbsp; &nbsp;&nbsp; &nbsp;
                <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D&mx=2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="white"
                    class="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                  </svg>
                </a>
                &nbsp; &nbsp;&nbsp; &nbsp;
                <a href="https://in.linkedin.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
          </div>
        </div>
      </div>
      <br />

      {/* service section */}
      <div className="service-section mb-4">
        <div className="container">
          <div className="row">
            <div className="d-flex">
              <div className="col-6 text-start">
                <p
                  style={{
                    marginTop: "-12px",
                    fontSize: "12px",
                    color: "gray",
                    marginBottom: "10px",
                  }}
                >
                  Services
                </p>
                <h2 className="text-light">MY PHOTOGRAPHY SERVICES</h2>
                <br />
              </div>

              <div className="col-6 text-end align-content-end">
                <div className="border border-secondary d-inline-block p-1 m-2 rounded-pill">
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
                <a href="/services">
                  <Button className="bg-secondary border-0">
                    View All Works <ArrowRight />
                  </Button>
                </a>
              </div>
              <br />
            </div>
            <hr className="text-light" />
            <div className="d-flex flex-wrap mb-4">
              <div className="col-12 col-lg-6 col-md-6 ">
                <br />
                <h4 className="text-light">EVENTS</h4>&nbsp;
                <p className="text-secondary">
                  oluptates dolorum autem quasi eveniet consectetur amet alias
                  accusamus! Debitis enim tempore, sed, nam fuga cumque sapiente
                  corrupti consectetur perspiciatis exercitationem repellendus
                  sequi?
                </p>
                <br />
                <p className="text-light">Service Highlights</p>
                <div>
                  <h6 className="p-2 text-secondary">
                    <li>
                      Coverage for weddings, parties, corporate functions, and
                      more.
                    </li>
                  </h6>
                  <h6 className="p-2 text-secondary">
                    <li>
                      Coverage for weddings, parties, corporate functions, and
                      more.
                    </li>
                  </h6>
                  <h6 className="p-2 text-secondary">
                    <li>
                      Coverage for weddings, parties, corporate functions, and
                      more.
                    </li>
                  </h6>
                  <h6 className="p-2 text-secondary">
                    <li>
                      Coverage for weddings, parties, corporate functions, and
                      more.
                    </li>
                  </h6>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 h-full p-4">
                <img
                  src={singer}
                  alt=""
                  style={{ height: "90%", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* explore section */}

      <div className="explore-section pt-5 pb-5 mt-3" id="exploreSection">
        <div className="container">
          <div className="row">
            <div className="d-flex">
              <div className="col-6 text-start">
                <p
                  style={{
                    marginTop: "-12px",
                    fontSize: "12px",
                    color: "gray",
                    marginBottom: "10px",
                  }}
                >
                  PORTFOLIO
                </p>
                <h2 className="text-light">EXPLORE MY PHOTOGRAPHY WORK.</h2>
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
                &nbsp; &nbsp;
                <a href="/portfolio">
                  <Button className="bg-secondary border-0">
                    View All Works <ArrowRight />
                  </Button>
                </a>
              </div>
              <br />
            </div>

            <hr className="text-light" />

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="shadow p-3 mb-3 mt-3 h-100">
                <img
                  src={blackgirl}
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
                  src={rich}
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
                  src={goldplate}
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

      <br />
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
                      <h5 className="font-weight-lighter mb-0">John Smith</h5>
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
                    <span class="fa fa-star  checked"></span> &nbsp;
                    
                    <Card.Text>
                      Damien has an incredible talent for making every event
                      feel effortless, and the results speak for themselves.
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

export default Home;
