import { useState } from 'react'
import { HashRouter, BrowserRouter , RouterProvider } from 'react-router-dom'
import router from '../router'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
      <RouterProvider router={router} />
    </ >
  )
}

export default App
