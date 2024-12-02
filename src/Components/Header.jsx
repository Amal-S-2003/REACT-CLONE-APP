import React from "react";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <>
      <nav className="d-flex flex-column align-items-center">
        <div className="bg"></div>
        <div className="header w-100 d-flex justify-content-between bg-transparent align-items-center px-3">
          <img src={logo} alt="Logo" width={"180px"} />
          <div className="btns d-flex align-items-center">
            <select
              name="lang"
              id=""
              className="langs fw-bold py-1  px-3 text-light bg-transparent"
            >
              <option value="eng" className="text-dark">
                English
              </option>
              <option value="hin" className="text-dark">
                Hindi
              </option>
            </select>
            <button className="btn btn-light rounded-5 py-1 ms-3 px-3 fw-bold">
              Sign in
            </button>
          </div>
        </div>
        <div className="banner m-3 ">
          <h1 className="text-center text-light ">
            Unlimited movies,TV <br />
            shows and more
          </h1>
          <h5 className="text-center text-light">
            Starts at $149.Cancel at any time.
          </h5>
        </div>
      </nav>
      <div className="box text-center py-5">
        <p className="text-light">Ready to Watch?Enter your email to create or restart your membership.</p>
        <div className="input">
          <input className="py-2 fs-4  me-2 rounded-5 bg-transparent border-light border-1 px-5" type="text" placeholder="Email address" name="" id="" />
          <button className="px-5 fs-4 py-2 fw-bold text-light rounded-5 border-0 " style={{backgroundColor:"red"}}>Join Now </button>
        </div>
      </div>
    </>
  );
}

export default Header;
