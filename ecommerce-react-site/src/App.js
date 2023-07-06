import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import React from 'react';
import New from './pages/new';
import Men from './pages/men'
import Women from './pages/women';
import Other from './pages/other';
import Cart from './pages/cart';
import Details from './pages/details/index.js';
import { AppContextProvider } from "./context/AppContext.js";

function App() {

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/other' element={<Other />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
