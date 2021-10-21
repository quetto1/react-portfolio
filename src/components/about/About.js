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
          <img src={Me2} alt="" className="a-img" />
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
          <br />~ Walt Disney
        </p>
        <p className="a-desc">
          I'm a Web development student at Business Academy Aarhus with a
          passion for exploring and crafting the web. I am a strong believer in
          continious learning and self development so I try my best to reflect
          it in my way of life. When I am not coding you can find me practicing
          calisthenics, working on passion projects, participating in social
          events or simply cooking a delicious meal. I am very appreciative of
          both the creative and the logical process that programming requires
          and when shove comes to push I am more than ready to put in the work
          required!
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">React & Vue</h4>
            <p className="a-award-desc">
              Through education and self development programs I have come to
              familiarize myself with these technologies: CMS: Umbraco, Drupall
              and Wordpress. FrontEnd: React, Vue, MongoDB Mobile: Kotlin,
              Android.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
