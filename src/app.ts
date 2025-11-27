import cors from "cors";
import express from "express";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(cors());
app.use(express.json());

//Routes
app.use("/users", userRoutes);

export default app;
