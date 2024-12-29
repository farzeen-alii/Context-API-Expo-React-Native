import React from 'react'
import CountProvider from './src/context/CountContext'
import First from './src/First'

const App = () => {
  return (
    <CountProvider>
      <First />
    </CountProvider>
  )
}

export default App;
