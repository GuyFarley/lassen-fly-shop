import { createContext, useState } from "react";

const FliesContext = createContext();

const FliesProvider = ({ children }) => {

  const [flies, setFlies] = useState([]);
  const [fliesInCart, setFliesInCart] = useState(0);

  const addToCart = (item) => {
    let updatedFlies = flies.map(fly => {
      if (item.id === fly.id) {
        fly.inventory = fly.inventory - 1;
        fly.inCart = fly.inCart + 1;
        setFliesInCart(fliesInCart + 1);
      }
      return fly;
    })
    setFlies(updatedFlies);
  }

  return (
    <FliesContext.Provider
      value={{
        flies,
        setFlies,
        addToCart,
        fliesInCart,
        setFliesInCart
      }}
    >
      {children}
    </FliesContext.Provider>
  )
}

export { FliesProvider, FliesContext };