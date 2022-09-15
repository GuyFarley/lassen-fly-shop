import { createContext, useState } from "react";

const FliesContext = createContext();

const FliesProvider = ({ children }) => {

  const [flies, setFlies] = useState([]);
  const [cartFlies, setCartFlies] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);
  const [cartQty, setCartQty] = useState(0);

  const addToCart = (item) => {

    let updatedFlies = flies.map(fly => {
      if (item.id === fly.id) {
        fly.inventory = fly.inventory - 1;
        fly.inCart = fly.inCart + 1;
        setCartQty(cartQty + 1);
        setCartFlies([...cartFlies, fly]);
        setCartPrice(cartPrice + fly.price);
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
        cartQty,
        setCartQty,
        cartFlies,
        setCartFlies,
        cartPrice
      }}
    >
      {children}
    </FliesContext.Provider>
  )
}

export { FliesProvider, FliesContext };