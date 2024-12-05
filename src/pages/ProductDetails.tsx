import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = useSelector((state: RootState) =>
    state.products.products.find((p) => p.id === parseInt(id!))
  );

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-[50px] pb-7">Product Details</h1>
      <Card className="flex flex-col xl:flex-row lg:flex-row md:flex-col">
        <CardContent className=" p-5">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-contain"
            />
        </CardContent>

        <div className="w-[700px]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold mt-4">
              {product.title}
            </CardTitle>
            <CardDescription className="text-[18px]">{product.description}</CardDescription>
          </CardHeader>
          <CardFooter>
            <p className="mt-2">
              Rating: {product.rating.rate} / 5 ({product.rating.count} reviews)
            </p>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetailsPage;
