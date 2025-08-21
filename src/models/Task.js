import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minlength: 3, maxlength: 100 },
    completed: { type: Boolean, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    description: { type: String },
  },
  { timestamps: true }
);

const TaskModel = mongoose.model("Task", taskSchema);

export default TaskModel;
