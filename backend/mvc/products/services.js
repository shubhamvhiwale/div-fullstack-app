import { products } from "../../doa/product.js";
import hash from "../../utils/hash.js";

const productServices = () => {
  const ProductsList = async (data, cb) => {
    products.productsList(data, (error, status, response, message) => {
      cb({ error, status, response, message });
    });
  };

  const ProductDetails = async (data, cb) => {
    products.productDetails(data, (error, status, response, message) => {
      cb({ error, status, response, message });
    });
  };

  return {
    ProductsList,
    ProductDetails,
  };
};

export default productServices();
