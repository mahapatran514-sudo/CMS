# 🏥**Clinic Management System - README**⚕️

A mini full-stack Clinic Management System built using Python (backend) and Vanilla JavaScript + Tailwind CSS (frontend).

This project simulates how a real clinic operates digitally by managing:
- Patients
- Doctors & schedules
- Billing & payments

It is designed mainly for learning full-stack web development concepts and is ideal for academic / final-year projects.  

🚀## What This Project Demonstrates

🔹 ### Full-Stack Development Basics

- REST API design using Python
- Frontend–backend communication using HTTP
- Separation of concerns (controllers, services, database)
- Manual routing without frameworks
- SQLite database integration

🎨### Frontend Concepts

- Single Page Application (SPA) architecture
- Dynamic routing without page reload
- Modular JavaScript structure
- Tailwind CSS for responsive UI
- DOM manipulation & event handling
- Component-based UI design:
  - Header
  - Footer
  - Tables
  - Forms
- API consumption using fetch
- UI state handling (edit / view mode)

🧠 ### Backend Concepts
- Python HTTP server using BaseHTTPRequestHandler
- Custom routing system
- API routes vs UI routes
- CRUD operations for:
- Patients
- Doctors
- Bills
- JSON request & response handling
- SQLite database queries
- Error handling & HTTP status codes
- CORS handling for frontend access


🏗️ ## Project Structure
CMS/
│
├── app.py                         # Entry point – starts Python server
├── router.py                      # Routes API + frontend pages
├── test_commands.sh               # curl commands for API testing
├── README.md
├── .gitignore
│
├── controllers/                   # Backend API controllers
│   ├── patients.py
│   ├── doctors.py
│   └── billing.py
│
├── services/                      # Backend business logic
│   ├── patient_service.py
│   ├── doctor_service.py
│   └── billing_service.py
│
├── database/                      # Database layer
│   ├── clinic.db                  # SQLite database
│   ├── connection.py
│   ├── patient_queries.py
│   ├── doctor_queries.py
│   └── billing_queries.py
│
├── core/                          # Core framework utilities
│   ├── middleware.py              # CORS & headers
│   ├── request.py                 # Request parsing
│   ├── response.py                # JSON responses
│   └── status.py                  # HTTP status codes
│
├── frontend/
│   │
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css
│   │   │
│   │   └── js/
│   │       ├── components/        # Reusable UI components
│   │       │   ├── Header.js
│   │       │   ├── Footer.js
│   │       │   ├── Alert.js
│   │       │   ├── PatientForm.js
│   │       │   ├── PatientTable.js
│   │       │   ├── DoctorForm.js
│   │       │   ├── DoctorTable.js
│   │       │   ├── BillingForm.js
│   │       │   └── BillingTable.js
│   │       │
│   │       ├── controllers/       # Page-specific logic
│   │       │   ├── patientController.js
│   │       │   ├── doctorController.js
│   │       │   └── billingController.js
│   │       │
│   │       ├── services/           # API calls
│   │       │   ├── patientService.js
│   │       │   ├── doctorService.js
│   │       │   └── billingService.js
│   │       │
│   │       ├── router/
│   │       │   └── viewRouter.js   # SPA routing logic
│   │       │
│   │       └── utils/
│   │           ├── dom.js
│   │           └── loadComponent.js
│   │
│   ├── pages/                     # SPA pages (HTML views)
│   │   ├── index.html             # SPA shell
│   │   ├── home.html              # Home / Dashboard
│   │   ├── patients.html          # Patient management
│   │   ├── doctors.html           # Doctor management
│   │   ├── billing.html           # Billing & payments
│   │   ├── about.html             # About clinic / project
│   │   ├── contact.html           # Contact details
│   │   └── 404.html               # Not found page
│   │
│   └── env.js                     # Frontend configuration
│
└── __pycache__/                   # Python cache (auto-generated)


🔌 ##How the Application Works (Big Picture)
1️⃣ ###User Opens the App

- Browser loads index.html
- SPA router dynamically loads pages:
- Home
- Patients
- Doctors
- Billing