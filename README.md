# 🌌 Dreamship

Dreamship is a sleek, secure, and extendable authentication system built with FastAPI. It demonstrates modern backend practices with JWT-based authentication, password hashing, and MongoDB integration — all packaged in a clean and modular structure.

---

## 🔧 Features

### ✅ JWT Authentication  
- Secure access token generation using `OAuth2PasswordBearer`.
- Access tokens are created on login and stored on the client side (e.g., `localStorage`).
- Protected routes validate and authorize users via JWT.

### ✅ MongoDB Integration  
- All user data (username, password, email, etc.) is stored in MongoDB.
- MongoDB collection used to persist login credentials and associated information.
- Queries to fetch user profiles securely from the database.

### ✅ Password Hashing  
- User passwords are never stored in plain text.
- Secure hashing using `bcrypt` ensures strong protection of sensitive data.

---

## 🗂️ Tech Stack

| Layer        | Tech           |
|--------------|----------------|
| Backend      | FastAPI        |
| Database     | MongoDB (via `pymongo`) |
| Auth         | JWT (`python-jose`) |
| Hashing      | Bcrypt         |
| Frontend     | HTML/CSS + JS (vanilla) |



