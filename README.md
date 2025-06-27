# 📝 Full-Stack Blog Application with Admin Panel

A full-stack blog platform built using Node.js, Express, MongoDB, and EJS. Users can browse categorized blog posts, read in-depth content, and view realistic short reviews. An admin panel is included for managing blogs, categories, and users with secure authentication.

---

## 🌍 Live Project

🔗 [Live Site Link](https://full-stack-blog-application-with-admin.onrender.com)

---

## 🌟 Key Features

### 👥 User Side
- View blog posts by category (e.g., Programming, Web, JavaScript, CSS, Security, etc.)
- Read detailed blog content (50+ lines each)
- Realistic blog reviews (1–3 lines each)
- Fully responsive UI (mobile, tablet, and desktop)
- Smooth navigation and dynamic routing
- Search and filter functionality
- 
### 🔐 Authentication
- Secure user login and registration using JWT
- Role-based access (admin/user)
- Password encryption using bcrypt

### 🛠 Admin Panel
- Add, edit, or delete blog posts
- Manage categories and blog reviews
- Dashboard with stats (posts, users, etc.)
- Rich-text editor support for writing long blogs
- User-friendly and secure admin interface

---

## 🛠️ Tech Stack

### 💻 Frontend
- EJS (Embedded JavaScript Templates)
- Bootstrap 5
- Vanilla CSS
- Client-side validation
- Responsive layouts

### 🔧 Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose ODM
- JSON Web Token (JWT)
- Bcrypt.js for password encryption


## 🚀 How to Run Locally

### 1. Clone and Install

```bash
git clone https://github.com/your-username/full-stack-blog-app.git
cd full-stack-blog-app
npm install


##Configure .env

PORT=5000
MONGO_URI=your_mongo_connection
JWT_SECRET=your_jwt_secret


npm start
