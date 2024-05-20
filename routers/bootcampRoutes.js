import express from "express";
import {
  getAllBootcamp,
  createBootcamp,
  getBootcamp,
  updateBootcamp,
  deleteBootcamp,
} from "../controllers/bootcampController.js";

const router = express.Router();

router.route("/").get(getAllBootcamp).post(createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .patch(updateBootcamp)
  .delete(deleteBootcamp);

export default router;
