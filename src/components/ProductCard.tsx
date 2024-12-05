import React from "react";
import { Product } from "../types/productTypes";
// import ReactStars from "react-rating-stars-component";

const ProductCard: React.FC<Product> = ({ title, price, image, rating }) => (
  // card
  <div className="p-4 border rounded shadow h-[390px] flex flex-col justify-between">
    <div className="">
      <img src={image} alt={title} className="w-full h-40 object-contain pb-4" />
      <h2 className="mt-2 text-lg font-semibold">{title}</h2>
      <p className="font-semibold">${price.toFixed(2)}</p>
    </div>
    <p className="self-center">
      Rating: {rating.rate} / 5 ({rating.count} reviews)
    </p>
  </div>
);

export default ProductCard;
