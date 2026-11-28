import express from "express";
import cors from "cors";
import postsRouter from "./routes/posts.js";

const app = express();

const PORT = 3000;

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

app.use("/posts", postsRouter);

app.listen(PORT, () => {
  console.log("🚀 http://localhost:3000/");
});