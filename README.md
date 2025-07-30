# Doctor Appointment Booking App

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

A full-stack web application designed to streamline the process of booking and managing doctor appointments. This platform serves three main roles: users, doctors, and administrators, each with a dedicated interface and functionalities.

---

## 🚀 Live Demo

-   **Frontend (User):** `https://doctorapp-frontend-yw57.onrender.com`
-   **Backend Server:** `https://doctorapp-backend-tl4s.onrender.com`
-   **Admin Panel (Admin and Docter):** `https://doctorapp-admin-de9d.onrender.com`

-   To test the site as admin use:
-   admin email: admin@prescripto.com
-   admin password: qwerty123

---

## ✨ Features

### User 🧑‍⚕️
-   Browse doctors and view their profiles and availability.
-   Book appointments with available doctors.
-   Pay for appointments securely online using **Razorpay**.
-   View and manage their own upcoming and past appointments.
-   Edit their personal profile, including a profile picture managed via **Cloudinary**.

### Doctor 👨‍⚕️
-   Log in to a dedicated doctor dashboard.
-   View and manage all appointments booked with them.
-   Update appointment statuses (e.g., mark as complete, cancel).
-   Edit their professional profile and availability status.

### Admin ⚙️
-   Access a comprehensive admin dashboard.
-   **Add new doctors** to the platform.
-   View a complete list of all doctors registered in the system.
-   Oversee all appointments made across the platform.

---

## 🛠️ Tech Stack

-   **Frontend:** React, Tailwind CSS, Axios, React Router
-   **Backend:** Node.js, Express.js
-   **Database:** MongoDB with Mongoose
-   **Authentication:** JSON Web Tokens (JWT)
-   **Image Management:** Cloudinary API
-   **Online Payments:** Razorpay API

---

## ⚙️ Setup and Installation

To run this project locally, follow these steps:

### Prerequisites
-   Node.js and npm installed
-   MongoDB installed and running locally, or a MongoDB Atlas connection string

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Backend Setup:**
    ```sh
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` directory and add the environment variables listed below.
    ```sh
    npm start
    ```
    The backend server will start on the port defined in your `.env` file.

3.  **Frontend Setup:**
    ```sh
    cd frontend
    npm install
    ```
    Create a `.env` file in the `frontend` directory and add your backend URL.
    ```sh
    npm run dev
    ```
    The React development server will start, usually on `http://localhost:5173`.

---

## 🔑 Environment Variables

You will need to create a `.env` file in the `backend` directory and add the following variables.
