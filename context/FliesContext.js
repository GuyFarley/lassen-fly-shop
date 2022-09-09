import { createContext, useState } from "react";

const FliesContext = createContext();

const FliesProvider = ({ children }) => {

  const [flies, setFlies] = useState([]);

  const addToCart = (item) => {
    let updatedFlies = flies.map(fly => {
      if (item.id === fly.id) {
        fly.inventory = fly.inventory - 1;
        console.log(`${fly.title} inventory: `, fly.inventory)
        console.log(fly);
      }
      return fly;
    })
    // return updatedFlies;
    setFlies(updatedFlies);
  }

  return (
    <FliesContext.Provider
      value={{
        flies,
        setFlies,
        addToCart
      }}
    >
      {children}
    </FliesContext.Provider>
  )
}

export { FliesProvider, FliesContext };