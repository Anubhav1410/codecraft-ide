import express, { Request, Response } from "express";
import cors from "cors";
import executeRouter from "./routes/execute";

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (req: Request, res: Response) => {
    res.json({ message: "CodeCraft API is running" });
});

// Code execution route
app.use("/api/execute", executeRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});