import express from "express";
import { protect } from "../middleware/authMIddleware.js";
import {
  addTasks,
  deleteTask,
  getTasks,
  updateTasks,
} from "../controllers/taskController.js";

const router = express.Router();

// كل ال routes اللي تحت محميه ب jwt
router.use(protect);

router.get("/", getTasks);
router.post("/", addTasks);
router.put("/:id", updateTasks);
router.delete("/:id", deleteTask);

export default router;
