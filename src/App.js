import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/navigation/Navigation';
import './Global.css';
import { About } from './pages/About';
import { Posts } from './pages/Posts';
import { Error } from './pages/Error';

function App() {
  
  return (
    <BrowserRouter>
      <Navigation />
      <div className="globalWrap">
        <Routes>
            <Route path='/about' element={<About />}/>
            <Route path='/posts' element={<Posts />}/>
            <Route path='*' element={<Error />}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
