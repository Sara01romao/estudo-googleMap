import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapPage from './pages/MapPage';
import Busca from './components/Busca';

function App() {
  return (
    <div className="containerHome">
        <Busca/>
         <MapPage/> 
    </div>
   
  );
}

export default App;
