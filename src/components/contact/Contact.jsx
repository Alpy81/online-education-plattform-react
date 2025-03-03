import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.8770361786073!2d8.662296513023689!3d50.107308511891524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0bffdba62d97%3A0x656e49a61f209b80!2sAm%20Hauptbahnhof%2C%2060329%20Frankfurt%20am%20Main!5e0!3m2!1sde!2sde!4v1741028969607!5m2!1sde!2sde"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>Am Hauptbahnhof 16</p>
                <p>60329 Frankfurt</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> info@educy.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p> +49 69 200 845 64-00</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea
                cols="30"
                rows="10"
                placeholder="Create a message here..."></textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
