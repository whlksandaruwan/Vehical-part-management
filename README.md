Vehicle Parts Inventory System

A full-stack web application for managing vehicle parts inventory with CRUD operations, search functionality, and filtering capabilities.
🚀 Features

Complete CRUD Operations: Add, view, edit, and delete vehicle parts
Advanced Search & Filtering: Search by name, filter by part type and availability status
Real-time Stock Management: Automatic status updates based on quantity
Responsive Design: Works seamlessly on desktop and mobile devices
RESTful API: Well-structured backend API with proper error handling
Modern UI: Clean and intuitive user interface

🛠️ Technology Stack
Frontend

React.js - User interface library
Axios - HTTP client for API calls
CSS3 - Styling and responsive design

Backend

Node.js - JavaScript runtime
Express.js - Web application framework
MySQL - Relational database
CORS - Cross-origin resource sharing

📋 Prerequisites
Before running this application, make sure you have the following installed:

Node.js (v14 or higher)
MySQL (v8.0 or higher)
Git

🔧 Installation & Setup
1. Clone the Repository
bashgit clone <your-repository-url>
cd vehicle-parts-inventory
2. Database Setup
bash# Login to MySQL
mysql -u root -p

# Create database and tables
mysql -u root -p < database/schema.sql

# Or manually create:
# CREATE DATABASE vehicle_parts_inventory;
# USE vehicle_parts_inventory;
# (Then run the SQL commands from schema.sql)
3. Backend Setup
bash# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Configure environment variables
# Edit backend/.env file with your database credentials:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=vehicle_parts_inventory
PORT=5000
NODE_ENV=development

# Start the backend server
npm run dev
# or
npm start
4. Frontend Setup
bash# Navigate to frontend directory (in a new terminal)
cd frontend

# Install dependencies
npm install

# Configure environment variables
# Edit frontend/.env file:
REACT_APP_API_URL=http://localhost:5000/api

# Start the frontend application
npm start
🌐 Application URLs

Frontend: http://localhost:3000
Backend API: http://localhost:5000/api
API Health Check: http://localhost:5000/api/health

📊 Database Schema
Parts Table
FieldTypeDescriptionidINT (Primary Key, Auto Increment)Unique identifiernameVARCHAR(255)Part namepart_typeENUMType of part (Battery, Tire, Oil Filter, etc.)brandVARCHAR(255)Brand namequantity_in_stockINTAvailable quantitypriceDECIMAL(10,2)Price in LKRstatusENUMIn Stock / Out of Stockcreated_atTIMESTAMPCreation timestampupdated_atTIMESTAMPLast update timestamp
🔌 API Endpoints
MethodEndpointDescriptionGET/api/partsGet all parts (with optional filters)GET/api/parts/:idGet specific part by IDPOST/api/partsCreate new partPUT/api/parts/:idUpdate existing partDELETE/api/parts/:idDelete part
API Query Parameters

search: Filter parts by name
partType: Filter by part type
status: Filter by availability status

Example API Calls
bash# Get all parts
curl http://localhost:5000/api/parts

# Search parts
curl "http://localhost:5000/api/parts?search=battery"

# Filter by type
curl "http://localhost:5000/api/parts?partType=Battery"

# Create new part
curl -X POST http://localhost:5000/api/parts \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Part","part_type":"Battery","brand":"Test Brand","quantity_in_stock":10,"price":1000}'
📱 Usage
Adding Parts

Click "Add New Part" button
Fill in the part details:

Part Name (e.g., "Amaron Battery 12V")
Part Type (select from dropdown)
Brand
Quantity in Stock
Price


Click "Add Part" to save

Searching & Filtering

Use the search bar to find parts by name
Use dropdown filters to filter by part type or availability status
Filters can be combined for more specific results

Editing Parts

Click "Edit" button next to any part
Modify the details in the form
Click "Update Part" to save changes

Deleting Parts

Click "Delete" button next to any part
Confirm deletion in the popup dialog

🗂️ Project Structure
vehicle-parts-inventory/
├── backend/
│   ├── config/
│   │   └── database.js          # Database configuration
│   ├── models/
│   │   └── Part.js              # Part data model
│   ├── routes/
│   │   └── parts.js             # API routes
│   ├── server.js                # Main server file
│   ├── package.json
│   └── .env                     # Environment variables
├── frontend/
│   ├── public/
│   │   └── index.html           # HTML template
│   ├── src/
│   │   ├── components/
│   │   │   ├── PartList.js      # Parts listing component
│   │   │   ├── PartForm.js      # Add/Edit form component
│   │   │   └── SearchFilter.js  # Search and filter component
│   │   ├── services/
│   │   │   └── api.js           # API service functions
│   │   ├── App.js               # Main app component
│   │   ├── App.css              # Styles
│   │   └── index.js             # React entry point
│   ├── package.json
│   └── .env                     # Environment variables
├── database/
│   └── schema.sql               # Database schema
└── README.md                    # This file
🧪 Testing
Backend Testing
bash# Test API endpoints
curl http://localhost:5000/api/health
curl http://localhost:5000/api/parts

# Check database connection
npm run test
Frontend Testing
bash# Run React tests
cd frontend
npm test
🚀 Deployment
Development
bash# Start both servers simultaneously
# Backend (Terminal 1)
cd backend && npm run dev

# Frontend (Terminal 2)  
cd frontend && npm start
Production
Backend
bashcd backend
npm start
Frontend
bashcd frontend
npm run build
# Serve the build folder with a web server
🔧 Configuration
Environment Variables
Backend (.env)
envDB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=vehicle_parts_inventory
PORT=5000
NODE_ENV=development
Frontend (.env)
envREACT_APP_API_URL=http://localhost:5000/api
🐛 Troubleshooting
Common Issues

Database Connection Error

Check MySQL service is running
Verify database credentials in backend/.env
Ensure database exists


Port Already in Use

Change PORT in backend/.env
Kill existing processes: pkill -f node


CORS Errors

Ensure CORS is enabled in backend
Check API URL in frontend/.env


Module Not Found

Run npm install in respective directories
Clear node_modules and reinstall: rm -rf node_modules && npm install



Development Tips

Use browser dev tools to debug frontend issues
Check backend console for API errors
Monitor database with MySQL Workbench or command line

📞 Support
For any issues or questions:

Check the troubleshooting section above
Review the API documentation
Contact: it@autostream.lk

🤝 Contributing

Fork the repository
Create a feature branch
Make your changes
Test thoroughly
Submit a pull request

📄 License
This project is developed for educational purposes as part of a practical assessment.
📚 Additional Resources

React Documentation
Express.js Guide
MySQL Documentation
Node.js Documentation


Vehicle Parts Inventory System - Built with ❤️ for efficient inventory management
