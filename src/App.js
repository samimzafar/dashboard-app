import React from 'react';
import './App.css'
import 'boxicons';
import Sidebar from './components/Sidebar/Sidebar';
import Body from './components/Body/Body';
function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Body/>
    </div>
  )
}
export default App
