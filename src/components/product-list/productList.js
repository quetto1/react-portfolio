import "./productList.css";
import Product from "../product/Product";
import { products } from "./extra-data/productData.js";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context";

function ProductList() {
  // Animation for printing shit from the array using ityped pack
  const textRef = useRef();

  const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Websites!", "Applications!", "Projects!", "Aesthetic!", "Click an check!"],
    });
  }, []);

  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">
          <span
            style={{ color: theme.state.darkMode ? "#228B22" : "#FDF500" }}
            ref={textRef}
          ></span>
        </h1>
        <p className="pl-desc">
          I am most proficcient in React and Vue. This website itself is written
          in React, and 2 out of 3 previos projects I have worked with
          proffessionaly have been made using Vue. Here is a presentation of my
          projects that I've been working on in the past. I was working as a
          FrontEnd developer in Wedio and in SoniqSoft. At Digital Guest I was
          working as a QA Tester and bug fixer. I was involved in development of
          these 3 websites, so stop by for a while and check them out!
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link}></Product>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
