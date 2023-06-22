import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import trainRoutes from "./routes/train.js";
import ticketRoutes from "./routes/ticket.js";
import db from "./connectMongoDB.js";
import morgan from "morgan"; 




dotenv.config();
db();

const app = express();
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//Health Check
app.get("/first", (req, res) => {
  res.status(200).json({
    type: "success",
    message: "server is up and running",
    data: null,
  });
});

// app.use("/user", userRoutes);
app.use("/train", trainRoutes);
app.use("/ticket", ticketRoutes )

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

