import React, { FC } from 'react';
import { MiniCart } from 'cart/MiniCart';
import { Login } from 'cart/Login';

const Header: FC = () => {
  return (
    <div className='p-5 bg-blue-500 text-white text-3xl font-bold'>
      <div className='flex'>
        <div className='flex-grow flex'>
          <h1>Just Another E-Commerce Store</h1>
          <div className='mx-5'>|</div>
        </div>
        <div className='flex-end relative'>
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Header;
