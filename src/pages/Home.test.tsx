import Home from './Home';
import { render } from '@testing-library/react';

jest.mock('react-redux', () => ({
  useSelector: jest.fn().mockImplementation(() => [
    { id: 1, title: 'Product 1', price: 10, image: 'image1.jpg' },
    { id: 2, title: 'Product 2', price: 20, image: 'image2.jpg' },
  ]),
  useDispatch: jest.fn(),
}));

describe('Home Component', () => {
  it('renders the product list correctly', () => {
    const { container } = render(<Home />);

    expect(container.textContent).toContain('Product 1');
    expect(container.textContent).toContain('$10');
  });
});
