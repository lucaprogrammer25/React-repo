import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const hello =<div>Hello, World!</div>  //react renderizza l'espressione jsx come parte del componente

  return (
    <h1>{hello}</h1>   
  )
}

export default App