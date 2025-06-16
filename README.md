# 🚗 Vehicle Parts Inventory System

A full-stack web app to manage vehicle parts with CRUD, filtering, and real-time stock updates.

## 🔧 Tech Stack

**Frontend:** React.js, Axios, CSS  
**Backend:** Node.js, Express.js, MySQL  
**Others:** CORS, dotenv

## ⚙️ Features

- 🔄 Full CRUD operations  
- 🔍 Search & filter by name, type, or status  
- 📦 Real-time stock status  
- 💡 RESTful API with error handling  
- 📱 Responsive design  

## 🛠️ Setup Guide

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd vehicle-parts-inventory
```
### 2. MySQL Setup
```bash
mysql -u root -p < database/schema.sql
```
### 3. Backend Setup
```bash
cd backend
npm install
```
### Create a .env file in the backend folder:

```ini
Copy 
Edit
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=vehicle_parts_inventory
PORT=5000
```
### Start the backend server:

```bash
npm start
```
### 4. Frontend Setup
```bash
cd frontend
npm install
```
### Create a .env file in the frontend folder:

```bash
REACT_APP_API_URL=http://localhost:5000/api
```
### Start the frontend app:

```bash
npm start
```
### 📌 API Endpoints
| Method | Endpoint         | Description    |
| ------ | ---------------- | -------------- |
| GET    | `/api/parts`     | Get all parts  |
| GET    | `/api/parts/:id` | Get part by ID |
| POST   | `/api/parts`     | Create part    |
| PUT    | `/api/parts/:id` | Update part    |
| DELETE | `/api/parts/:id` | Delete part    |


### 📁 Project Structure
```pgsql
vehicle-parts-inventory/
├── backend/
│   └── server.js, routes/, models/
├── frontend/
│   └── src/, components/, App.js
├── database/
│   └── schema.sql
```
### 🧪 Testing
```bash
# Backend test
curl http://localhost:5000/api/health

# Frontend test
npm test
```
### 📄 License
This project is for educational and assessment purposes.
