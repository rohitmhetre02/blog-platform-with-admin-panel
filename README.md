
#  Full-Stack Blog Application with Admin Panel

A full-featured blog platform built using the **MERN stack with MVC architecture**. This project allows users to explore categorized blog posts, read in-depth content, and post realistic reviews. The admin panel enables full control over blogs, categories, and users with role-based authentication.

---

##  Live Project

 [Live Site Link](https://full-stack-blog-application-with-admin.onrender.com)

---

##  Key Features

###  User Side
- View blog posts by category (Programming, Web, JavaScript, CSS, Security, etc.)
- Read long-form blog content (50+ lines per post)
- See realistic blog reviews (1–3 lines each)
- Fully responsive UI (mobile, tablet, and desktop)
- Smooth navigation with dynamic routing
- Search and filter functionality

###  Authentication
- JWT-based secure login and registration
- Password hashing using bcrypt
- Role-based access control (user/admin)

###  Admin Panel
- Add, edit, or delete blogs and reviews
- Manage blog categories
- View dashboard stats (posts, users, categories)
- Rich-text editor support for writing detailed content
- Clean, secure admin interface

---

##  Tech Stack

###  Frontend
- EJS (Embedded JavaScript Templates)
- Bootstrap 5 for responsive styling
- Vanilla CSS for custom design
- Client-side form validation

###  Backend

- Node.js + Express.js
- MongoDB Atlas with Mongoose ODM
- JSON Web Token (JWT) for authentication
- Bcrypt.js for password encryption
- **MVC Design Pattern** for clean separation of concerns:
  - **Models** – Data schemas using Mongoose
  - **Controllers** – Business logic and API responses
  - **Routes** – Request routing using Express
  - **Views** – Rendered with EJS templates

---

##  How to Run Locally

### 1. Clone and Install

```bash
git clone https://github.com/your-username/full-stack-blog-app.git
cd full-stack-blog-app
npm install
```

---

### 2. Configure Environment Variables

Create a `.env` file in the root directory and add:

```
PORT=5000
MONGO_URI=your_mongo_connection
JWT_SECRET=your_jwt_secret
```

---

### 3. Start the Server

```bash
npm start
```
