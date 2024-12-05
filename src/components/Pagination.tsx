import React from 'react';

interface PaginationProps {
  productsPerPage: number;
  totalProducts: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ productsPerPage, totalProducts, currentPage, paginate }) => {
    // keep track of available pages
  const pageNumbers = [];
    // calculate total pages
  const totalPages = Math.ceil(totalProducts / productsPerPage);

//   append all pages to the page numbers array
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <footer className="flex justify-center mt-4">
        {/* list of page numbers */}
      <ul className="flex space-x-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            {/* button to change the page number */}
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-1 border rounded ${number === currentPage ? 'bg-black text-white' : 'bg-white text-black'}`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Pagination;
