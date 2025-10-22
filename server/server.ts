// server/src/server.ts
import express, { Request, Response } from 'express';
import connectDB from './db';
import dotenv from 'dotenv';
import cors from 'cors'; // Important for connecting frontend and backend

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors()); // Enable CORS for React frontend

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');
});

// TODO: Add your routes and controller logic here

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));