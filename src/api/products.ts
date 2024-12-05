import axios from 'axios';
import { Product } from '../types/productTypes';

export const fetchProducts = async (): Promise<Product[]> => {
  const {data} = await axios.get('https://fakestoreapi.com/products');
  return data;
};
