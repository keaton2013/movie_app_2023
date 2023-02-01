import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './routes/About';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path='/movie-detail' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;