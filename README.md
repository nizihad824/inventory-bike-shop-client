# My React App
## Live Demo

Experience the application in action by visiting the live demo: [https://bike-inventory-dca20.web.app/](https://bike-inventory-dca20.web.app/)

Welcome to my React app, a full-stack web application designed to provide a seamless user experience by leveraging the power of multiple modern technologies. In this README, you'll find an overview of the technologies used and a brief description of the application's purpose.



## Application Overview

This application was built with the goal of creating an engaging and dynamic user experience. It features a user-friendly interface and robust back-end services to handle various tasks. The application is comprised of the following technologies:

- **React**: A popular JavaScript library for building user interfaces.
- **Firebase**: A Backend-as-a-Service (BaaS) platform for user authentication and data storage.
- **React Router**: A library for managing navigation and routing in React applications.
- **Node.js**: A JavaScript runtime for server-side development.
- **MongoDB**: A NoSQL database for handling large volumes of data.
- **Express**: A minimal and flexible Node.js web application framework for building APIs.
- **Three.js**: A JavaScript library for creating and displaying animated 3D computer graphics.

## Features

### Firebase Authentication

The application has implemented Firebase Authentication, which allows users to sign up and log in using the following methods:

- **Google Sign-In**: Users can authenticate using their Google account.
- **Email and Password**: Users can create an account and authenticate using their email address and a password.

Firebase Authentication provides a secure and easy-to-use system for managing user accounts and ensuring that only authenticated users can access protected resources.

### MongoDB CRUD Operations

This application uses MongoDB as its primary database for storing and managing data. It has implemented full CRUD (Create, Read, Update, Delete) operations, allowing users to:

- Create new records.
- Retrieve existing records.
- Update records with new information.
- Delete records when they are no longer needed.

The use of MongoDB provides high performance, scalability, and flexibility, making it an ideal choice for this application's data storage needs.


## Purpose

The purpose of this application is to showcase the possibilities that arise when combining multiple technologies to create a unique user experience. With this app, users can navigate through different views, authenticate, store and retrieve data from a real-time database, and interact with 3D graphics.

As a full-stack application, it demonstrates the power of using a single programming language, JavaScript, for both front-end and back-end development. 

## Component Structure

Below is the component hierarchy used in this project:

├── src
│   ├── authentication
│   ├── components
│   │   └── assets
│   ├── pages
│   │   └── Home
│   │   └── Bikes
│   │   └── BikeDetails
│   │   └── SingleBike
│   │   └── ManageItems
│   │   └── AddItems
│   │   └── MyOrders
│   │   └── CustomerReview
│   │   └── ContactUs
│   │   └── Login
│   │   └── SignUp
│   ├── Shared
│   │   └── Navbar
│   │   └── Footer
│   ├── firebaseConfig
│   └── Layout
│   └── Routes
│   └── Layout
│   └── utilities

