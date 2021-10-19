import "./productList.css";
import Product from "../product/Product";
import {products} from "./extra-data/productData.js";
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
      backSpeed:60,
      strings: ["Websites", "Applications", "Games", "Aesthetic!"],
    });
  }, []);

  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">
        Projects: <span
      style={{ color: theme.state.darkMode ? "#228B22" : "#FDF500" }}
      ref={textRef}></span>
          </h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          augue cursus, aliquet justo vulputate, hendrerit lacus. Quisque nisl
          odio, bibendum id dui a, eleifend fermentum nisi. Nulla ultricies,
          tortor eu tristique accumsan, felis dui scelerisque felis, et lobortis
          odio erat blandit lorem. Nullam sed ligula commodo, pharetra risus
          non, placerat est.
        </p>
      </div>
      <div
      className='pl-list'>
          {products.map(item=>(
              <Product key={item.id} img={item.img} link={item.link}></Product>
          ))}
      </div>
    </div>
  );
}

export default ProductList;
