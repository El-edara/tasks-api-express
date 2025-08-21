import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import taskRouter from "./routes/taskRouter.js";
import authRouter from "./routes/authRouter.js";
import errorHandler from "./middleware/errorMiddleware.js";

connectDB();

const app = express();
app.use(express.json());

// Routes
app.use("/api/tasks", taskRouter);
app.use("/api/auth", authRouter);

// Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
