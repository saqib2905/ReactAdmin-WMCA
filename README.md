# ReactAdmin-WMCA
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

# 📚 Books Admin Panel

A lightweight admin panel for managing books and authors, built with **React Admin** and **TypeScript**, powered by a mock API using `json-server`.

---

## 🚀 Features

- Books List with:
  - Sorting
  - Filtering by title & author
  - Pagination
  - Delete functionality
-  Edit Book:
  - Title (text)
  - Author (reference dropdown)
  - Published year (number)
- Reusable `AuthorReferenceInput` component
- Authors List (read-only)

---

## Tech Stack

- React Admin v5
- TypeScript
- json-server (mock API)
- Custom pagination headers via middleware

---

## 🔧 Setup Instructions

1. Install dependencies:
npm install

2. Start the mock API server:

node server.js

3. Start the frontend app:
npm start
