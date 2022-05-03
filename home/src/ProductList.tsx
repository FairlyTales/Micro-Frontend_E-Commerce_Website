import React from 'react';
import { currency, getProducts, Product } from './products';
import { useQuery } from 'react-query';
import { addToCart, useLoggedIn } from 'cart/cart';

export const ProductList = () => {
  const { data: products, status } = useQuery('products', getProducts);
  const loggedIn = useLoggedIn();

  if (status === 'loading') return <p>Loading Products...</p>;
  if (status === 'error') return <p>Something went wrong. We are working on it!</p>;

  return (
    <ul className='grid grid-cols-3 gap-6'>
      {status === 'success' &&
        products.map((product: Product) => (
          <li key={product.id} className='flex justify-center'>
            <div>
              <a>
                <img src={product.image} alt={product.name} />
              </a>
              <h5 className='font-bold mt-1'>
                {product.name}
              </h5>
              <p className='text-md mt-1'>
                {currency.format(product.price)}
              </p>
              <p className='text-md mt-1'>
                {product.description}
              </p>
              {loggedIn && (
                <div className='text-right mt-2'>
                  <button
                    className='bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded'
                    onClick={() => {
                      addToCart(product.id.toString());
                    }}
                    id={`addtocart_${product.id}`}
                  >
                    Add to Cart
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
    </ul>
  );
};
