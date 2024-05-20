import app from "./app.js";
import mongoose from "mongoose";

const PORT = process.env.PORT;
const DB = process.env.URI;

mongoose
  .connect(DB)
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(
        `Server is running on http://localhost:${PORT}/api/bootcamps`
      );
    });
  })
  .catch((err) => console.log(err));
