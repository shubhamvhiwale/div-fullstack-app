import { user } from "../modules/userSchema.js";
import hash from "../utils/hash.js";
import token from "../utils/token.js";

export const users = {
  userRegister: async (data, cb) => {
    try {
      const resp = await new user(data);
      if (resp) {
        const save_user = await resp.save();
        if (save_user) {
          cb(null, 200, resp, "User added successfully");
        } else {
          cb(save_user, 400, [], "User added failed");
        }
      }
    } catch (e) {
      console.log("Something went wrong ", e);
      cb(e, 500, [], "Something went wrong");
    }
  },

  userLogin: async (data, cb) => {
    try {
      const result = await user.findOne({ username: data.username });
      if (result) {
        const compairHashPassword = await hash.compair(
          data.password,
          result.password
        );
        if (compairHashPassword) {
          const generatedToken = await token.create(JSON.stringify(result));
          cb(
            null,
            200,
            { ...result, token: generatedToken },
            "User login successfully"
          );
        } else {
          cb([], 403, [], "Invalid credentials");
        }
      } else {
        cb(result, 403, [], "Invalid credentials");
      }
    } catch (e) {
      console.log("Something went wrong ", e);
      cb(e, 500, [], "Something went wrong");
    }
  },
};
