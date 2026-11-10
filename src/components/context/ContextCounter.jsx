import React, { createContext, useState } from 'react'

export const CounterContext = createContext()

function ContextCounter({ children }) {
  const [count, setCount] = useState(0)

  const increment = (value) => setCount(prev => prev + value)
  const reset = () => setCount(0)

  return (
    <CounterContext.Provider value={{ count, increment, reset }}>
      {children}
    </CounterContext.Provider>
  )
} 
 
export default ContextCounter