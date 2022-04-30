import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import Footer from 'home/Footer';
import './index.scss';

const Header = lazy(() => import('home/Header'));

const App = () => {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <div className='text-3xl mx-auto max-w-6xl'>
      {showHeader && (
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
      )}
      <div className='my-10'>PDP content</div>
      <button onClick={() => setShowHeader(true)}>Show the header</button>
      <Footer />
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById('app'));
