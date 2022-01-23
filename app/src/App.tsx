import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from "./components/Header";
import { Box } from "./components/Box";


export function App() {
  return (
    <div className="App">
      <Header/>
      <Box/>
    </div>
  );
}

export default App;
