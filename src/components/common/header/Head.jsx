import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo-container">
            <img className="logo-symbol" src="/images/logo.png" alt="Logo" />
            <h1>
              E <span id="d">D</span> U <span id="c">C</span> Y
            </h1>
          </div>
          <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
