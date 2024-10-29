import React, { createContext, useState } from 'react'

//Create
//Provide
//Use

export const CountContext = createContext();

const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

  return (
    <CountContext.Provider value={{ count, increment }}>
        {children}
    </CountContext.Provider>
  )
}

export default CountProvider