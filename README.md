# HireInfluencer Platform

This repository contains a basic skeleton for the HireInfluencer website. It includes a React frontend with a small 3D demo and an Express + GraphQL backend.

## Getting Started

### Prerequisites
- Node.js 18 or later

### Installation
1. Install server dependencies:
   ```bash
   cd server
   npm install
   ```
2. Install client dependencies:
   ```bash
   cd ../client
   npm install
   ```

### Running the Development Servers
- **Backend**
  ```bash
  cd server
  npm start
  ```
  The GraphQL endpoint will be available at `http://localhost:4000/graphql`.

- **Frontend**
  ```bash
  cd client
  npm run dev
  ```
  Open your browser to the printed local URL to view the React app.

### Building the Frontend
To create a production build:
```bash
cd client
npm run build
```
The build output will be in `client/dist`.

This setup serves as a starting point for implementing the full HireInfluencer platform described in `HireInfluencer_Plan.md`.
