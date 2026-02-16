# Fullstack Product Management App  
Spring Boot Backend + React Frontend<br>
<br>
This project is a simple full‑stack application for managing products.  
It includes:<br>
<br>
- A **Spring Boot backend** with REST APIs<br>
- A **React + Vite frontend**<br>
- **Basic Authentication**<br>
- **CRUD operations** (Create, Read, Update, Delete)<br>
- **Validation with custom error handling**<br>
- **Dynamic rendering** on the frontend<br>
- **Axios-based API communication**<br>
<br>
---<br>
<br>
## Features
<br>
### Authentication
The backend uses **Basic Auth** via Spring Security.<br>  
All `/api/products/**` endpoints require authentication.<br>
<br>
Default credentials (in-memory):<br>
username: user<br>
password: password<br>
<br>
The frontend automatically sends these credentials using Axios.<br>
<br>
---<br>
<br>
### Product Management
The app supports:<br>
<br>
- Create product<br>
- Edit product<br>
- Delete product<br>
- List all products<br>
<br>
Each product has:<br>
<br>
- `name` (string)<br>
- `price` (number, must be >= 0)<br>
- `stock` (number, must be >= 0)<br>
<br>
---<br>
<br>
### Validation
The backend validates incoming data using annotations<br>
<br>
# To run backend:
- cd backend<br>
- mvn clean install<br>
- mvn spring-boot:run<br>
<br>
# To run frontend:
- cd frontend<br>
- npm install<br>
- npm run dev<br>
<br>
# To access on the browser:
http://localhost:5173<br>
