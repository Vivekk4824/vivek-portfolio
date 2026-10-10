# Vivek Patil – Portfolio Website

A DSA/developer-themed personal portfolio with a React frontend and Node.js + Express backend.

## Tech Stack
- **Frontend**: React (Vite), CSS Variables, JetBrains Mono + Inter
- **Backend**: Node.js, Express, Multer (for resume uploads)
- **Theme**: Dark terminal/code aesthetic with blue accent

## Project Structure
```
vivek-portfolio/
├── client/          # React (Vite) frontend (includes React Router SPA routing)
├── server/          # Express backend (serves portfolio data, LeetCode stats, resume upload/download)
└── README.md
```

## Setup & Local Development

### 1. Required Environment Variables
You need to set up environment variables for both the frontend and backend. Example files are provided.

**Backend (`server/.env`):**
Create a `.env` file in the `server` directory based on `.env.example`:
```env
PORT=5000
ADMIN_KEY=your_secure_admin_key_here
```
*(The `ADMIN_KEY` is required to authenticate resume uploads.)*

**Frontend (`client/.env`):**
Create a `.env` file in the `client` directory based on `.env.example`:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### 2. Running Locally
Open two terminal windows:

**Terminal 1 (Backend):**
```bash
cd server
npm install
npm run dev
```
Backend runs on `http://localhost:5000`

**Terminal 2 (Frontend):**
```bash
cd client
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`

## Features & Routing

- **Public Portfolio**: Accessible at `/`. Shows data fetched from the backend.
- **Admin Resume Upload**: Accessible at `/admin/resume`. This page allows authorized users to upload a new resume PDF (max 5MB).
- **Authentication**: The resume upload endpoint (`POST /api/resume/upload`) requires the `x-admin-key` header to match the `ADMIN_KEY` backend environment variable. The frontend does not hardcode this secret; it is entered dynamically on the admin page.

## Deployment Instructions

This repository is structured for full-stack deployment:

### Frontend (Vercel)
- **Root Directory**: `client/`
- **Build Command**: `npm run build`
- **Install Command**: `npm install`
- **Environment Variables**: Set `VITE_API_BASE_URL` to your deployed backend URL (e.g., `https://your-backend.onrender.com/api`).
- **SPA Routing**: A `vercel.json` file is included in `client/` to handle React Router navigation seamlessly.

### Backend (Render, Railway, Heroku)
- **Root Directory**: `server/`
- **Start Command**: `npm start`
- **Environment Variables**: 
  - `PORT`: Automatically provided by the platform (Express is configured to use it).
  - `ADMIN_KEY`: Set your secure admin key for the resume upload endpoint.
- **CORS**: The backend is configured to accept requests from `http://localhost:5173` and `https://portfolio.vivekkpatil.me`. Update `allowedOrigins` in `server/server.js` if your frontend URL changes.

### ⚠️ Important Deployment Limitations: Resume Storage
Currently, the backend uses `multer.diskStorage` to save uploaded resumes directly to the local filesystem (`server/uploads/resume.pdf`). 
**On ephemeral or serverless hosting platforms (like Render's free tier, Vercel, or Heroku), the local filesystem is reset whenever the server restarts or redeploys.**
- **Impact**: Any uploaded resume will disappear upon server restart, reverting to 404 Not Found until uploaded again.
- **Solution**: To make uploaded resumes persist in production, you must transition to a cloud storage service like AWS S3, Cloudinary, or Firebase Storage. You can update `server/middleware/uploadMiddleware.js` to upload directly to cloud storage instead of the local disk.

## Customisation
All portfolio data lives in `server/server.js` under `portfolioData`. Edit fields there to update the site content.
