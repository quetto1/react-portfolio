import "./about.css";
import Award from "../../img/vueReact.png";
import Me2 from "../../img/me2.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const About = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me2}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1
          className="a-title"
          style={{ color: theme.state.darkMode ? "#228B22" : "#FDF500" }}
        >
          About Me
        </h1>
        <p className="a-sub">
          “We keep moving forward, opening new doors, and doing new things
          because we’re curious and curiosity keeps leading us down new paths.”
        </p>
        <p className="a-desc">
          I'm an Web development student at Business Academy Aarhus.
          As an web developer, my first love will always be crafting the
          websites. Through content managemnts systems I was able to leverage my
          creative and developing skills with working on projects writeen in
          Umbraco, Drupall and Wordpress. I've expanted my toolkit with technologies liek: React, Vue, MongoDB, 
          Kotlin Android development and more! 
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">React & Vue</h4>
            <p className="a-award-desc">
              My favorites technoglies to use are React and Vue I feel the most
              comfortable using those. This website itself is written in React,
              and 2 out of 3 project from below are written in Vue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
