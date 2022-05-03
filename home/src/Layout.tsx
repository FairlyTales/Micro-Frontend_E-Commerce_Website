import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './index.scss';

import Header from 'home/Header';
import Footer from 'home/Footer';
import { CartContent } from 'cart/CartContent';
import { ProductList } from 'home/ProductList';
import { ProductInfo } from 'pdp/ProductInfo';

export function Layout() {
  return (
    <Router>
      <div className='text-3xl mx-auto max-w-6xl'>
        <Header />
        <div className='my-10'>
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/product/:id' element={<ProductInfo />} />
            <Route path='/cart' element={<CartContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
