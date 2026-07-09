import { useState } from 'react'
import { HashRouter, BrowserRouter , RouterProvider } from 'react-router-dom'
import router from '../router'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter >
      <RouterProvider router={router} />
    </HashRouter >
  )
}

export default App
