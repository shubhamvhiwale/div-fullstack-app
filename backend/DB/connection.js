import mongoose from "mongoose";

const connectToDatabase = () => {
  mongoose
    .connect(process.env.MOONGODB_CONN_STR + process.env.DB_NAME)
    .then(() => {
      console.log("DB connected successfull!");
    })
    .catch((e) => console.log("DB connection failed! : ", e));
};

export default connectToDatabase;
