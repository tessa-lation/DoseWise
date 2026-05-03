# DoseWise Medication Safety Assistant

DoseWise is a full stack web application that helps users manage their medications, track allergy information, review possible medication safety concerns, and organize medication related details in one dashboard. The application supports user accounts, saved medications, allergy warnings, interaction review, medication schedules, profile management, favorite pharmacy search, and side-by-side medication comparison.

## Tech Stack

- **Frontend:** 
  - React
  - Javascript
  - Bootstrap
  - CSS
- **Backend:** 
  - Flask
  - JWT Authentication
- **Database:** SQLite
- **Languages:** JavaScript, Python
- **Additional Services:** 
  - Node.js / Express comparison API
  - OpenFDA label data integration
- **External APIs / Data Sources:**
  - RxNorm / RxNav API for medication lookup
  - OpenFDA label data for medication label and interaction text
  - Pharmacy search API / Google Places API

## Project Structure

```text
medication-safety-assistant/
├── backend/
│   ├── app/
│   ├── compare_api/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   └── server.js
│   ├── known_allergies.py
│   ├── medications.db
│   ├── requirements.txt
│   └── run.py
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   ├── robots.txt
│   │   └── app icons / favicon files
│   ├── src/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── dosewise-logo.svg
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
├── identifier.sqlite
├── main.py
└── README.md
```

## Backend Setup Instructions
- cd to backend
- pip install -r requirements.txt
- python run.py
-- to run the Flask backend at http://127.0.0.1:5000
- Can test the backend health route here: http://127.0.0.1:5000/api/health

## Frontend Setup Instructions
- cd to frontend
- npm install
- npm start (this starts the react frontend which should run at http://localhost:3000)

## Compare API Setup Instructions
- cd to compare_api
- npm install
- node server.js to start the comparison service locally at http://localhost:5001/api

## Compare API Setup Instructions
The database stores:

  -  Users
  -  User profiles 
  - Saved medications 
  - Medication schedules

The local database file is created and used by the Flask backend.

## Basic User Instructions
1. Open the DoseWise web application.
2. Create an account using a valid name, email, and password.
3. Log in to access the medication dashboard.
4. Use the medication search field to search for a medication.
5. Click “Add” to save a medication to the dashboard.
6. Review any allergy or interaction warnings displayed by the application.
7. Add dosage, notes, or schedule information to saved medications.
8. Open the profile page to update allergies, conditions, notes, and favorite pharmacy.
9. Use the medication comparison section to compare two medications side by side.
10. Log out when finished.

## Deployment
The application is deployed using Railway.
Deployed frontend:
-     https://medication-safety-assistant-production.up.railway.app/
- Backend and comparison API deployment URLs should be configured through the appropriate environment variables in Railway.