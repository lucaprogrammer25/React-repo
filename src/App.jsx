import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'


function App() {
  

  return (
    <>
      <Counter initialValue={0} incrementAmount={1} decrementAmount={1}/>
    </>
  )
}

export default App
