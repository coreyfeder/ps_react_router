import { useState } from 'react'
import './App.css'

import Box1 from './components/Box1/Box1'
import Box2 from './components/Box2/Box2'
import Box3 from './components/Box3/Box3'
import Box404 from './components/Box404/Box404'
import Nav from './components/Nav/Nav'

import {Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Box1 />}/>
        <Route path="/one" element={<Box1 />}/>
        <Route path="/two" element={<Box2 />} />
        <Route path="/three" element={<Box3 />} />
        <Route path="/three/:id" element={<Box3 />} />
        <Route path="*" element={<Box404 />} />
      </Routes>
    </div>
  )
}

export default App
