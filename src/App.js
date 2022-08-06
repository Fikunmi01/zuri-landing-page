import './App.css';
import LandingPage from './page/landing';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import NewIndustry from './page/new_industry';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='new-training' element={<NewIndustry/>}/>
      </Routes>
    </div>
  );
}

export default App;
