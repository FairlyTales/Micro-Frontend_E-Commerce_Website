import { BehaviorSubject } from 'rxjs';
import { useEffect, useState } from 'react';

const API = 'http://localhost:8080';

export const jwt = new BehaviorSubject(null);

export const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(Boolean(jwt.value));

  useEffect(() => {
    setLoggedIn(Boolean(jwt.value));
  }, []);

  return loggedIn;
};

export const login = (username: string, password: string) =>
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
      // getCart();
      return data.access_token;
    });

