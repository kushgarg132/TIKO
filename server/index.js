import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import trainRoutes from "./routes/train.js";

dotenv.config();

const CONNECTION_URL = "mongodb+srv://kushgarg:i6zyttkWHOVIVkCW@railway.4yryib3.mongodb.net/";
try {
  const conn = await mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB connected: ${conn.connection.host}`);
} catch (error) {
  console.error(error);
  process.exit(1);
}

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRoutes);
app.use("/train", trainRoutes);

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
