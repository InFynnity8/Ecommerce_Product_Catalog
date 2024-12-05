// import React, { useState } from 'react'
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ImSpinner10 } from "react-icons/im";
import { TbFaceIdError } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import { IoIosSunny } from "react-icons/io";
import {
  fetchProductList,
  selectFilteredAndSortedProducts,
} from "../state/product/productSlice";
import { AppDispatch, RootState } from "../state/store";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropDown";
import Pagination from "../components/Pagination";
import { Product } from "../types/productTypes";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) =>
    selectFilteredAndSortedProducts(state)
  );
  const { loading, error } = useSelector((state: RootState) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const productsPerPage = 8;

  // Calculate indices for slicing products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change current page based on the current page number
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  // Fetch products when the component mounts
  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  // Render loading, error, or products
  if (loading)
    return (
      <p className="w-full h-[100vh] flex items-center justify-center">
        <ImSpinner10 className="animate-spin size-[50px]" />
      </p>
    );
  if (error)
    return (
      <p className="w-full h-[100vh] flex items-center justify-center text-[20px]">
        <TbFaceIdError className="size-[50px] m-4" /> {error}
      </p>
    );
  return (
    <div className="px-10 pb-10">
      {/* Search bar and sort button */}
      <div className="flex p-4 items-center justify-between ">
        <SearchBar />
        <div className="flex items-center ">
          {isDarkMode ? (
            <MdDarkMode
              onClick={() => setIsDarkMode(false)}
              className="text-[20px] cursor-pointer mx-4"
            />
          ) : (
            <IoIosSunny
              onClick={() => setIsDarkMode(true)}
              className="text-[25px] cursor-pointer mx-4"
            />
          )}
          <SortDropdown />
        </div>
      </div>
      <div className="container mx-auto p-4 grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
        {currentProducts.map((product: Product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard {...product} />
          </Link>
        ))}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default Home;
