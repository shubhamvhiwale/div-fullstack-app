import productServices from "./services.js";

export const productController = {
  ProductsList: (req, res) => {
    productServices.ProductsList(null, (result) => {
      res.status(result?.status).json(result);
    });
  },

  ProductDetails: (req, res) => {
    const id = req.params.id;
    productServices.ProductDetails({ id: id }, (result) => {
      res.status(result?.status).json(result);
    });
  },
};
