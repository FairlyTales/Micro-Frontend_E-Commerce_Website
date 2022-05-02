import React from 'react';
import { currency, getProductById } from 'home/products';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

export const ProductInfo = () => {
  const { id } = useParams();

  const { data: product, status } = useQuery('product', () => getProductById(Number(id)));

  if (status === 'loading') return <p>Loading Product...</p>;
  if (status === 'error' || !product) return <p>Something went wrong. We are working on it!</p>;


  return (
    <div className='my-10 px-10'>
      <div className='grid grid-cols-2 gap-5'>
        <div className='flex justify-center align-middle'>
          <img src={product.image} alt={product.name} />
        </div>
        <div>
          <div className='flex'>
            <h1 className='font-bold text-3xl flex-grow'>{product.name}</h1>
            <div className='font-bold text-3xl flex-end'>
              {currency.format(product.price)}
            </div>
          </div>
          <div className='mt-10'>{product.description}</div>
          <div className='mt-10'>{product.longDescription}</div>
        </div>
      </div>
    </div>
  );
};
