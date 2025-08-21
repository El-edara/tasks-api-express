import jwt from "jsonwebtoken";
import UserModel from "../models/User.js";

export const protect = async (req, res, next) => {
  let token;

  // التحقق من وجود التوكن في الهيدر
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // فك تشفير التوكن
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // جلب بيانات المستخدم بدون الباسورد
      req.user = await UserModel.findById(decoded.id).select("-password");

      next();
    } catch (err) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
};
