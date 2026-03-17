# Portfolio Website

This is a modern, responsive, and animated portfolio website for a Fresher Full Stack Developer.

## Tech Stack

- **Frontend:** React.js (Vite), Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL

## Environment Variables

To run this project, you will need to add the following environment variables to your .env files:

### Frontend (.env in root)
`VITE_API_URL=http://localhost:5000/api/contact`

### Backend (.env in backend folder)
`PORT=5000`
`MONGODB_URI=mongodb+srv://JaydipVora:J_1302@cluster0.mla04j8.mongodb.net/portfolio`

## Running Locally

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

4. **Run the backend server:**
   ```bash
   npm start
   ```

5. **Run the frontend development server:**
   ```bash
   cd ..
   npm run dev
   ```

## Deployment

### Database (PostgreSQL)

1. Install PostgreSQL on your local machine or use a cloud service like [Neon](https://neon.tech/) or [Supabase](https://supabase.com/).
2. Create a new database.
3. Update the `DATABASE_URL` in your `backend/.env` file.

### Backend (Heroku/Vercel/etc.)

1. Create an account on a hosting platform like Heroku or Vercel.
2. Create a new project and connect it to your Git repository.
3. Set the environment variables (e.g., `MONGODB_URI`).
4. Deploy the `backend` directory.

### Frontend (Vercel/Netlify/etc.)

1. Create an account on a hosting platform like Vercel or Netlify.
2. Create a new project and connect it to your Git repository.
3. Set the build command to `npm run build`.
4. Set the publish directory to `dist`.
5. Set the environment variable `VITE_API_URL` to the URL of your deployed backend (e.g., `https://your-backend.herokuapp.com/api/contact`).
6. Deploy the project.
