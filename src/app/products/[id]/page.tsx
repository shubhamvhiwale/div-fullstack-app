"use client";
import React from "react";
import Image from "next/image";
import useProductDetails from "./useProductDetails";

const ProductDetails = () => {
  const { product, isLoading } = useProductDetails();
  console.log("product : ", product);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-white">
      {!isLoading ? (
        <div className="w-[20rem] m-[2px] cursor-pointer">
          <div className="w-[20rem] h-[12rem] relative rounded-lg">
            <Image
              src={product.image}
              layout="fill"
              objectFit="contain"
              alt={product.title}
              className="absolute top-0 left-0 rounded-lg overflow-hidden"
            />
          </div>
          <div className=" p-2">
            <p className="text-xs text-gray-600">{product?.category}</p>
            <p className="text-xs truncate"> {product.title}</p>
            <p className="font-bold">&#8377; {product.price}</p>
            <div className="flex text-xs justify-between mt-2">
              <p>Rating : {product.rating.rate}</p>
              <p>
                <span className="text-red-600">&#x2665;&#xfe0f;</span>&nbsp;
                {product.rating.count}
              </p>
            </div>
            <p className="text-xs mt-2">{product.description}</p>
          </div>
        </div>
      ) : (
        <div>Please wait...</div>
      )}
    </div>
  );
};

export default ProductDetails;
