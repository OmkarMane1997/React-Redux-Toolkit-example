# Redux Toolkit Setup in React

## Overview

Redux Toolkit (RTK) simplifies state management in React applications by reducing boilerplate code and providing built-in features like middleware support.

## Why Redux Toolkit?

- ✅ **Less Code** → Faster setup
- ✅ **Built-in Middleware** → Supports async operations with Redux Thunk
- ✅ **Better Debugging** → Works well with Redux DevTools
- ✅ **Works with Any JavaScript App** → Can be used with React, Angular, Vue, etc.

---

## Installation

To use Redux in your React project, install the necessary dependencies:

```sh
npm install @reduxjs/toolkit react-redux
```

---

## Core Redux Concepts

### **1. Store 🏪**

- Holds the entire state of the application.
- Created using `configureStore()` in Redux Toolkit.

### **2. Reducers 🔄**

- Functions that update the state based on actions.
- Written as pure functions (no side effects).

### **3. useSelector 👀**

- A React Hook to read data from the Redux store.

### **4. useDispatch 🚀**

- A React Hook to send actions to update the Redux store.

---

## Step-by-Step Setup

### **1. Create a Redux Store**

Redux requires a store to manage the global state.

📌 **Create a file:** `store.js`

---

### **2. Create a Redux Slice (State + Reducers)**

A **slice** is a collection of Redux state and reducers in one file.

📌 **Create a file:** `features/counterSlice.js`

---

### **3. Provide Store to React**

To make Redux available throughout your app, wrap your app with `<Provider>` in `index.js`.

📌 **Modify:** `index.js`

---

### **4. Use Redux State & Dispatch in a Component**

Use the `useSelector` hook to get state and `useDispatch` to update it.

📌 **Modify:** `App.js`

---

## **Handling Async Actions (API Calls) Using Thunks**

For API calls, use **`createAsyncThunk`**.

📌 **Modify:** `features/counterSlice.js`

📌 **Modify:** `RandomCounter.js`

---

## **Summary**

✅ **Redux Toolkit simplifies state management**
✅ **Use `useSelector` to read state**
✅ **Use `useDispatch` to send actions**
✅ **Use `createAsyncThunk` for API calls**
✅ **Wrap the app in `<Provider>` to use Redux**

🚀 Now your React app is set up with Redux Toolkit! 🚀
