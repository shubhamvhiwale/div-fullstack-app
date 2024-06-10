import jwt from "jsonwebtoken";
export const authentication = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      var decoded = jwt.verify(
        req.headers.authorization,
        process.env.JWT_PRIVATE_KEY
      );
      if (decoded) {
        next();
      }
    } else {
      res.status(200).json({
        isTokenExp: false,
        isTokenNotProvided: true,
        message: "Token not provided",
      });
    }
  } catch (err) {
    res.status(200).json({
      isTokenExp: true,
      isTokenNotProvided: false,
      message: "token expired",
    });
  }
};
