import { createContext, useState } from "react";


const RefreshContext = createContext({});

function RefreshProvider({ children }) {
  const [ refresh, setRefresh ] = useState(true);

  console.log(refresh);

  return (
    <RefreshContext.Provider value={{ refresh }}>
      {children}
    </RefreshContext.Provider>
  );
}

export { RefreshContext, RefreshProvider };
