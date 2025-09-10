# 🎬 BookMyShow Clone

A full-stack **movie ticket booking application** built with the **MERN stack (MongoDB, Express, React, Node.js)**.  
It allows users to browse movies, book tickets, and make payments via Stripe. Admins/partners can manage movies, shows, and bookings.

---

## ✨ Features
- 🔐 **Authentication & Authorization**
  - JWT-based login & signup
  - Protected routes for users, partners, and admin
- 🎥 **Movies Management**
  - Add, update, delete movies (admin/partner)
  - View movie details with description, duration, genre, language, release date & poster
- 🎟️ **Booking System**
  - Select show timings & seats
  - View booking history
- 💳 **Stripe Payments**
  - Secure online payments using Stripe
- 📊 **Role Based Access**
  - **Admin:** Manage users, movies, partners
  - **Partner:** Add shows for their theatres
  - **User:** Book tickets and view bookings
- ⚡ **Loader & Notifications**
  - Redux for global state management
  - Ant Design for UI components
  - Toast messages for success & errors

---

## 🛠️ Tech Stack
### Frontend
- React.js
- Redux Toolkit
- Ant Design (UI Library)
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- JWT Authentication
- Stripe Payment Integration

---

Create a .env file inside server/:
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key

Frontend → http://localhost:3000
Backend → http://localhost:8082
