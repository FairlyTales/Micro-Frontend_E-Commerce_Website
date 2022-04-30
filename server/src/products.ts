export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Product-1',
    price: 5.99,
    description: 'Short description',
    image: 'http://localhost:8080/product-1.jpg',
    longDescription: 'Long description',
  },
  {
    id: 2,
    name: 'Product-2',
    price: 8.99,
    description: 'Short description',
    image: 'http://localhost:8080/product-2.jpg',
    longDescription: 'Long description',
  },
  {
    id: 3,
    name: 'Product-3',
    price: 7.99,
    description: 'Short description',
    image: 'http://localhost:8080/product-3.jpg',
    longDescription: 'Long description',
  },
  {
    id: 4,
    name: 'Product-4',
    price: 3.99,
    description: 'Short description',
    image: 'http://localhost:8080/product-4.jpg',
    longDescription: 'Long description',
  },
  {
    id: 5,
    name: 'Product-4',
    price: 7.99,
    description: 'Short description',
    image: 'http://localhost:8080/product-5.jpg',
    longDescription: 'Long description',
  },
  {
    id: 6,
    name: 'Product-5',
    price: 6.99,
    description: 'Short description',
    image: 'http://localhost:8080/product-6.jpg',
    longDescription: 'Long description',
  },
];

export default products;
