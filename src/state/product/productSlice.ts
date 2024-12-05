import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../../api/products';
import { Product } from '../../types/productTypes';
import { RootState } from '../store';
export const fetchProductList = createAsyncThunk('products/fetch', fetchProducts);

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


const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload; // Update search term
    },
    setSortBy(state, action) {
      state.sortBy = action.payload; // Update sorting criteria
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.products = action.payload; // Store fetched products
        state.loading = false;
      })
      .addCase(fetchProductList.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to fetch products';
        state.loading = false;
      });
  },
});

export const { setSearchTerm, setSortBy } = productSlice.actions;
export default productSlice.reducer;




// Selector for filtered and sorted products
export const selectFilteredAndSortedProducts = (state: RootState) => {
  const { products, searchTerm, sortBy } = state.products;

  // Filter products by search term
  let filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort products by selected criteria
  if (sortBy === 'price-asc') {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts = filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return filteredProducts;
};
