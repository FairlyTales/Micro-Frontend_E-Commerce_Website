import React from 'react';
import ReactDOM from 'react-dom';
import Footer from 'home/Footer';
import Header from 'home/Header';
import { ProductInfo } from './ProductInfo';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.scss';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div className='text-3xl mx-auto max-w-6xl'>
          <Header />
          <div className='my-10'>
            <Routes>
              <Route path='/product/:id' element={<ProductInfo />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </QueryClientProvider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
