import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/navigation/Navigation';
import './Global.css';
import { AppRouter} from './appRouter/AppRouter';

function App() {
  
  return (
    <BrowserRouter>
      <Navigation />
      <div className="globalWrap">
       <AppRouter />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
