import SortDropdown from './SortDropDown';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// Create a mock store
const mockStore = configureStore([]);

describe('SortDropdown Component', () => {
  it('dispatches sorting action when an option is selected', () => {
    const store = mockStore({
      products: { sortBy: '' },
    });

    // Do not manually mock dispatch if you're using redux-mock-store
    const { getByText } = render(
      <Provider store={store}>
        <SortDropdown />
      </Provider>
    );

    // Check if the dropdown button is in the document
    const sortByButton = screen.getByText('Sort By');
    expect(sortByButton).toBeInTheDocument();

    // Simulate opening the dropdown and selecting an option
    fireEvent.click(sortByButton);
    fireEvent.click(getByText('Price: Low to High'));

    // Check if the correct action was dispatched
    const actions = store.getActions();
    expect(actions).toEqual([
      {
        type: 'products/setSortBy',
        payload: 'price-asc',
      },
    ]);
  });
});
