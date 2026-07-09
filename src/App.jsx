import { useState } from 'react'
import { BrowserRouter , RouterProvider } from 'react-router-dom'
import router from '../router'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter >
      <RouterProvider router={router} />
    </BrowserRouter >
  )
}

export default App
