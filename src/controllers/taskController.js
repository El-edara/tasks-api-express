import TaskModel from "../models/Task.js";

// Get tasks
export const getTasks = async (req, res, next) => {
  try {
    const { search, completed, sort, page = 1, limit = 5 } = req.query;

    // Filter
    let query = { user: req.user._id };
    if (search) query.title = { $regex: search, $options: "i" }; // بحث بالعنوان
    if (completed) query.completed = completed === true; // فلتر حسب الحالة

    // Pagination
    const skip = (page - 1) * limit;

    // Sorting
    let sortOptions = {};
    if (sort === "newest") sortOptions.createdAt = -1;
    if (sort === "oldest") sortOptions.createdAt = 1;
    if (sort === "title") sortOptions.title = 1;

    const tasks = await TaskModel.find(query)
      .sort(sortOptions)
      .skip(skip)
      .limit(+limit);

    const total = await TaskModel.countDocuments(query);

    res.json({
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
      tasks,
    });
  } catch (err) {
    next(err);
  }
};

// Add tasks
export const addTasks = async (req, res, next) => {
  try {
    const { title } = req.body;

    if (!title) {
      res.status(400);
      throw new Error("Title is required");
    }
    const tasks = await TaskModel.create({ title, user: req.user._id });
    res.status(201).json(tasks);
  } catch (err) {
    next(err);
  }
};

// Update task
export const updateTasks = async (req, res, next) => {
  try {
    const tasks = await TaskModel.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true }
    );

    if (!tasks) {
      res.status(404);
      throw new Error("Task not found");
    }

    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

// Delete task
export const deleteTask = async (req, res, next) => {
  try {
    const task = await TaskModel.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!task) {
      res.status(404);
      throw new Error("Task not found");
    }

    res.json({ message: "Task deleted ✅" });
  } catch (err) {
    next(err);
  }
};
