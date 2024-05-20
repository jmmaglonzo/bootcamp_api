import express from "express";
import morgan from "morgan";
import bootcampRouter from "./routers/bootcampRoutes.js";
import defaultRoute from "./middleware/defaultRoute.js";
import errorHandler from "./middleware/error.js";
const app = express();

// MIDDLEWARE and ROUTER
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api/bootcamps", bootcampRouter);
app.all("*", defaultRoute);
app.use(errorHandler);

export default app;
