import React from "react";
import { Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container className="text-light py-4 ">
        <div className="join text-center">
          <button
            className="text-light fw-bold rounded-5 px-4 m-2 text-center align-self-center py-2 border-0"
            style={{ backgroundColor: "red " }}
          >
            JOIN NOW
          </button>
        </div>
        <p className="text-light text-center mb-5">
          Create or restart your membership
        </p>

        <p>
          Questions?{" "}
          <a href="#" className="text-light">
            {" "}
            Call 000-800-919-1694
          </a>
        </p>
        <Row>
          <div className="col-sm-12 col-lg-3 d-flex flex-column gap-3">
            <a href="#" className="text-light">
              FAQ
            </a>
            <a href="#" className="text-light">
              Investor Relations{" "}
            </a>
            <a href="#" className="text-light">
              {" "}
              Privacy{" "}
            </a>
            <a href="#" className="text-light">
              {" "}
              Speed Test
            </a>
          </div>
          <div className="col-sm-12 col-lg-3 d-flex flex-column gap-3">
            <a href="#" className="text-light">
              Help Centre{" "}
            </a>
            <a href="#" className="text-light">
              Jobs{" "}
            </a>
            <a href="#" className="text-light">
              Cookie Preferences{" "}
            </a>
            <a href="#" className="text-light">
              {" "}
              Legal Notices
            </a>
          </div>
          <div className="col-sm-12 col-lg-3 d-flex flex-column gap-3">
            <a href="#" className="text-light">
              Account
            </a>
            <a href="#" className="text-light">
              Ways to Watch
            </a>
            <a href="#" className="text-light">
              Corporate Information{" "}
            </a>
            <a href="#" className="text-light">
              Only on Netflix
            </a>
          </div>
          <div className="col-sm-12 col-lg-3 d-flex flex-column gap-3">
            <a href="#" className="text-light">
              Media Centre
            </a>
            <a href="#" className="text-light">
              Terms of Use
            </a>
            <a href="#" className="text-light">
              Contact Us
            </a>
          </div>
        </Row>
        <select
          name="lang"
          id=""
          className="langs fw-bold py-1  px-3 text-light bg-transparent my-5"
        >
          <option value="eng" className="text-dark">
            English
          </option>
          <option value="hin" className="text-dark">
            Hindi
          </option>
        </select>
        <p>Netflix India</p>
      </Container>
    </>
  );
}

export default Footer;
