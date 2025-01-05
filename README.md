# Orbit Wallet SDE Intern Assignment

## Overview

This project consists of two parts:

1. **React Native Application**: A search screen app that displays trending hashtags and top communities with horizontal scrolling, a vertically scrollable screen, and a bottom tab bar.
2. **Node.js Backend**: A RESTful API that interacts with a MongoDB database to handle user and transaction data. The backend supports querying user details, transaction filtering, pagination, and the use of MongoDB's aggregation framework.

## Table of Contents

1. [React Native Application](#react-native-application)
2. [Node.js Backend](#nodejs-backend)
3. [API Documentation](#api-documentation)
4. [Database](#database)
5. [Deployment](#deployment)
6. [Postman Collection](#postman-collection)

---

## React Native Application

### Features

- **Search Screen**:

  - **Trending Hashtags**: Horizontally scrollable list displaying trending hashtags.
  - **Top Communities**: Horizontally scrollable list showing top communities.
  - **Responsive Layout**: The layout adjusts for both iOS and Android devices to ensure a good user experience across different screen sizes.
  - **Vertical Scrolling**: The entire screen is vertically scrollable for better content viewing.

- **Bottom Tab Bar**: Contains the navigation tabs for easy access to different sections of the app.

- **API Call for Random Photos**: The app uses [Picsum API](https://picsum.photos/) to fetch random photos for the UI.

### Structure

The app is structured in a modular way, adhering to the principles of **DRY** and **SOLID** to ensure maintainable and scalable code.

- The trending hashtags and top community sections are dynamic, capable of handling any number of items.
- The app has been tested for responsiveness to ensure it works on both iOS and Android devices.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/thekavikumar/travel-assignment
   cd react-native-assignment
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app on expo:

   ```bash
   npm start expo
   ```

---

## Node.js Backend

The backend provides three main APIs for interacting with user and transaction data stored in a MongoDB database.

### Features

- **API 1: Get User Details by ID**

  - Fetches user details based on their unique ID.

- **API 2: Get Transactions for a User by ID with Filters**
  - Retrieves transactions for a user, with the ability to filter by status, date range, and type.
- **API 3: Get Transactions with User Details and Filters**

  - Retrieves transactions with associated user details, applying filters for status, date range, and type.

- **Pagination**: API 2 and API 3 support pagination to efficiently retrieve large datasets.

- **MongoDB Aggregation**: The backend uses MongoDB's aggregation framework for optimized querying in API 2 and API 3.

### Structure

- **Modular Code**: The backend is structured in a modular way to promote reusability and maintainability.
- **Environment Variables**: Sensitive information like database credentials is stored in a `.env` file.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/thekavikumar/travel-assignment
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the `.env` file for your MongoDB connection and other environment variables.

4. Run the server:

   ```bash
   npm run dev
   ```

5. The backend will be accessible at `http://localhost:5000`.

---

## API Documentation

### API 1: Get User Details by ID

- **Endpoint**: `GET /api/users/:id`
- **Description**: Fetches the user details by their ID.
- **Response**:
  ```json
  {
    "id": "userId",
    "name": "John Doe",
    "phoneNumber": "1234567890"
  }
  ```

### API 2: Get Transactions for a User by ID with Filters

- **Endpoint**: `GET /api/transactions/user/:id`
- **Parameters**:
  - `status`: Filter by transaction status (success/pending/failed).
  - `type`: Filter by transaction type (debit/credit).
  - `from`: Filter transactions starting from a specific date.
  - `to`: Filter transactions ending at a specific date.
- **Response**:
  ```json
  {
    "transactions": [...],
    "pagination": {
      "total": 50,
      "page": 1,
      "limit": 10,
      "totalPages": 5
    }
  }
  ```

### API 3: Get Transactions with User Details and Filters

- **Endpoint**: `GET /api/transactions`
- **Parameters**: Same as API 2 but with the added user details.
- **Response**:
  ```json
  {
    "transactions": [...],
    "pagination": {...}
  }
  ```

---

## Database

- **MongoDB Atlas**: The backend uses MongoDB hosted on MongoDB Atlas.
- **Collections**:
  - **Users**: Stores user data with fields `id`, `name`, and `phoneNumber`.
  - **Transactions**: Stores transaction data with fields `id`, `status`, `type`, `transactionDate`, `amount`, and `userId` (referencing the `Users` collection).

---

## Deployment

### Backend Deployment

- The backend is deployed on [render](https://www.render.com/).
- API URL: [https://travel-assignment-kdi3.onrender.com](https://travel-assignment-kdi3.onrender.com)

---

## Postman Collection

A Postman collection is provided for testing the APIs. You can import the collection using the following link:

- **Postman Collection**: [View the Postman collection](https://orbit-wallet-backend-assignment.postman.co/workspace/Orbit-Wallet-Backend-Assignment~a2540362-7985-4d19-9ced-bf85dac1d992/collection/33039809-8fc06686-3172-4114-b82f-a4f857200c53?action=share&creator=33039809)

---

## Conclusion

This project demonstrates how to build a modular React Native application and a Node.js backend API that interacts with MongoDB. The app provides a visually appealing search screen with dynamic content, and the backend supports various filtering and pagination capabilities for transactions.

---

### Links

- **Backend API**: [https://travel-assignment-kdi3.onrender.com](https://travel-assignment-kdi3.onrender.com)
- **Postman Collection**: [View the Postman collection](https://orbit-wallet-backend-assignment.postman.co/workspace/Orbit-Wallet-Backend-Assignment~a2540362-7985-4d19-9ced-bf85dac1d992/collection/33039809-8fc06686-3172-4114-b82f-a4f857200c53?action=share&creator=33039809)

```

```
