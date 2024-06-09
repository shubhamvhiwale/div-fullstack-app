import userServices from "./services.js";

export const usersController = {
  UserRegister: (req, res) => {
    const data = req.body;
    userServices.UserRegister(data, (result) => {
      res.status(result?.status).json(result);
    });
  },

  UserLogin: (req, res) => {
    const data = req.body;
    userServices.UserLogin(data, (result) => {
      res.cookie("jwttoken", result.response.token, {
        httpOnly: true,
      });
      res.status(result?.status).json(result);
    });
  },
};
