import { Product } from '@/types/productTypes';
import productReducer, { setSortBy } from './productSlice';

describe('Product Slice', () => {
  it('updates the sortBy field correctly', () => {
    interface ProductState {
        products: Product[];
        loading: boolean;
        error: string | null;
        searchTerm: string;
        sortBy: string;
      }
      
      const initialState: ProductState = {
        products: [],
        loading: false,
        error: null,
        searchTerm: '',
        sortBy: '', 
      };

    const newState = productReducer(initialState, setSortBy('price-asc'));
    expect(newState.sortBy).toBe('price-asc');
  });
});
