import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useContext } from "react";
import { ThemeContext } from "../../context";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  function handleSumbit(e) {
    // e.preventDefault();
    emailjs
      .sendForm(
        "service_gidqf3w",
        "template_vo94qvc",
        formRef.current,
        "user_qlvqXGfvZXiYXWrT0mCOV"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="c">
      <div className="c-bg" style={{backgroundColor: theme.state.darkMode ? "#228B22" : "#FDF500"}}></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +45 91953295
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              richterkrzysztof89@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Aarhus Viby J
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always freelancing if the
            right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSumbit}>
            <input
              style={{ backgroundColor: !darkMode && "#333", color: !theme.state.darkMode ? "white" : "black" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: !darkMode && "#333", color: !theme.state.darkMode ? "white" : "black" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: !darkMode && "#333", color: !theme.state.darkMode ? "white" : "black" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: !darkMode && "#333", color: !theme.state.darkMode ? "white" : "black" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button 
            style={{backgroundColor: theme.state.darkMode ? "#228B22" : "#FDF500", color: theme.state.darkMode ? "white" : "black" }}
            >Submit</button>
            {done && "Thank you for your msg"}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
