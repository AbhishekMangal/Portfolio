# 3D Portfolio Website - Abhishek Mangal

## Overview

This is a modern, interactive portfolio website for Abhishek Mangal, a B.Tech Computer Science student from NIT Patna (Batch 2026). The application is built as a full-stack web application with a React frontend and Express backend, featuring a dark theme, 3D animations, and responsive design.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and 3D effects
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **API Design**: RESTful API with JSON responses

### Build System
- **Frontend Bundler**: Vite with React plugin
- **Backend Bundler**: esbuild for production builds
- **Development**: tsx for TypeScript execution in development
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer

## Key Components

### Frontend Components
1. **Hero Section**: Animated landing page with 3D background effects
2. **About Section**: Personal introduction with animated skill badges
3. **Projects Section**: Interactive project cards with hover effects
4. **Stats Section**: Competitive programming achievements with animated counters
5. **Contact Section**: Form submission with validation and toast notifications
6. **Navigation**: Smooth scroll navigation with active section highlighting

### Backend Components
1. **Contact API**: Handles form submissions with validation
2. **Storage Layer**: Abstracted storage interface with in-memory implementation
3. **Middleware**: Request logging, JSON parsing, and error handling
4. **Development Tools**: Vite integration for HMR in development

### Database Schema
- **Contacts Table**: Stores contact form submissions with fields for name, email, subject, message, and timestamp
- **Users Table**: Basic user structure (currently unused but prepared for future authentication)

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form in frontend
   - Form data validated using Zod schema on both client and server
   - Data sent to `/api/contact` endpoint via POST request
   - Server validates data and stores in PostgreSQL database
   - Success/error response sent back to client
   - Toast notification displayed to user

2. **Static Content Serving**:
   - React components render portfolio content
   - Animations triggered by scroll events and user interactions
   - CSS custom properties used for consistent theming
   - Responsive design adapts to different screen sizes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL client for Neon Database
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for React
- **@radix-ui/***: Headless UI components for accessibility

### Development Dependencies
- **tsx**: TypeScript execution for development
- **vite**: Fast build tool and dev server
- **tailwindcss**: Utility-first CSS framework
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Database Integration
- **PostgreSQL**: Primary database (configured for Neon Database)
- **Drizzle Kit**: Database migration and schema management
- **connect-pg-simple**: PostgreSQL session store for Express

## Deployment Strategy

### Development
- Frontend: Vite dev server with HMR
- Backend: tsx with auto-restart on file changes
- Database: Neon Database with environment-based connection string
- Assets: Served directly by Vite with import resolution

### Production
- Frontend: Static build output served by Express
- Backend: Compiled JavaScript bundle executed with Node.js
- Database: Production Neon Database instance
- Assets: Optimized and bundled by Vite build process

### Environment Configuration
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment mode (development/production)
- Build process handles different configurations automatically

## Changelog

```
Changelog:
- July 01, 2025: Initial setup
- July 01, 2025: Added clickable links to competitive programming platforms (Codeforces, LeetCode, Codechef, GFG)
- July 01, 2025: Implemented contact form with in-memory storage for message submissions
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```