import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../state/product/productSlice';


const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value)); // Dispatch search term to Redux
  };

  return (
    <div className="w-[70%]">
      <input
        type="search"
        placeholder="Search products..."
        className="w-full p-2 border rounded"
        onChange={handleSearch}
      />
    </div>
  );
};


export default SearchBar;
