# INTERACTIVE-QUIZ-APPLICATION  
**Company:** Cootech IT Solutions  
**Name:** Navneet  
**Intern ID:** CT04DH1982  
**Domain:** Back End Development  
**Duration:** 4 Weeks  


---

# 🛠️ Backend Systems Collection

A unified backend architecture developed using **Node.js**, **Express.js**, and **PostgreSQL**, supporting scalable APIs, real-time systems, and secure user authentication.

---

## ✅ Completed Systems

### 📝 Blog Platform Backend

A robust API for creating, managing, and interacting with blog posts.

#### 🔑 Features:
- User registration & login (JWT-based)
- Secure password hashing using `bcrypt`
- Blog creation and listing
- Commenting system
- Sequelize ORM for PostgreSQL

#### 🧰 Technologies Used:
- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- JWT
- bcryptjs

#### 📡 API Endpoints:

| Route                | Method | Description                    |
|----------------------|--------|--------------------------------|
| `/api/auth/register` | POST   | Register a new user            |
| `/api/auth/login`    | POST   | Login and get JWT token        |
| `/api/blogs`         | GET    | Get all blogs                  |
| `/api/blogs`         | POST   | Create blog (auth required)    |
| `/api/comments/:id`  | GET    | Get comments for blog          |
| `/api/comments`      | POST   | Post a comment (auth required) |

> ✅ Postman Collection: `blog_platform_postman_collection.json`

---

### 💬 Real-time Chat System

A WebSocket-powered, Node.js-based real-time chat backend supporting multiple chat rooms.

#### 🔑 Features:
- Real-time messaging using **Socket.IO**
- Support for **multiple chat rooms**
- Room-based broadcast and personal messaging
- User join/leave notifications
- Easily extendable to add chat history (DB integration)
- **Single-folder** backend — portable & easy to run

#### 🧰 Technologies Used:
- Node.js
- Express.js
- Socket.IO
- (Optional) JWT-based WebSocket auth

#### 📡 WebSocket Events:

| Event Name     | Payload                              | Description                        |
|----------------|--------------------------------------|------------------------------------|
| `joinRoom`     | `{ username, room }`                 | User joins a specific chat room    |
| `chatMessage`  | `{ username, room, message }`        | Sends message to a specific room   |
| `message`      | `{ user, text }`                     | Broadcasted message to users       |
| `disconnect`   | `None`                               | Logs when a user disconnects       |

#### ▶️ How to Run:

1. Install dependencies:
   ```bash
   npm install


🛍️ E-Commerce Backend
An end-to-end backend to support e-commerce operations including product listing, shopping cart, and order management.

🔑 Features:
Product catalog with filters (category, price, brand)

Add to cart, manage quantity

Checkout flow and order placement

Admin APIs for product management

Ready for Razorpay/Stripe integration

🧰 Technologies Used:
Node.js

Express.js

PostgreSQL (or MongoDB)

JWT Authentication

Razorpay/Stripe (planned)

Sequelize ORM (if SQL used)

📡 Sample API Routes:
Route	Method	Description
/api/products	GET	Browse all products
/api/cart	POST	Add product to user’s cart
/api/checkout	POST	Place order
/api/orders	GET	View order history
/api/products/admin	POST	Admin-only: Add/edit products

📅 Expected Completion: August 4, 2025

🤖 AI-Powered Recommendation Engine
A microservice-based intelligent system that delivers personalized product and content suggestions.

🧠 Use Cases:
Suggest similar or trending products in the e-commerce app

Recommend blogs based on reading history

Personalized content using hybrid filtering

⚙️ Architecture:
Python-based ML models (scikit-learn, TensorFlow)

FastAPI for REST APIs

Served as a microservice consumed by Node.js apps

📡 API Endpoints:
Endpoint	Method	Description
/	GET	Health check / Welcome
/recommend	GET	Get recommendations based on input title
/all-items	GET	Get all available titles in dataset
/health	GET	Check API status
