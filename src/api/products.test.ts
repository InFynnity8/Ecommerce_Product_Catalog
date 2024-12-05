import axios from 'axios';
import { fetchProducts } from './products';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('API Integration', () => {
  it('fetches products from the API successfully', async () => {
    const mockData = [
      { id: 1, title: 'Product 1', price: 10 },
      { id: 2, title: 'Product 2', price: 20 },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    const response = await fetchProducts();
    expect(response).toEqual(mockData);

    expect(mockedAxios.get).toHaveBeenCalledWith('https://fakestoreapi.com/products');
  });

  it('handles API failure correctly', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

    await expect(fetchProducts()).rejects.toThrow('Network Error');
  });
});
