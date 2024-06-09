import jwtoken from "jsonwebtoken";

const token = () => {
  const create = (data) => {
    var token = jwtoken.sign(JSON.parse(data), process.env.JWT_PRIVATE_KEY, {
      expiresIn: "5m",
    });
    return token;
  };

  const verify = (token) => {
    var decoded = jwtoken.verify(token, process.env.JWT_PRIVATE_KEY);
    return decoded;
  };

  return {
    create,
    verify,
  };
};

export default token();
