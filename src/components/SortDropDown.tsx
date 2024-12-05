import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../state/product/productSlice';
import { Button } from "../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RootState } from '@/state/store';

const SortDropdown: React.FC = () => {
  const dispatch = useDispatch();
  const { sortBy } = useSelector((state: RootState) => state.products);

  const handleSortChange = (value: string) => {
    dispatch(setSortBy(value)); // Update sortBy state in Redux
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Sort</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Sort By:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={sortBy} onValueChange={handleSortChange}>
        <DropdownMenuRadioItem value="">None</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="price-asc">Price: Low to High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="price-desc">Price: High to Low</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="rating">Rating</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortDropdown;
