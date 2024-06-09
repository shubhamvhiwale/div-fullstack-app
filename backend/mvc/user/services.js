import { users } from "../../doa/user.js";
import hash from "../../utils/hash.js";

const userServices = () => {
  const UserRegister = async (data, cb) => {
    const hashedPassed = await hash.generate(data.password);
    users.userRegister(
      { ...data, password: hashedPassed },
      (error, status, response, message) => {
        cb({ error, status, response, message });
      }
    );
  };

  const UserLogin = async (data, cb) => {
    users.userLogin(data, (error, status, response, message) => {
      cb({ error, status, response, message });
    });
  };

  return {
    UserRegister,
    UserLogin,
  };
};

export default userServices();
