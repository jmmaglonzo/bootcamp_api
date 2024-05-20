import Bootcamp from "../models/bootcampModel.js";
import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../middleware/async.js";

export const getAllBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.find();
  res
    .status(200)
    .json({ status: true, results: bootcamp.length, data: bootcamp });
});

export const createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);

  res.status(201).json({ status: true, data: bootcamp });
});

export const getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);

  if (!bootcamp) {
    res.status(500).json({ status: false, message: "Bad request" });
  }

  res.status(201).json({ status: true, data: bootcamp });
});

export const updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!bootcamp) {
    res.status(500).json({ status: false, message: "Bad request" });
  }

  res.status(201).json({ status: true, data: bootcamp });
});

export const deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

  if (!bootcamp) {
    res.status(500).json({ status: false, message: "Bad request" });
  }

  res.status(201).json({ status: true, data: null });
});
