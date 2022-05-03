import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { MiniCart } from 'cart/MiniCart';
import { Login } from 'cart/Login';

const Header: FC = () => {
  return (
    <div className='p-5 bg-blue-500 text-white text-3xl font-bold'>
      <div className='flex'>
        <div className='flex-grow flex'>
          <Link to='/'>
            <h1>Just Another E-Commerce Store</h1>
          </Link>
          <div className='mx-5'>|</div>
          <Link to='/cart'>
            <h2>Cart</h2>
          </Link>
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
