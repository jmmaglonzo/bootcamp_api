import ErrorResponse from "../utils/errorResponse.js";

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = error.message;
  // Log to console for dev
  console.log(err.code);

  //   CAST ERROR FOR ID
  if (err.name === "CastError") {
    const message = `Resource not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  //   DUPLICATE KEY
  if (err.code === 11000) {
    const message = "Duplicate field value entered";
    error = new ErrorResponse(message, 400);
  }

  //   VALIDATION ERROR
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new Error(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

export default errorHandler;
