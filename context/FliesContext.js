import { createContext, useState } from "react";

const FliesContext = createContext();

const FliesProvider = ({ children }) => {

  const [flies, setFlies] = useState([]);

  return (
    <FliesContext.Provider
      value={{
        flies,
        setFlies
      }}
    >
      {children}
    </FliesContext.Provider>
  )
}

export { FliesProvider, FliesContext };