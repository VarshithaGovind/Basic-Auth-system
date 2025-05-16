# Basic-Auth-system
Basic-Auth-system implements a secure and simple user authentication system using Node.js, Express, MongoDB, and Mongoose. It supports user registration (sign-up) and login (sign-in) with proper validations, password hashing, and error handling.

setup steps
1.Install Dependencies
npm install
2. Create .env File
Created a .env file in the root directory and add:
MONGO_URI=mongodb://localhost:27017/auth_system
3. Start the Server
node server.js
Server will run on:
http://localhost:5000
API Endpoints
Sign-Up
URL: POST http://localhost:5000/api/auth/signup
Body (JSON):

{
  "name": "Riya",
  "email": "riya@example.com",
  "mobile_number": "9876543210",
  "gender": "female",
  "password": "Test@1234",
  "confirm_password": "Test@1234"
}
Validation Includes:
Password must be at least 8 characters
Must include uppercase, lowercase, number, and special character

Sign-In
URL: POST http://localhost:5000/api/auth/signin
Body (JSON):
{
  "email": "riya@example.com",
  "password": "Test@1234"
}
On success:
Returns a success message and redirects to dashboard.html.
Security Features
Passwords hashed using bcryptjs

Validation for strong password

Duplicate email check

Input error handling

Environment variable for MongoDB URI

Testing the API
Tested the APIs using:

Postman

cURL

curl -X POST http://localhost:5000/api/auth/signup \
-H "Content-Type: application/json" \
-d "{\"name\":\"Riya\",\"email\":\"riya@example.com\",\"mobile_number\":\"9876543210\",\"gender\":\"female\",\"password\":\"Test@1234\",\"confirm_password\":\"Test@1234\"}"
🧾 Sample Test User
Used this test user to test sign-in:

{
  "email": "riya@example.com",
  "password": "Test@1234"
}
dashboard.html (Dummy Page)
