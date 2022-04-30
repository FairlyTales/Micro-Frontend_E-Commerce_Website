import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.scss';
import { ProductList } from './ProductList';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className='text-3xl mx-auto max-w-6xl'>
      <Header />
      <div className='my-10 px-10'>
        <ProductList />
      </div>
      <Footer />
    </div>
  </QueryClientProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
