import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();
export const AppProvider = (props) => {
  const [name, setname] = useState(" ");

  return (
    <AppContext.Provider value={[name, setname]}>
      {props.children}
    </AppContext.Provider>
  );
};
