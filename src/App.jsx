import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'


function App() {
  
  const onLogin = () => {
    alert("Sei connesso")
  }

  return (
   <Login stateLogin={onLogin}/>

  )
}

export default App
