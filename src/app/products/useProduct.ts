"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ProductsList } from "../../services/product";
import { useDispatch } from "react-redux";

const useProducts = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleRouter = (route: string) => {
    router.push(route);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await ProductsList();
      if (result?.response?.length > 0) {
        setProducts(result?.response);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return {
    products: products,
    isLoading: isLoading,
    handleRouter: handleRouter,
  };
};
export default useProducts;
