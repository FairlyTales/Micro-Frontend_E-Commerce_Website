import { BehaviorSubject } from 'rxjs';
import { useEffect, useState } from 'react';
import { Product } from 'home/products';

export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  cartItems: CartItem[];
}

const API = 'http://localhost:8080';

export const jwt = new BehaviorSubject<string>('');
export const cart = new BehaviorSubject<Cart | null>(null);

export const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(Boolean(jwt.value));

  useEffect(() => {
    setLoggedIn(Boolean(jwt.value));
  }, []);

  return loggedIn;
};

export const getCart = (): Promise<Cart> =>
  fetch(`${API}/cart`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt.value}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      cart.next(res);

      return res;
    });

export const addToCart = (id: string): Promise<Cart> =>
  fetch(`${API}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt.value}`,
    },
    body: JSON.stringify({ id }),
  })
    .then((res) => res.json())
    .then(() => {
      return getCart();
    });

export const clearCart = (): Promise<Cart> =>
  fetch(`${API}/cart`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt.value}`,
    },
  })
    .then((res) => res.json())
    .then(() => {
      return getCart();
    });

export const login = (username: string, password: string): Promise<string> =>
  fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      // updating jwt content with a received token
      jwt.next(data.access_token);
      getCart();

      return data.access_token;
    });
