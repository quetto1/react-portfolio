import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/product-list/ProductList";
import Contact from "./components/contact/contact";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";

function App() {

  // Calling our context here
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{
      backgroundColor: !darkMode ? "#222" : "white",
      color: !darkMode && "white",
  transition: "all 0.8s ease"

    }}>

      <Toggle></Toggle>
      <Intro></Intro>
      <About></About>
      <ProductList></ProductList>
      <Contact></Contact>

    </div>
  );
}

export default App;
