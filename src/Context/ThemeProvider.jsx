import { useReducer } from "react";
import { themeContext } from "./themeContext";

const initialState = { darkMode: false, modal: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { ...state, darkMode: !state.darkMode };
    case "showModal":
      return { ...state, modal: true };
    case "hideModal":
      return { ...state, modal: false };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};
