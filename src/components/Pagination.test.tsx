import Pagination from './Pagination';
import { render, fireEvent } from '@testing-library/react';

describe('Pagination Component', () => {
  it('renders pagination buttons and handles clicks', () => {
    const paginateMock = jest.fn();

    const { container, getByText } = render(
      <Pagination
        productsPerPage={8}
        totalProducts={32}
        currentPage={1}
        paginate={paginateMock}
      />
    );

    // Check if the correct number of buttons is rendered
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBe(4); // 32 / 8 = 4 pages

    // Simulate a click on the second page button
    fireEvent.click(getByText('2'));

    // Verify the callback was called with the correct argument
    expect(paginateMock).toHaveBeenCalledWith(2);
  });
});
