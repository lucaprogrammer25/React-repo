import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Welcome } from './Welcome'

function App() {
  

  return ( 
    <Welcome />
  
  )
}

export default App

//se non viene passata alcuna props react darà come valore name undefined
