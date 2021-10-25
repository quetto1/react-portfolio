import "./intro.css";
import Yoda from "../../img/developIntro.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";
// POPRAW TE NIEDOJEBANE PROCENTOWE%%% WARTOSCI W CSSIE
function Intro() {
  const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <p
            className="i-intro"
            style={{ color: theme.state.darkMode ? "#228B22" : "#FDF500" }}
          >
            Web Developer
          </p>
          <p className="i-name">Krzysztof Richter</p>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div
                style={{ color: theme.state.darkMode ? "#228B22" : "#FDF500" }}
                className="i-title-item"
              >
                Web Developer
              </div>
              <div
                style={{ color: theme.state.darkMode ? "#228B22" : "#FDF500" }}
                className="i-title-item"
              >
                Content Creator
              </div>
              <div
                style={{ color: theme.state.darkMode ? "#228B22" : "#FDF500" }}
                className="i-title-item"
              >
                UI/UX Designer
              </div>
              <div
                style={{ color: theme.state.darkMode ? "#228B22" : "#FDF500" }}
                className="i-title-item"
              >
                QA Tester
              </div>
              <div
                style={{ color: theme.state.darkMode ? "#228B22" : "#FDF500" }}
                className="i-title-item"
              >
                Coppy Writter
              </div>
            </div>
          </div>
          <p className="i-desc">
            Freelance Web Developer & Designer based in Aarhus, Denmark. I enjoy
            building everything from small business sites to rich interactive
            web. apps. If you are a business seeking a web presence or an
            employer looking to hire, you can get in touch with me here.
          </p>
        </div>
        <svg
          width="45"
          height="45"
          viewBox="0 0 75 75"
          fill="none"
          stroke="white"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div
          style={{
            backgroundColor: theme.state.darkMode ? "#228B22" : "#FDF500",
          }}
          className="i-bg"
        ></div>
        <img src={Yoda} alt="" className="i-img"></img>
      </div>
    </div>
  );
}

export default Intro;
