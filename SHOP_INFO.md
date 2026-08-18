# Discount Game Shop - Project Documentation

This document contains a comprehensive overview of the "Discount Game" project. It is intended to be a living document that will be updated as more information about the shop and its features is discovered or developed.

## 1. Project Overview

**Project Name:** Discount Game
**Project Path:** `d:\PROJET WEB\Discount game`
**Primary Technology Stack:** React (Frontend only currently)

## 2. Technology Stack (Frontend)

The frontend is a modern web application built with the following technologies:
* **Core:** React 19, React Router DOM v7
* **Build Tool:** Vite v8
* **Styling:** TailwindCSS v4 (integrated with `@tailwindcss/vite`)
* **Icons:** Lucide React
* **Code Quality:** Oxlint

## 3. Architecture & Structure

The frontend code resides in the `frontend/` directory.

### Key Directories
* `src/components/`: Reusable UI elements, grouped by domain.
  * `auth/`: Modals for Authentication (`LoginModal`, `SignupModal`, `ForgotPasswordModal`).
  * `home/`: Sections for the landing page (`HeroCarousel`, `CategoryLinks`, `TrendingDeals`, `Newsletter`, `Reviews`).
  * `layout/`: Global layout components (`TopBar`, `Navbar`, `Footer`, `FloatingDock`).
  * `ui/`: Common/base UI components.
* `src/pages/`: Top-level page components.
  * `Home.jsx`: The main landing page.
  * `ProductDetails.jsx`: The individual product view page.
* `src/contexts/`: React contexts for state management.
  * `AuthContext.jsx`: Manages user authentication state.
* `src/hooks/`: Custom React hooks.
  * `useDarkMode.js`: Handles light/dark mode toggling.

## 4. UI/UX & Design System

The application features a modern, responsive design tailored for a gaming audience.

* **Theme:** Supports both Light and Dark modes.
* **Color Palette:** 
  * Accent/Primary color: `#FF4D5A` (used for selections and likely main action buttons).
  * Backgrounds use `slate` variations with dark mode targeting `#2A3B50`.
* **Background:** The main application wrapper features a fixed gaming-themed background image (via Unsplash) with a glassmorphism effect (backdrop blur and semi-transparent overlay).
* **Navigation:** Features a `TopBar` for auxiliary links/info, a primary `Navbar`, and a `FloatingDock` likely optimized for mobile or quick actions.
* **Modals:** Authentication flows (Login, Signup, Forgot Password) are handled via modals rather than dedicated pages, keeping the user in the context of the shop.

## 5. Routing

The application uses `react-router-dom` for navigation:
* `/` - Maps to the `Home` component.
* `/product/:id` - Maps to the `ProductDetails` component, indicating a dynamic routing system for individual games/products.

## 6. Current State & Pending Features

* The project currently consists mainly of the frontend structure.
* Core UI components for the homepage (Carousel, Trending Deals, Reviews, Newsletter) are present.
* The authentication UI is built, with state managed by `AuthContext`.
* Responsive design elements are actively being implemented (e.g., Floating Dock, Modals).

---
*Note: This file will be continuously updated as new features, backend integrations, or changes are added to the project.*
