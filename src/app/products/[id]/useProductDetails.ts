"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { ProductDetails } from "../../../services/product";

const initValues = {
  category: "",
  image: "",
  description: "",
  id: 0,
  price: 0,
  rating: { rate: 0, count: 0 },
  title: "",
};
const useProducts = () => {
  const [product, setProduct] = useState(initValues);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const id = pathname.split("/")[2];
      const result = await ProductDetails(id);
      console.log("result : ", result);

      if (result?.response) {
        setProduct(result?.response);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [pathname]);

  return {
    product: product,
    isLoading: isLoading,
  };
};
export default useProducts;
