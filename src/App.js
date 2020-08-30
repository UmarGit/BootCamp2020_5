import React from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Home from './views/Home'
import About from './views/About'
import Error from './views/Error'
import ProductItem from './views/ProductItem'
import { Productprovider } from './store/productcontext'

function App() {
  return (
    <Productprovider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/productItem/:id" element={<ProductItem />} />
      </Routes>
    </Productprovider>
  );
}

export default App;
