import React from 'react';
import ReactDOM from 'react-dom';
import Footer from 'home/Footer';
import Header from 'home/Header';
import { ProductInfo } from './ProductInfo';
import './index.scss';

const App = () => {
  return (
    <div className='text-3xl mx-auto max-w-6xl'>
      <Header />
      <div className='my-10'>
        <ProductInfo />
      </div>
      <Footer />
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById('app'));
