import bcrypt from "bcrypt";
const saltRounds = 10;

export const hash = () => {
  const generate = (value) => {
    return bcrypt.hash(value, saltRounds).then(function (hash) {
      return hash;
    });
  };
  const compair = (value, hashValue) => {
    return bcrypt.compare(value, hashValue).then(function (result) {
      return result;
    });
  };

  return {
    generate,
    compair,
  };
};

export default hash();
