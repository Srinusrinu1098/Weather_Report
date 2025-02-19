COMPANY: CODTECH IT SOLUTIONS 
NAME: T Srinivasulu
INTERN ID: CT08STC 
DOMAIN: REACT WEB DEVELOPMENT 
DURATION: 4 WEEEKS 
MENTOR: NEELA SANTOSH 

# Weather Dashboard

## Introduction
This project is a **weather dashboard** that allows users to **search for real-time weather reports** for any location. It features a **user authentication system using Google OAuth2**, an **interactive animated map that redirects to Google Maps**, and a **modern UI built with Vite.js, React, Tailwind CSS, and ShadCN**.

## Tech Stack Used

- **Vite.js**: Chosen for its **fast development server** and **instant hot module replacement (HMR)**, ensuring a smooth development experience.
- **React.js**: Used for a **dynamic, component-based UI** that efficiently renders weather data and manages state.
- **Tailwind CSS**: Provides a **utility-first approach** for quick styling, making the dashboard fully responsive.
- **ShadCN**: Used for **pre-built, accessible UI components** like buttons, modals, and the logout confirmation popup.
- **LottieFiles**: Integrated to add **smooth animations**, such as loading indicators and the **animated map**.
- **Google OAuth2 Authentication**: Enables **secure login with Google**, storing user details in **localStorage**.
- **Google Maps API**: Implements an **interactive animated map**, allowing users to click and be redirected to **Google Maps** for the exact location searched.

## Features Implemented

### 1. Weather Search Functionality
- Users can enter a city or location, and the dashboard fetches **real-time weather data**.
- Displays **temperature, humidity, wind speed, and other key weather details**.
- If the location is invalid, an **error message** is displayed.

### 2. User Authentication (Google OAuth2)
- Users can **log in using their Google account**.
- After login, user details (**name, email, profile picture**) are retrieved and stored in **localStorage**.

### 3. Logout Function with Confirmation Popup
- When users click "Logout," a **confirmation popup appears** asking, "Are you sure you want to logout?"
- If confirmed, localStorage is cleared, and the user is redirected to the **login screen**.

### 4. Interactive Animated Map with Google Maps Redirection
- A **dynamic, animated map** (integrated with LottieFiles) is displayed on the dashboard.
- When users **click on the map**, they are redirected to **Google Maps** with the **exact location searched**.

### 5. Responsive UI with Tailwind & ShadCN
- The entire dashboard is **fully responsive**, ensuring smooth performance on **mobile, tablet, and desktop**.

## Challenges & Solutions

### Managing Authentication State
**Problem**: Users needed to stay logged in even after refreshing the page.
**Solution**: Stored **user login details in localStorage** for session persistence.

### Implementing Clickable Animated Map with Google Maps
**Problem**: Redirecting users to Google Maps dynamically based on search results.
**Solution**:
- Used **LottieFiles** for an **animated map UI**.
- Added an **LINK from router** that dynamically generates a **Google Maps URL** based on the searched location’s coordinates.

## Future Improvements
- **Save favorite locations** for quick access.
- **Implement dark mode** for better readability.
- **Enhance weather reports** with **hourly forecasts**.

## Conclusion
This **weather dashboard** successfully combines **real-time weather search, user authentication, and an interactive map feature**. By leveraging modern technologies such as **Vite.js, React, Tailwind CSS, ShadCN, and Google OAuth2**, the project ensures **speed, scalability, and security**.

🚀 **This project delivers a seamless user experience for checking weather conditions and navigating locations with ease!**


                                                                 WEATER DASHBOARD OUTLOOK

![25b73993-b071-4762-aeff-42d346b24eac](https://github.com/user-attachments/assets/a9ceda63-4ad3-4dc0-9077-2fa48cfadf5e)

