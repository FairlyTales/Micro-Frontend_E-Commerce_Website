import React, { useEffect, useState } from 'react';
import { Login } from './Login';
import { jwt } from './cart';

export const CartContent = () => {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    jwt.subscribe((value) => setToken(value ?? ''));
  }, []);

  return (
    <div>
      {token}
      <Login />
    </div>
  );
};
