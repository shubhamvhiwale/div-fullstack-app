import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDatabase from "./DB/connection.js";

import userRouter from "./mvc/user/routers.js";
import productsRouter from "./mvc/products/routers.js";

import cookieParser from "cookie-parser";

dotenv.config({ path: ".env" });

const app = express();

app.use(cookieParser());

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 8080;

connectToDatabase();

app.use("/user", userRouter);
app.use("/products", productsRouter);

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
