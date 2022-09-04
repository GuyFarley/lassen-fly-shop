import { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export default function AppWrapper({ children }) {
  const [itemList, setItemList] = useState([]);

  const addItems = (items) => {
    setItemList(items);
  }

  const values = {
    itemList,
    addItems,
  }

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
}