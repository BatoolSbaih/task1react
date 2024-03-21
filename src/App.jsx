import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let name="John Doe";
  let age=20;
   return (
     <>
      <p>Hello  <span>{name}</span></p>
      <p>You age is : <span>{age}</span></p>
     </>)
}

export default App
