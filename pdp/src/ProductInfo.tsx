import React, { useEffect, useState } from 'react';
import { getProductById, Product } from 'home/products';

export const ProductInfo = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const id = 1;

  useEffect(() => {
    if (id) {
      getProductById(id).then((product: Product) => setProduct(product));
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product) return null;

  return (
    <div className='grid grid-cols-2 gap-5'>
      <div>
        <img src={product.image} alt={product.name} />
      </div>
    </div>
  );
};
