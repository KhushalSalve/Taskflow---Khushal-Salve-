# Taskflow

This is the codebase for Taskflow, an ultra-minimalist project management tool.

## Repository Structure

This project is structured as a monorepo containing both the frontend and backend applications.

- `/frontend` - React (TypeScript) application using Vite, Tailwind CSS, and Zustand.
- `/backend` - Node.js (Express) API.
- `docker-compose.yml` - Root configuration to run both services together.

## Running Locally

1. Make sure you have Docker and Docker Compose installed.
2. Copy `.env.example` to `.env` in the root directory (and inside `/backend` if needed) and fill in your secrets.
3. Run the following command from the root directory:

```bash
docker-compose up --build
```

- The frontend will be available at `http://localhost:3000`
- The backend API will be available at `http://localhost:4000`

## Exporting to GitHub

To export this project to your own GitHub repository:
1. In the AI Studio UI, click the **Settings** menu (gear icon).
2. Select **Export to GitHub** or **Export as ZIP**.
3. If exporting as ZIP, extract it locally, initialize a git repository (`git init`), and push it to your new public GitHub repository named `taskflow-[your-name]`.

**Important**: Never commit your `.env` file containing real secrets. A `.env.example` has been provided.
