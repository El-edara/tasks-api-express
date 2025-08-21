// Middleware مركزي لمعالجة الاخطاء
const errorHandler = (err, req, res, next) => {
  console.error("🔥 Error", err.stack);

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Something went wrong",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export default errorHandler;
