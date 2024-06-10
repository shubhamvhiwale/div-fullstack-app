import axios from "axios";

export const products = {
  productsList: async (data, cb) => {
    try {
      const result = await axios.get("https://fakestoreapi.com/products");
      cb(null, 200, result.data, "Products fetch successful");
    } catch (e) {
      console.log("Something went wrong ", e);
      cb(e, 500, [], "Something went wrong");
    }
  },

  productDetails: async (data, cb) => {
    try {
      const { id } = data;
      const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
      cb(null, 200, result.data, "Products fetch successful");
    } catch (e) {
      console.log("Something went wrong ", e);
      cb(e, 500, [], "Something went wrong");
    }
  },
};
