# Vivek Patil – Portfolio Website

A DSA/developer-themed personal portfolio with a React frontend and Node.js + Express backend.

## Tech Stack
- **Frontend**: React 18 (Vite), CSS Variables, JetBrains Mono + Inter
- **Backend**: Node.js, Express
- **Database**: MongoDB (optional — backend serves static JSON by default)
- **Theme**: Dark terminal/code aesthetic with blue accent

## Project Structure
```
vivek-portfolio/
├── client/          # React frontend
│   └── index.html   # Main portfolio page (standalone, no build needed)
├── server/          # Express backend
│   └── index.js     # REST API for portfolio data
└── package.json     # Root scripts
```

## Quick Start (Standalone – no server needed)
Just open `client/index.html` directly in a browser. It runs fully standalone with embedded data.

## Running with Backend
```bash
# 1. Install all dependencies
npm run install:all

# 2. Run both client & server concurrently
npm run dev
```

Backend runs on `http://localhost:5000`  
Frontend runs on `http://localhost:5173` (Vite dev server)

## API Endpoints (Express)
| Endpoint | Description |
|---|---|
| `GET /api/portfolio` | Full portfolio data |
| `GET /api/portfolio/hero` | Hero section (name, stats, links) |
| `GET /api/portfolio/skills` | Skills by category |
| `GET /api/portfolio/projects` | Projects list |
| `GET /api/portfolio/experience` | Work experience |
| `GET /api/portfolio/achievements` | Achievements & hackathons |
| `GET /api/portfolio/education` | Education history |

## Adding MongoDB (Optional)
1. `cd server && npm install mongoose`
2. Add `MONGO_URI=mongodb://localhost:27017/portfolio` to a `.env` file
3. Update `server/index.js` to connect to MongoDB and seed/read from it

## Deployment
- **Frontend**: Deploy `client/` to Vercel or Netlify (just drop `index.html`)
- **Backend**: Deploy `server/` to Railway, Render, or Heroku
- Update the fetch URL in `client/index.html` from the inline data to `https://your-api-url.com/api/portfolio`

## Customisation
All portfolio data lives in `server/index.js` under `portfolioData`. Edit fields there to update the site content.
