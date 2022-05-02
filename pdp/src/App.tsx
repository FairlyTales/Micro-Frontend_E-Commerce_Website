import React from 'react';
import ReactDOM from 'react-dom';
import Footer from 'home/Footer';
import Header from 'home/Header';
import { ProductInfo } from './ProductInfo';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.scss';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='text-3xl mx-auto max-w-6xl'>
        <Header />
        <div className='my-10'>
          <ProductInfo />
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
