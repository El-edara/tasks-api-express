# 📝 JWT Tasks API

API بسيط لإدارة المهام (Tasks) باستخدام **Node.js + Express + MongoDB + JWT Authentication**.

---

## 🚀 Features

- تسجيل مستخدم جديد (Register)
- تسجيل الدخول (Login) والحصول على JWT
- CRUD للمهام (إضافة - عرض - تعديل - حذف)
- البحث والفلترة (Search + Filter by completed)
- الترتيب (Sorting by date/title)
- تقسيم النتائج (Pagination)
- Error Handling منظم عبر Middleware

---

## 🛠️ Tech Stack

- **Node.js + Express**
- **MongoDB + Mongoose**
- **JWT Authentication && bcrypt**
- **dotenv** لإدارة المتغيرات البيئية

---

## 📦 Installation

1. كلون المشروع:

   ```bash
   git clone https://github.com/username/jwt-tasks-api.git
   cd jwt-tasks-api
   ```

2. نزّل المكتبات:

   ```bash
   npm install
   ```

3. جهّز ملف `.env`:

   ```
   PORT=5000
   MONGO_URI=your_mongo_connection
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

4. شغل السيرفر:
   ```bash
   npm run dev
   ```

---

## 🔑 API Endpoints

### Auth

- **POST** `/api/auth/register` → تسجيل مستخدم جديد
- **POST** `/api/auth/login` → تسجيل دخول + JWT

### Tasks (محمي بالـ JWT)

- **GET** `/api/tasks` → عرض جميع المهام (مع search + filter + pagination)
- **POST** `/api/tasks` → إضافة مهمة جديدة
- **GET** `/api/tasks/:id` → عرض مهمة واحدة
- **PUT** `/api/tasks/:id` → تحديث مهمة
- **DELETE** `/api/tasks/:id` → حذف مهمة

---

## 🧪 Examples (Thunder Client / Postman)

### Register

```json
POST /api/auth/register
{
  "name": "Mohamed",
  "email": "mohamed@example.com",
  "password": "123456"
}
```

### Login

```json
POST /api/auth/login
{
  "email": "mohamed@example.com",
  "password": "123456"
}
```

الرد هيرجع JWT Token.

### Add Task

```json
POST /api/tasks
Headers: { "Authorization": "Bearer <JWT_TOKEN>" }

{
  "title": "Learn JWT"
}
```

---

## 📌 Notes

- المشروع للتعلّم والتجربة.
- يشتغل على MongoDB Atlas أو أي MongoDB محلي.
- تقدر تنشره بسهولة على Render/Heroku.

---

## 📄 License

MIT © 2025 Mohamed Reda
