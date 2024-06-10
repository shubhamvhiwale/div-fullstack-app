"use client";
import React from "react";
import useProducts from "./useProduct";
import Card from "../components/Card";

interface ProductItem {
  title: string;
  rating: { rate: number; count: number };
  price: number;
  count: number;
  category: string;
  image: string;
  id: number;
}
const Products = () => {
  const { products, isLoading, handleRouter } = useProducts();

  return (
    <>
      <div className="w-full min-h-[100vh] flex flex-wrap justify-center items-center">
        {!isLoading ? (
          <>
            {products.map((item: ProductItem) => (
              <Card
                title={item.title}
                rating={item.rating.rate}
                price={item.price}
                count={item.rating.count}
                category={item.category}
                image={item.image}
                id={item.id}
              />
            ))}
          </>
        ) : (
          <div className="w-full flex justify-center items-center">
            <div>Please wait...</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
