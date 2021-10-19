// Here we are using context api from react in order to make a dark mode for the website
// Not quite sure how it works exactly yet, but we are going there!
import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const INITIAL_STATE = { darkMode: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{state, dispatch}}>{props.children}</ThemeContext.Provider>
  );
};
